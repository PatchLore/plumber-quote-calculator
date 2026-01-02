"""
Configuration for FixBlox Lead Generator
Handles:
- Google Places API key
- Companies House API key
- Search settings for UK trades
"""

# ===========================================
# 🔑 API KEYS (Add your actual keys here)
# ===========================================
GOOGLE_API_KEY = "YOUR_GOOGLE_PLACES_API_KEY"
COMPANIES_HOUSE_API_KEY = "YOUR_COMPANIES_HOUSE_API_KEY"

# ===========================================
# 🔍 SEARCH KEYWORDS
# Expandable list for the Google Places API
# ===========================================
SEARCH_KEYWORDS = [
    "plumber",
    "emergency plumber",
    "boiler repair",
    "boiler installation",
    "gas engineer",
    "central heating engineer",
    "bathroom fitter",
    "electrician",
    "24 hour plumber",
    "local plumber",
]

# ===========================================
# 🌍 LOCATION SETTINGS
# ===========================================
SEARCH_LOCATION = "United Kingdom"
SEARCH_RADIUS_METERS = 50000  # 50km search radius

# ===========================================
# 🔢 LIMITS
# ===========================================
MAX_RESULTS = 300  # per keyword
