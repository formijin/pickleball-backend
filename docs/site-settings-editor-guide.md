# Site Settings Editor Guide

Use this page when updating global SEO and social metadata in Strapi:

- Content type: `Site Settings`
- Scope: Site-wide defaults for metadata, Open Graph, Twitter cards, robots, and social links
- Note: Page-level metadata can still override these values when needed

## Required Fields (Always Fill)

| Field | Why it matters | Format guidance | Example |
|---|---|---|---|
| `siteName` | Default title and brand name in metadata | Short brand name | `College Pickleball Cup` |
| `siteDescription` | Default SEO description for pages without custom copy | 120-160 chars, clear and human-readable | `The first global collegiate pickleball tournament...` |
| `siteUrl` | Base URL for canonical and OG metadata | Absolute URL with `https://` | `https://pickleballcup.com` |
| `registrationUrl` | Registration CTAs across the site | Absolute URL preferred | `https://pickleballcup.com/register` |

## Optional Fields (Recommended)

| Field | When to use | Format guidance |
|---|---|---|
| `defaultOgTitle` | Override default title for OG previews | Keep under ~60 chars |
| `defaultOgDescription` | Override default OG description | Keep under ~160 chars |
| `ogSiteName` | Custom OG site name | Usually same as `siteName` |
| `defaultOgImage` | Fallback preview image site-wide | Image only, landscape, recommended `1200x630` |
| `defaultOgImageAlt` | Accessibility text for OG image | Describe image content clearly |
| `twitterCard` | Control card style in X/Twitter | Use `summary_large_image` unless there is a reason not to |
| `twitterSiteHandle` | Site account for Twitter metadata | Include `@` (example `@pickleballcup`) |
| `twitterCreatorHandle` | Creator handle for authored content | Include `@` |
| `defaultTwitterImage` | Twitter-specific fallback image | Image only, recommended `1200x630` |
| `robotsIndex` | Allow search indexing | Keep `true` for production |
| `robotsFollow` | Allow crawler link-following | Keep `true` for production |
| `canonicalHomepageUrl` | Force homepage canonical URL if needed | Absolute URL with `https://` |
| `defaultLocale` | Default language locale | Example: `en` or `en-US` |

## Optional Social and Contact Fields

Fill these when links are available. Empty values are safe.

- `instagramUrl`
- `xUrl`
- `youtubeUrl`
- `linkedinUrl`
- `facebookUrl`
- `newsletterUrl`
- `contactEmail`
- `pressEmail`

## Publishing Checklist

1. Confirm all required fields are filled and valid.
2. Ensure URL fields start with `https://`.
3. Ensure image fields are uploaded and not oversized.
4. Save and publish `Site Settings`.
5. Verify homepage metadata and social preview after publish.
