# mtaa. | Embu home rentals

A responsive apartment rental marketplace prototype for Embu, Kenya. The current build is a frontend demo with seeded sample listings and in-memory interactions.

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Included in this prototype

- Neighborhood, maximum rent, bedroom, and amenity filters.
- Map-and-list or list-only search presentation with approximate Embu pins.
- Listing details, favorites, and guest inquiry form.
- Post-inquiry account prompt and demo registered-user location unlock.
- Listing submission and admin approval queue.
- Responsive layout and page metadata for search engines.

Listings, accounts, favorites, inquiries, and moderation changes currently live only in browser memory and reset on refresh. The exact-address reveal is simulated and must not be used to protect real location data. Do not enter real personal information.

## Before production

Connect PostgreSQL/PostGIS, authentication and authorization, private location storage, object storage for photos, transactional email, rate limiting, audit history, and a real Embu map/geocoding provider. Replace the illustrative street map and sample listings with verified data. Confirm applicable data protection, consumer, rental, mapping, and image-provider requirements for Kenya.
