# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import re

INPUT_CSV = "output/leads_final.csv"
OUTPUT_JSON = "output/websites_found.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
}


def duckduckgo_search(query):
    """DuckDuckGo HTML search with retries + fallback"""
    url = "https://duckduckgo.com/html/?q=" + query.replace(" ", "+")

    for attempt in range(3):
        try:
            res = requests.get(url, headers=HEADERS, timeout=10)
            soup = BeautifulSoup(res.text, "html.parser")

            links = soup.select(".result__a")
            websites = []

            for a in links:
                href = a.get("href")
                if href and href.startswith("http"):
                    websites.append(href)

            return websites[:3]

        except Exception:
            print(f"   ⚠️ DuckDuckGo timeout, retrying ({attempt+1}/3)...")
            time.sleep(2)

    print("   ❌ DuckDuckGo failed — switching to fallback search")
    return fallback_search(query)


def fallback_search(query):
    """Uses Bing's free HTML endpoint (no API key required)"""
    url = "https://www.bing.com/search?q=" + query.replace(" ", "+")

    try:
        res = requests.get(url, headers=HEADERS, timeout=10)
        soup = BeautifulSoup(res.text, "html.parser")

        links = soup.select("li.b_algo h2 a")

        websites = []
        for a in links:
            href = a.get("href")
            if href and href.startswith("http"):
                websites.append(href)

        return websites[:3]

    except Exception:
        return []


def clean_website(url):
    if not url:
        return None

    # Strip tracking and redirects
    url = re.sub(r"&utm.*", "", url)
    url = re.sub(r"\?utm.*", "", url)

    # Remove DuckDuckGo redirect wrapper
    if "duckduckgo.com/l/" in url:
        try:
            url = url.split("uddg=")[-1]
        except:
            pass

    return url


def find_websites():
    df = pd.read_csv(INPUT_CSV)

    results = []

    for i, row in df.iterrows():
        name = row["name"]
        print(f"\n🔎 Searching for website: {name}")

        query = f"{name} plumber website"
        websites = duckduckgo_search(query) or []

        website_cleaned = clean_website(websites[0]) if websites else None

        results.append({
            "name": name,
            "website": website_cleaned
        })

        time.sleep(1)

    import json
    json.dump(results, open(OUTPUT_JSON, "w"), indent=2)

    print(f"\n✅ Websites collected → {OUTPUT_JSON}")


if __name__ == "__main__":
    find_websites()

