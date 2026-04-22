# Version 2 Design Direction

## Design Goal

Version 2 should feel like a Hilton APAC distribution command center: calm, premium, precise, and operational. The page is not a marketing dashboard; it is a daily analyst workspace built for scanning, triage, diagnosis, and decision-making.

## Theme

Use Hilton-inspired blue as the core identity color, supported by clean neutrals and restrained operational status colors.

Recommended palette:

- Hilton navy: `#003B73`
- Deep navy surface: `#10243C`
- Action blue: `#0D66A5`
- Sky data blue: `#3C91D0`
- Pale blue surface: `#EEF6FF`
- Page background: `#F4F7FB`
- Card surface: `#FFFFFF`
- Border: `#D8E3EF`
- Primary text: `#152033`
- Secondary text: `#66748A`
- Healthy: `#14845D`
- Warning: `#B86A00`
- Critical: `#BD3030`
- Neutral/resolved: `#66748A`

Chart colors should not be all blue. Use navy for Direct, warm coral for OTA, green for GDS, and muted violet/gray for Other so comparisons are easy to read.

## Layout Principles

- Treat each section as an isolated work surface.
- Keep section spacing generous enough that the user understands they have entered a new workflow.
- Use a visible section separator, but keep it subtle.
- Avoid nested cards when possible; use cards only for tables, KPI groups, panels, and chart modules.
- Keep the sidebar fixed on desktop and let active navigation highlight based on scroll.
- Keep the top context area informational only: current time and APAC market.
- Do not bring back global filters.

## Typography

- Use one clean sans-serif system stack.
- Page title: 32-38px desktop, 24-28px mobile.
- Section title: 18-22px.
- Table text: 12-13px.
- KPI value: 24-28px.
- Eyebrows: 11px, uppercase, strong weight.
- Avoid oversized hero-style typography inside dashboard sections.

## Section Header Pattern

Each section title should include:

- Small eyebrow describing the workflow.
- Icon badge before the title.
- Clear utility title.
- One short muted sentence on the right explaining scope or behavior.

Example:

`Rate parity control`  
`[=] Rate Parity`  
`Select an exception to update the rate comparison panel`

## Components

### Sidebar

- Use deep Hilton navy background.
- Active nav item should have a lighter navy highlight and a left or inset accent.
- Keep nav labels short and stable.
- Avoid icons in the sidebar unless they are subtle and improve scanning.

### KPI Cards

- White card surface.
- Thin blue-gray border.
- KPI labels muted.
- KPI values high contrast.
- Status should be conveyed by small accent text or a subtle top/bottom border, not heavy full-card color.

### Tables

- Use compact rows.
- Sticky headers are optional but helpful for large tables.
- Use uppercase muted column headers.
- On hover, use pale blue row background.
- Status pills should be compact and consistent.

### Channel Buttons

- Use square icon badges with short channel initials.
- Active channel should use Hilton blue border and a subtle inset underline.
- Keep all channel buttons same height.
- Avoid using official partner logos unless assets are approved.

### Charts

- Every chart needs a clear title and metric note.
- Axis-based charts must label axes directly.
- Stacked area chart should use distinct channel colors:
  - Direct: navy
  - OTA: coral
  - GDS: green
  - Other: violet/gray
- Avoid showing too many labels under the chart; use tooltips or a concise legend instead.
- Target mix markers should be visible but not noisy.

## Section-Specific Notes

### Tickets Center

The first section should feel like a queue, not a report. Prioritize readability, row scanning, and status clarity.

### Current State

This should be the quickest section to scan. Keep KPI cards aligned and avoid alert overload.

### Rate Parity

The queue and comparison panel should feel connected. The selected row should be visibly active, and the comparison panel should update without changing the rest of the page.

### Distribution Performance

Channel buttons should be prominent. The selected channel should change only this section. KPIs should focus on operational quality: RevPAR, ADR, commission, cancellation, conversion, ROI, and effective cost.

### Revenue Performance

This section should feel more strategic and presentation-ready than the operational sections. Use charts and concise insight copy to tell the story of mix, cost, RevPAR, and contribution by date.

### Procedures

Use a SharePoint-like document library layout with rows, document icons, owners, dates, categories, and status.

### Links

Use placeholder tiles. Make them look useful but disabled until real system URLs are provided.

## Version 2 UX Priorities

1. Improve visual hierarchy and spacing.
2. Make the Hilton-blue theme more coherent.
3. Make charts easier to read.
4. Make each section feel independent.
5. Keep the analyst workflow fast and quiet.
