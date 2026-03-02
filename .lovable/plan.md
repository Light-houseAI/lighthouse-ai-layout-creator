

# Krama Landing Page Overhaul

Based on the strategy document, here are the 6 changes to implement. **No visuals or animations will be changed** -- only copy/text content will be updated.

---

## Change 1: Hero Section Copy Update

**File:** `src/components/landing/Hero.tsx`

- **Eyebrow:** Change "AI-POWERED WORKSPACE" to "WORKFLOW INTELLIGENCE"
- **Headline:** Keep "Your workflow, understood." (no change)
- **Subtext:** Replace current description with:
  > "Krama captures how work actually happens -- across every app in your workflow -- then turns that invisible knowledge into actionable insights, shareable skill files, and AI agents that work because they've seen what you do."
- **Secondary CTA:** Add a "See how it works" link below the waitlist form (scrolls to How It Works section)

---

## Change 2: Persona Cards Content Update

**File:** `src/components/landing/Features.tsx`

- **Section header:** Change from "Built for people who want to get better at their work." to "Built for the people doing the work -- and the leaders scaling it."
- **Replace all 4 persona cards** with new content:
  1. "The Ops Leader Who Can't See Below the Queue" -- task-level visibility pain point
  2. "The New Hire Drowning in Shadowing" -- onboarding/tribal knowledge pain point
  3. "The Team Already Using AI -- Badly" -- AI adoption pain point
  4. "The Privacy-First Enterprise" -- on-device processing, enterprise buyer concern

Each card keeps the same structure (title, pain point quote, solution text).

---

## Change 3: How It Works Tab Descriptions Update

**File:** `src/components/landing/UseCases.tsx`

Update only the `description` text for each of the 4 use cases in the `useCases` array:

- **Capture:** "Runs on your device. Captures what apps you use and how you move between them. No screenshots. No recordings. No audio. A blue dot in your menu bar shows when it's active -- you're always in control."
- **Analyze:** "Classifies what you were trying to do, how you did it, and where time went. All AI processing happens on-device -- your workflow data never leaves your machine unless you choose to share it."
- **Optimize:** "Compares your workflow against your team's best performers. Surfaces specific, actionable recommendations: 'You checked availability in a spreadsheet, then went to the scheduler which already has availability. Skipping the spreadsheet saves 3 min/alert.'"
- **Execute:** "Turn recommendations into shareable skill files and AI agents. Your team's best practices become everyone's starting point -- not a document they'll never read, but active guidance that shows up when it matters."

No animation changes.

---

## Change 4: New "Why Krama" Competitive Positioning Section

**New file:** `src/components/landing/WhyKrama.tsx`
**Modified file:** `src/pages/Index.tsx` (add it between Features and UseCases)

A new section with header "The gap no other tool closes." containing 3 comparison blocks:

1. "Your CRM sees work orders. Not workflows." -- cross-tool visibility differentiator
2. "Consultants give you a snapshot. We give you continuous discovery." -- consultant comparison with pricing
3. "AI without evidence is just guessing." -- grounded-in-observation differentiator

Styled to match existing section patterns (same padding, container, border, typography classes).

---

## Change 5: CTA Section Copy Update

**File:** `src/components/landing/CTA.tsx`

- **Headline:** Change to "See how your team actually works -- and what your best people do differently."
- **Bullets:** Update to:
  - Automatic workflow capture across every tool
  - AI insights grounded in what actually happened, not what someone remembers
  - On-device processing -- your data stays yours

---

## Change 6: Hero Subtext Addition

**File:** `src/components/landing/Hero.tsx`

Add the "early access" call-out text. Keep "We're onboarding early users now. Request access to be in the first cohort." as-is (already exists and aligns with strategy).

---

## Section Order (in Index.tsx)

1. Header
2. Hero (updated copy)
3. Features / Persona Cards (updated copy)
4. **WhyKrama (new section)**
5. UseCases / How It Works (updated descriptions)
6. CTA (updated copy)
7. Footer

---

## Technical Notes

- All changes are copy-only except the new `WhyKrama.tsx` component
- No animations, visuals, colors, or layout structures will be modified
- The new WhyKrama section will follow existing design patterns (bg-background, border-t, container mx-auto, etc.)
- The secondary "See how it works" CTA will be a simple anchor link (`#how-it-works`) with an `id` added to the UseCases section

