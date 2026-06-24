# CoolPaws Co. — Shopify Theme Customizations

Customizations for the **CoolPaws Co.** Shopify store built on top of the Dawn theme.

## What's included

- `assets/coolpaws-animations.css` — Scroll animations, hero effects, hover transitions
- `assets/coolpaws-animations.js` — Intersection Observer for fade-in on scroll
- `snippets/coolpaws-hero.liquid` — Animated hero section for the homepage

## How to apply

1. In the Shopify Admin go to **Online Store → Themes → Dawn → Edit code**
2. Upload the files from `assets/` into the **Assets** folder
3. Add `{{ 'coolpaws-animations.css' | asset_url | stylesheet_tag }}` to `layout/theme.liquid` before `</head>`
4. Add `{{ 'coolpaws-animations.js' | asset_url | script_tag }}` before `</body>`
5. Paste the contents of `snippets/coolpaws-hero.liquid` into your homepage section

## Store
- **Name**: CoolPaws Co.
- **Theme**: Dawn
- **Niche**: Pet cooling products (mats, pads)
