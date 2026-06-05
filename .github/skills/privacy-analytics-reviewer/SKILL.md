---
name: privacy-analytics-reviewer
description: Review analytics, consent, and tracking changes for privacy-safe implementation.
---

# Privacy Analytics Reviewer

Use this skill when reviewing Google Analytics, cookie consent, or other tracking-related changes.

Check for:

- tracking code added before consent
- inconsistent consent state handling
- missing fallbacks when analytics is disabled
- unclear user-facing consent copy
- unnecessary tracking on landing pages

Prefer implementations that:

- defer tracking until consent is granted where required
- keep analytics isolated from content rendering
- avoid collecting more data than needed
- remain compatible with a simple Astro deployment

When something looks risky, call it out explicitly and suggest the least invasive fix.
