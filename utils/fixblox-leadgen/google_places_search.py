import requests
import json
import time
from config import (
    GOOGLE_API_KEY,
    SEARCH_KEYWORDS,
    SEARCH_LOCATION,
    MAX_RESULTS
)

"""
Google Places Text Search Script
--------------------------------
Searches for UK trades using defined keywords and location,
collects place results, follows pagination, and stores results
in output/raw_google.json.
"""

GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"

def search_places(keyword):
    """
    Perform a Google Places text search for a given keyword.
    Automatically handles pagination with next_page_token.
    """
    print(f"\n🔍 Searching for: {keyword}")
    
    params = {
        "query": f"{keyword} in {SEARCH_LOCATION}",
        "key": GOOGLE_API_KEY
    }

    all_results = []
    page = 1

    while True:
        response = requests.get(GOOGLE_PLACES_URL, params=params)
        data = response.json()

        results = data.get("results", [])
        all_results.extend(results)

        print(f"   • Page {page} → {len(results)} results")

        # Stop if no more pages or reached max limit
        if "next_page_token" not in data or len(all_results) >= MAX_RESULTS:
            break

        # Google requires a delay before next_page_token becomes active
        time.sleep(2)

        params["pagetoken"] = data["next_page_token"]
        page += 1

    return all_results[:MAX_RESULTS]

if __name__ == "__main__":
    master_results = []

    for keyword in SEARCH_KEYWORDS:
        results = search_places(keyword)
        master_results.extend(results)

    # Remove duplicates by place_id
    unique = {item["place_id"]: item for item in master_results}
    unique_results = list(unique.values())

    print(f"\n📦 Total unique results collected: {len(unique_results)}")

    # Save results
    with open("output/raw_google.json", "w") as f:
        json.dump(unique_results, f, indent=2)

    print("✅ Saved → output/raw_google.json")

