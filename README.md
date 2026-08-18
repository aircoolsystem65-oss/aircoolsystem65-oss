# Air Cool System — Landing Page

## Replacing the placeholder images with real photos

The service cards under **Our Repair & Installation Services** use lightweight
SVG placeholders so the page loads instantly. Swap them for real photos any
time — the layout is built to handle it without breaking:

| Card                        | File to replace              |
|------------------------------|-------------------------------|
| AC Repair, Service & Maintenance | `images/service-ac.jpg`      |
| AC Piping & Installation         | `images/service-piping.jpg`  |
| Refrigerator Repair & Service    | `images/service-fridge.jpg`  |
| Washing Machine Repair & Service | `images/service-washing.jpg` |
| TV Repair & Service              | `images/service-tv.jpg`      |

### How to swap safely
1. Save your real photo with the **same filename** shown above, but as
   `.jpg` or `.webp` (e.g. `service-ac.jpg`), then update the `src` in
   `index.html` to match — or simply save it as a `.jpg` and update just
   the file extension in that one `<img>` tag.
2. **Recommended photo size:** roughly **1200 × 900px** (4:3 ratio) — this
   matches the card's built-in aspect ratio, so nothing stretches or crops
   oddly.
3. **Keep file size light:** aim for **under 300–500KB per photo**. Use a
   free compressor such as [Squoosh](https://squoosh.app) or
   [TinyPNG](https://tinypng.com) before uploading — this keeps the page
   fast on mobile data.
4. That's it — the `.service-card__media` container in `css/style.css`
   automatically crops any image to fit (`object-fit: cover`), so photos of
   any dimension will display cleanly without breaking the grid.

The same approach applies to `images/owner-photo.jpg` (founder photo) and
`images/hero-illustration.jpg` (the illustration below the booking form).

## Project structure
```
air-cool-system/
├── index.html
├── css/style.css
├── js/script.js
└── images/   ← all icons, illustrations & swappable service photos
```
