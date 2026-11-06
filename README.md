# Air Cool System Website (v4 - colour themes + shine)

Pages: index, about, services, ac-service, ac-repair, ac-installation, refrigerator-repair, washing-machine-repair, tv-repair, booking, blog (+3 articles), contact, thankyou.

## What changed in v4

- Every page has its own colour theme (hero, top bar, footer, dark bands, headline colours).
  Home = navy/violet/gold, About = emerald, Services = violet, AC Service = turquoise, AC Repair = crimson,
  AC Installation = copper, Fridge = ice blue, Washing Machine = fuchsia, TV = neon night, Booking = fresh green,
  Contact = cobalt, Blog = berry. Colours live in the "v4 COLOUR-THEME LAYER" at the end of css/style.css.
- Every section below the hero has its own colour palette AND one of 4 designs (bar, tint, outline, solid), so no two neighbouring sections look the same.
- Hero headlines and section headings have a slow colour shine. Company name "Air Cool System" is shiny gold/white with a glowing logo ring.
- Booking form wording simplified: grouped services (AC, Piping, Fridge, Washing Machine, TV), clear labels, helper text, digits-only phone field. Field names and values are unchanged, so Web3Forms emails look the same as before.
- SEO: unique title, description and keywords on every page, canonical, Open Graph and Twitter tags, richer LocalBusiness schema, sitemap with lastmod.
- Images: all photos are 800x600 (4:3). CSS crops any photo you upload later to 4:3 automatically, so mobile, tablet and laptop always look right.
- Fixed: cards no longer overflow on very small phones (320px).

## To do before going live

1. Replace https://www.YOURDOMAIN.com with the real domain in ALL .html files, sitemap.xml and robots.txt
   (canonical, og:url, og:image and schema use it). Example (Linux/Mac): sed -i 's#https://www.YOURDOMAIN.com#https://www.realsite.com#g' *.html sitemap.xml robots.txt
2. Replace SAMPLE REVIEWS with real customer feedback (search "SAMPLE REVIEWS").
3. Add your own photos using IMAGES-GUIDE.md.

## Kept from the original zip

Google tag + Click-to-call conversion (AW-18398218387) on every page, phone +91 95278 68342, Web3Forms booking form (same access key and field names), WhatsApp link. Owner name and email appear only on contact.html.

## What changed in v7

- The old fixed arrival-time wording was removed from every page (visible text, meta tags and FAQ schema).
- The line "Brand names belong to their respective owners..." now appears only on contact.html.
- Trust bar icons (Verified Service, Trusted Team, Experienced, All Brands) have a slowly spinning ring with orbiting stars.
- Footer on every page: Trusted, Verified and Customer Satisfaction badges with twinkling stars; the footer logo has a spinning star ring.
- Book Now / Call Now text is darker and bolder so it is always readable, including the footer and hover state.
- Google tag, click-to-call conversion, Web3Forms booking form and all other content are unchanged.
- All HTML, CSS and JS files are re-formatted with indentation and line breaks (Windows line endings) so they open cleanly in Notepad.
