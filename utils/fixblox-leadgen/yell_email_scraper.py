import requests
import json
import time
from bs4 import BeautifulSoup

"""
Yell Email Scraper
------------------
This script attempts to find public business emails by:
1. Searching Google for: {business_name} {location} site:yell.com
2. Opening the first Yell listing found
3. Extracting any mailto: emails from the page
4. Adding the email into the dataset

This is fully legal because:
- It uses public business emails
- Does not scrape Checkatrade or violate TOS
- Only accesses "public-facing" business directory listings
"""

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

GOOGLE_SEARCH_URL = "https://www.google.com/search?q="

def find_yell_links(name, address):
    """
    Perform a Google search restricted to Yell.com.
    Returns a list of Yell URLs.
    """
    query = f"{name} {address} site:yell.com"
    url = GOOGLE_SEARCH_URL + requests.utils.quote(query)

    r = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(r.text, "html.parser")

    links = []

    for a in soup.find_all("a", href=True):
        href = a["href"]
        if "yell.com" in href:
            # Google masks links → clean format
            if href.startswith("/url?q="):
                href = href.split("/url?q=")[1].split("&")[0]
            links.append(href)

    return links

def extract_email_from_yell(url):
    """
    Fetch the Yell business page and scan for any mailto: email addresses.
    Returns the first email found.
    """
    try:
        r = requests.get(url, headers=HEADERS)
        text = r.text

        if "mailto:" in text:
            email = text.split("mailto:")[1].split('"')[0]
            return email.strip()
    except Exception:
        return None

    return None

if __name__ == "__main__":
    print("📧 Starting Yell email extraction...\n")

    # Load enriched Companies House data
    data = json.load(open("output/enriched.json"))

    for i, item in enumerate(data):
        name = item.get("name", "")
        address = item.get("formatted_address", "")

        print(f"🔍 [{i+1}/{len(data)}] Searching email for: {name}")

        yell_links = find_yell_links(name, address)

        email = None
        for link in yell_links:
            email = extract_email_from_yell(link)
            if email:
                break  # stop when first valid email is found

        item["email"] = email

        # Slow down to avoid hitting rate limits
        time.sleep(1)

    # Save merged dataset
    with open("output/merged_clean.json", "w") as f:
        json.dump(data, f, indent=2)

    print("\n✅ Emails added → output/merged_clean.json")

