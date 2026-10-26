# Content verification checklist (UK)

The legal summaries on this site were written without access to the primary sources
(gov.uk, legislation.gov.uk were not reachable from the build environment). They were cross-checked
against several independent legal-practice summaries. **Have someone with access confirm each item
against the current Immigration Rules before treating the site as verified**, then record the date.

| # | Claim on site | Where | Confirm against | Verified (date / by) |
|---|---------------|-------|-----------------|----------------------|
| 1 | No re-entry ban if you leave voluntarily, at own expense, within 30 days of permission ending | calculator, FAQ, `uk-re-entry-ban`, `overstayed-uk-visa-what-to-do` | Immigration Rules, Part Suitability, SUI 12 | |
| 2 | 12-month ban: voluntary, own expense, after >30 days | same | SUI 12.1 | |
| 3 | 2-year ban: voluntary, public expense, within 6 months of notification / appeal rights ending | `uk-re-entry-ban`, FAQ | SUI 12.1 | |
| 4 | 5-year ban: voluntary, public expense, more than 6 months after | same | SUI 12.1 | |
| 5 | 10-year ban: removal, deportation or deception. (Sources disagreed on removal: 5 vs 10 years.) | same | SUI 12.1 | |
| 6 | Late application within 14 days, good reason beyond control, overstay disregarded | `14-day-rule`, calculator | SUI 13 (formerly para 39E) | |
| 7 | Section 3C leave continues permission/conditions for in-time applications, and during in-time review/appeal | `section-3c-leave` | Immigration Act 1971 s3C | |
| 8 | s24 offence: fine or up to 6 months | FAQ, `overstaying-consequences` | Immigration Act 1971 s24 | |
| 9 | Right to work / rent / NHS charging / banking / driving licence consequences | `overstaying-consequences` | GOV.UK right to work, right to rent; NHS charging guidance | |

The calculator logic encoded: day 0 = permission ends; 1-14 = 14-day window; 15-30 = "30 days or less"; 31+ = over 30 days.
Date input is parsed as a local date (not UTC) so results are not shifted by time zone.
