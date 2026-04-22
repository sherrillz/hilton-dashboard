# Product Requirements Document

## Product

Hilton Senior Distribution Analyst Daily Workspace

## Purpose

Create a single HTML workspace for the daily workflow of a Senior Distribution Analyst. Each section should operate as an isolated work surface instead of being controlled by one global filter. The page should show the current date/time and APAC market context, then guide the analyst through tickets, current state, distribution performance, rate parity, revenue performance, IT systems, procedures, SQL query, and links.

## UX Direction

- Remove the global filter bar.
- Show date/time and market context as informational chips only.
- Market is APAC for the mock version.
- Add clear separators between sections to communicate that each section is isolated.
- Left navigation should highlight the active section while the user scrolls.
- Add icons to the title of each major section.
- Improve visual polish while keeping a dense, operational analyst feel.

## Navigation Order

1. Tickets Center
2. Current State
3. Rate Parity
4. Distribution Performance
5. Revenue Performance
6. IT System
7. Procedures
8. SQL Query
9. Links

## Sections

### 1. Tickets Center

Purpose: first daily work queue for requests from hotel, brand, commercial, revenue, and system stakeholders.

Required fields:

- Title.
- Brief description.
- Channel.
- Issue type.
- Open date.
- In queue time.
- Priority.
- Status.

The ticket status filter is local to this section only.

### 2. Current State

Purpose: show general daily operating context.

Required KPIs:

- Total bookings, clickable to the raw booking detail page.
- Room nights.
- Room revenue.
- ADR.
- RevPAR.
- Direct share.
- OTA share.
- Distribution cost of room revenue.

Critical Exceptions should not appear in this snapshot.

### 3. Rate Parity

Purpose: identify whether distribution rates undercut brand.com or negotiated rates.

Required components:

- Parity Risk Summary.
- Parity Exception Queue.
- Rate Comparison Panel.

Remove the Currency Panel from this section.

Behavior:

- Selecting a row in the Parity Exception Queue updates the Rate Comparison Panel.
- The Rate Comparison Panel compares brand.com, selected distribution rate, negotiated rate, gap, and assessment.

### 4. Distribution Performance

Purpose: let the analyst inspect one distribution channel at a time and understand whether that channel creates profitable, reliable demand.

Channel selector:

- Use icon-like channel buttons for Expedia, Booking.com, Trip.com, Airbnb, and Agoda.
- Selecting a channel updates only this section.

Channel snapshot KPIs:

- RevPAR.
- ADR.
- Commission rate.
- Cancellation rate.
- Channel conversion rate.
- ROI.
- Effective cost vs original BAR.

Commission rates:

- Booking.com: 17%.
- Expedia: 18%.
- Trip.com: 15.5%.
- Agoda: 15%.
- Airbnb: 13%.

ROI formula:

- ROI = conversion rate * customer clicks * ADR / channel cost.

Replace commission policy with a channel cost and offer list:

- Loyalty program cost.
- Processing cost.
- Promotion.
- OTA member discount.

Market and hotel movement:

- Remove the booking quality trend chart.
- Add a list that shows which hotels or markets are up/down compared with week and month.
- Include WoW and MoM movement labels for each hotel or market row.

Bookings under selected distribution:

- This table is separate from the general booking table.
- Required fields:
  - Booking ID.
  - Hotel.
  - Stay date.
  - OTA member discount.
  - Guest-facing OTA rate.
  - OTA commission.
  - Hotel net before other costs.
  - Effective cost vs original BAR.

### 5. Revenue Performance

Purpose: strategic analysis of how channel mix affects profitable revenue and growth.

Target distribution remix:

- Direct: 45%.
- OTA: 30%.
- GDS: 15%.
- Other: 10%.

Required changes:

- Combine Current Mix and Target Mix into one chart.
- Show target mix as a marker/icon on each current mix bar.
- Remove the Channel Mix % pie chart.
- Improve Net ADR and Net RevPAR so each channel's bars line up clearly.
- Improve Cost of Acquisition vs RevPAR by showing axis arrows and metric labels:
  - X-axis: Cost of acquisition.
  - Y-axis: RevPAR.
  - Bubble size: room nights.
- Change Channel Contribution by Day into a stacked area chart.
  - X-axis should show exact dates of the week.
  - Use clearer, more distinct chart colors.
  - Do not show WoW/MoM data below the chart.
- Remove Recommended Mix Actions.

Questions this section must answer:

- Are we relying too much on high-cost channels?
- Which channels drive profitable demand, not just volume?
- Is revenue growth translating into net revenue growth?
- Are we using the right channels on high-demand vs low-demand dates?
- Which mix changes would improve net revenue or margin?
- Are promotions incremental or just discounting existing demand?

### 6. IT System

Purpose: monitor distribution systems and create tickets when needed.

Required fields:

- Latency.
- Last data refresh time.
- System message.
- Button to open a ticket.

### 7. Procedures

Purpose: SharePoint-like SOP library.

Required design:

- Search.
- Document-library rows.
- Category.
- Owner.
- Last updated.
- Status.

### 8. SQL Query

Purpose: query mock raw booking data.

Required label:

- Use "SQL Query" as the section label.

### 9. Links

Purpose: placeholder launchpad for PMS, CRS, RMS, channel manager, OTA extranets, GDS tools, reporting, SharePoint, and ticketing system.

Do not link to real systems yet.

## Data Model

The first version can use local JavaScript arrays.

Key data objects:

- `tickets`
- `currentState`
- `distributionChannels`
- `distributionBookings`
- `parityExceptions`
- `rateComparisons`
- `revenueChannels`
- `dayContribution`
- `systems`
- `procedures`
- `quickLinks`

## Acceptance Criteria

- No global filter bar exists.
- Date/time and APAC market are shown as informational context.
- Left navigation highlights the active section on scroll.
- Section headers include icons.
- Sections are visually separated and feel isolated.
- Rate Parity appears before Distribution Performance.
- Distribution Performance has channel icon buttons for Expedia, Booking.com, Trip.com, Airbnb, and Agoda.
- Distribution Performance KPIs update when a channel is selected.
- Distribution Performance includes cancellation rate as a KPI.
- Commission rates match the requested values.
- Distribution Performance includes channel-specific loyalty cost, processing cost, promotion, and OTA member discount.
- Booking quality trend chart is removed.
- Distribution Performance includes a hotel/market WoW and MoM up/down list.
- Selected-channel bookings table includes OTA member discount, guest-facing OTA rate, OTA commission, hotel net before other costs, and effective cost vs original BAR.
- Rate Parity no longer includes a Currency Panel.
- Selecting a parity queue row updates the Rate Comparison Panel.
- Revenue Performance combines current and target mix into one chart with target markers.
- Revenue Performance has no pie chart and no Recommended Mix Actions.
- Cost of Acquisition vs RevPAR chart has clear X/Y axis arrows and labels.
- Channel Contribution by Day is a stacked area chart with exact week dates and no WoW/MoM list below it.
