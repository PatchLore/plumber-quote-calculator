import requests
import json
import time
from config import COMPANIES_HOUSE_API_KEY

"""
Companies House Enrichment Script
---------------------------------
Takes raw Google Places data and enriches it with:
- official registered name
- company number
- registered address
- SIC codes (industry classification)
"""

SEARCH_URL = "https://api.company-information.service.gov.uk/search/companies"

def enrich_company(business_name):
    """
    Searches Companies House for the given business name.
    Returns a dictionary of enriched fields.
    """
    if not business_name:
        return {}

    try:
        r = requests.get(
            SEARCH_URL,
            params={"q": business_name},
            auth=(COMPANIES_HOUSE_API_KEY, "")
        )

        data = r.json()

        if "items" in data and len(data["items"]) > 0:
            item = data["items"][0]
            return {
                "official_name": item.get("title"),
                "company_number": item.get("company_number"),
                "registered_address": item.get("address_snippet"),
                "sic_codes": item.get("sic_codes"),
            }

    except Exception as e:
        print(f"⚠️ Error enriching {business_name}: {e}")

    return {}  # fallback if nothing found

if __name__ == "__main__":
    print("🚀 Enriching with Companies House data...\n")

    # Load Google Places results
    data = json.load(open("output/raw_google.json"))

    enriched_results = []

    for i, item in enumerate(data):
        name = item.get("name")
        print(f"🔎 [{i+1}/{len(data)}] Enriching: {name}")

        details = enrich_company(name)
        enriched_results.append({**item, **details})

        time.sleep(0.4)  # avoid rate-limits

    # Save enriched output
    with open("output/enriched.json", "w") as f:
        json.dump(enriched_results, f, indent=2)

    print("\n✅ Saved enriched data → output/enriched.json")

