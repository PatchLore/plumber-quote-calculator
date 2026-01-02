import pandas as pd

"""
export_csv.py
-------------
This is a convenience wrapper script that simply loads
the final merged CSV and shows a preview in terminal.

It's optional, but useful for quick verification.
"""

FILE_PATH = "output/leads_final.csv"

if __name__ == "__main__":
    try:
        df = pd.read_csv(FILE_PATH)

        print("📊 Preview of exported leads:\n")

        print(df.head(20))

        print(f"\nTotal leads: {len(df)}")

        print(f"File location: {FILE_PATH}")

    except Exception as e:
        print(f"❌ Error reading {FILE_PATH}: {e}")

