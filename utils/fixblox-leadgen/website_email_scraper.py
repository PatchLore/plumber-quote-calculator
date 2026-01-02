# -*- coding: utf-8 -*-
import requests
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

"""
Website Email Scraper
---------------------
Take each lead with a website and find emails by scanning:
- homepage
- /contact
- /about
- /contact-us
- /services
- /get-in-touch
"""

INPUT_FILE = "output/enriched.json"
OUTPUT_FILE = "output/merged_with_emails.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
}

COMMON_PATHS = [
    "",
    "contact",
    "contact-us",
    "about",
    "about-us",
    "services",
    "get-in-touch"
]


def extract_emails_from_text(text):
    pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    return list(set(re.findall(pattern, text)))


def scrape_page(url):
    try:
        res = requests.get(url, headers=HEADERS, timeout=8)
        if res.status_code != 200:
            return []

        soup = BeautifulSoup(res.text, "html.parser")

        # Look in visible text
        emails = extract_emails_from_text(soup.get_text())

        # Look in HTML source
        emails += extract_emails_from_text(res.text)

        return list(set(emails))

    except:
        return []


def scrape_website(base_url):
    all_emails = []

    if not base_url.startswith("http"):
        base_url = "http://" + base_url

    for path in COMMON_PATHS:
        url = urljoin(base_url + "/", path)

        emails = scrape_page(url)
        if emails:
            all_emails += emails

    return list(set(all_emails))


def run():
    print("🔎 Scanning websites for emails...")

    data = json.load(open(INPUT_FILE))
    updated = []

    for d in data:
        website = d.get("website")

        if website:
            print(f"🌐 Checking {website}...")
            emails = scrape_website(website)
            d["emails_found"] = emails
        else:
            d["emails_found"] = []

        updated.append(d)

    json.dump(updated, open(OUTPUT_FILE, "w"), indent=2)
    print(f"\n✅ Saved → {OUTPUT_FILE}")


if __name__ == "__main__":
    run()

