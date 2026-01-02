import json
import pandas as pd

"""
Clean + Merge + Deduplicate Script
----------------------------------
Takes enriched + email-scraped data and outputs a clean CSV
that can be used for outreach campaigns.
"""

OUTPUT_CSV = "output/leads_final.csv"
INPUT_FILE = "output/merged_clean.json"

def clean():
    print("🧹 Cleaning and merging leads...")

    # Load merged dataset
    data = json.load(open(INPUT_FILE))

    rows = []
    for d in data:
        rows.append({
            "name": d.get("name"),
            "phone": d.get("formatted_phone_number"),
            "email": d.get("email"),
            "website": d.get("website"),
            "rating": d.get("rating"),
            "reviews": d.get("user_ratings_total"),
            "address": d.get("formatted_address"),
            "official_name": d.get("official_name"),
            "company_number": d.get("company_number"),
            "sic_codes": d.get("sic_codes"),
        })

    df = pd.DataFrame(rows)

    # Remove empty rows
    df.dropna(how="all", inplace=True)

    # Drop duplicates using name + address
    df.drop_duplicates(subset=["name", "address"], inplace=True)

    # Reset index
    df.reset_index(drop=True, inplace=True)

    # Export CSV
    df.to_csv(OUTPUT_CSV, index=False)
    print(f"✅ Clean CSV exported → {OUTPUT_CSV}")

if __name__ == "__main__":
    clean()

