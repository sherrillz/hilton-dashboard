const channelColors = {
  Expedia: "#193f7a",
  "Booking.com": "#0d66a5",
  "Trip.com": "#2484c6",
  Airbnb: "#d94a64",
  Agoda: "#5d7fd3",
  Direct: "#003b73",
  OTA: "#d45b39",
  GDS: "#16805f",
  Other: "#7b61a8"
};

const data = {
  currentState: [
    { label: "Total bookings", value: "4,286", delta: "Open raw data", href: "bookings.html", trend: "up" },
    { label: "Room nights", value: "7,940", delta: "+5.1% vs LW", trend: "up" },
    { label: "Room revenue", value: "$1.76M", delta: "+6.4% vs LW", trend: "up" },
    { label: "ADR", value: "$222", delta: "+1.7% vs LW", trend: "up" },
    { label: "RevPAR", value: "$156", delta: "-2.2% vs LW", trend: "down" },
    { label: "Direct share", value: "38%", delta: "Target 45%", trend: "down" },
    { label: "OTA share", value: "34%", delta: "Target 30%", trend: "down" },
    { label: "Distribution cost", value: "$214K", delta: "12.2% of room revenue", trend: "down" }
  ],
  tickets: [
    { title: "Expedia channel closed", description: "Hilton Tokyo Bay reports zero pickup while CRS shows sellable inventory.", property: "Hilton Tokyo Bay", channel: "Expedia", issueType: "Channel activation", openDate: "2026-04-22 08:05", queueTime: "25 min", priority: "P1", status: "open" },
    { title: "Booking.com inventory mismatch", description: "Commercial team sees fewer rooms on Booking.com than CRS for tonight.", property: "Conrad Singapore Orchard", channel: "Booking.com", issueType: "Availability", openDate: "2026-04-22 08:18", queueTime: "12 min", priority: "P1", status: "in progress" },
    { title: "Trip.com BAR undercut", description: "Public Trip.com rate is lower than Hilton direct for flexible BAR.", property: "Hilton Shanghai City Center", channel: "Trip.com", issueType: "Rate parity", openDate: "2026-04-22 07:42", queueTime: "48 min", priority: "P2", status: "waiting" },
    { title: "Agoda cancellation spike", description: "Hotel representative asks why cancellation rate increased after flash deal.", property: "DoubleTree Bangkok Riverside", channel: "Agoda", issueType: "Revenue", openDate: "2026-04-21 17:10", queueTime: "15 hr", priority: "P2", status: "open" }
  ],
  distributionChannels: [
    { channel: "Expedia", icon: "EX", revpar: 142, adr: 218, commissionRate: 18, cancelRate: 9.9, conversion: 3.8, clicks: 14600, channelCost: 118000, originalBar: 240, effectiveCost: 19.4, cancellationRank: 3, lowValueRank: 3, adrRank: 3, roiRank: 4, loyaltyCost: "$0", processingCost: "$4.20 / booking", promotion: "Package visibility boost", memberDiscount: "Expedia Rewards 6%" },
    { channel: "Booking.com", icon: "BK", revpar: 151, adr: 226, commissionRate: 17, cancelRate: 11.2, conversion: 4.4, clicks: 18200, channelCost: 126000, originalBar: 248, effectiveCost: 18.7, cancellationRank: 4, lowValueRank: 4, adrRank: 2, roiRank: 2, loyaltyCost: "$0", processingCost: "$3.90 / booking", promotion: "Genius preferred placement", memberDiscount: "Genius 8%" },
    { channel: "Trip.com", icon: "TR", revpar: 136, adr: 207, commissionRate: 15.5, cancelRate: 10.5, conversion: 4.1, clicks: 16400, channelCost: 98000, originalBar: 235, effectiveCost: 17.9, cancellationRank: 2, lowValueRank: 2, adrRank: 4, roiRank: 1, loyaltyCost: "$0", processingCost: "$3.20 / booking", promotion: "APAC flash deal", memberDiscount: "Trip Coins 7%" },
    { channel: "Airbnb", icon: "AB", revpar: 118, adr: 195, commissionRate: 13, cancelRate: 6.4, conversion: 2.7, clicks: 6400, channelCost: 42000, originalBar: 220, effectiveCost: 14.2, cancellationRank: 1, lowValueRank: 1, adrRank: 5, roiRank: 3, loyaltyCost: "$0", processingCost: "$2.60 / booking", promotion: "Extended-stay visibility", memberDiscount: "None" },
    { channel: "Agoda", icon: "AG", revpar: 128, adr: 199, commissionRate: 15, cancelRate: 13.8, conversion: 3.5, clicks: 13800, channelCost: 86000, originalBar: 232, effectiveCost: 18.3, cancellationRank: 5, lowValueRank: 5, adrRank: 4, roiRank: 5, loyaltyCost: "$0", processingCost: "$3.10 / booking", promotion: "Mobile-only member deal", memberDiscount: "Agoda VIP 10%" }
  ],
  marketMovements: {
    Expedia: [
      { place: "Hilton Tokyo Bay", market: "Tokyo", wow: "+8.4%", mom: "+2.1%", direction: "up" },
      { place: "Conrad Singapore Orchard", market: "Singapore", wow: "-3.2%", mom: "+1.4%", direction: "mixed" },
      { place: "Bangkok market", market: "Bangkok", wow: "-6.1%", mom: "-4.8%", direction: "down" }
    ],
    "Booking.com": [
      { place: "Conrad Singapore Orchard", market: "Singapore", wow: "+11.6%", mom: "+7.9%", direction: "up" },
      { place: "Hilton Singapore Orchard", market: "Singapore", wow: "+4.2%", mom: "+3.5%", direction: "up" },
      { place: "Tokyo market", market: "Tokyo", wow: "-5.4%", mom: "-1.8%", direction: "down" }
    ],
    "Trip.com": [
      { place: "Hilton Shanghai City Center", market: "Shanghai", wow: "+14.8%", mom: "+9.2%", direction: "up" },
      { place: "Shanghai market", market: "Shanghai", wow: "+7.3%", mom: "+5.1%", direction: "up" },
      { place: "Conrad Singapore Orchard", market: "Singapore", wow: "-2.8%", mom: "+0.7%", direction: "mixed" }
    ],
    Airbnb: [
      { place: "DoubleTree Bangkok Riverside", market: "Bangkok", wow: "+5.1%", mom: "+12.4%", direction: "up" },
      { place: "Bangkok market", market: "Bangkok", wow: "+3.8%", mom: "+8.9%", direction: "up" },
      { place: "Tokyo market", market: "Tokyo", wow: "-1.6%", mom: "-3.2%", direction: "down" }
    ],
    Agoda: [
      { place: "DoubleTree Bangkok Riverside", market: "Bangkok", wow: "+22.1%", mom: "+14.6%", direction: "up" },
      { place: "Bangkok market", market: "Bangkok", wow: "+10.5%", mom: "+8.1%", direction: "up" },
      { place: "Hilton Tokyo Bay", market: "Tokyo", wow: "-4.3%", mom: "-2.0%", direction: "down" }
    ]
  },
  distributionBookings: [
    { bookingId: "BK-20011", channel: "Expedia", hotel: "Hilton Tokyo Bay", stayDate: "2026-05-09", memberDiscount: "6%", guestRate: 218, commission: 39, hotelNet: 179, effectiveCost: "19.4%" },
    { bookingId: "BK-20012", channel: "Expedia", hotel: "Conrad Singapore Orchard", stayDate: "2026-05-12", memberDiscount: "6%", guestRate: 310, commission: 56, hotelNet: 254, effectiveCost: "18.1%" },
    { bookingId: "BK-20021", channel: "Booking.com", hotel: "Conrad Singapore Orchard", stayDate: "2026-05-11", memberDiscount: "8%", guestRate: 286, commission: 49, hotelNet: 237, effectiveCost: "19.2%" },
    { bookingId: "BK-20022", channel: "Booking.com", hotel: "Hilton Singapore Orchard", stayDate: "2026-05-16", memberDiscount: "8%", guestRate: 254, commission: 43, hotelNet: 211, effectiveCost: "17.6%" },
    { bookingId: "BK-20031", channel: "Trip.com", hotel: "Hilton Shanghai City Center", stayDate: "2026-05-04", memberDiscount: "7%", guestRate: 204, commission: 32, hotelNet: 172, effectiveCost: "18.0%" },
    { bookingId: "BK-20032", channel: "Trip.com", hotel: "Hilton Shanghai City Center", stayDate: "2026-05-06", memberDiscount: "7%", guestRate: 212, commission: 33, hotelNet: 179, effectiveCost: "17.4%" },
    { bookingId: "BK-20041", channel: "Airbnb", hotel: "DoubleTree Bangkok Riverside", stayDate: "2026-05-18", memberDiscount: "0%", guestRate: 195, commission: 25, hotelNet: 170, effectiveCost: "14.2%" },
    { bookingId: "BK-20051", channel: "Agoda", hotel: "DoubleTree Bangkok Riverside", stayDate: "2026-05-18", memberDiscount: "10%", guestRate: 139, commission: 21, hotelNet: 118, effectiveCost: "18.3%" }
  ],
  parityKpis: [
    { label: "Parity exceptions", value: "23", delta: "+7 vs yesterday", trend: "down" },
    { label: "Revenue at risk", value: "$68K", delta: "Next 14 days", trend: "down" },
    { label: "Brand.com undercuts", value: "14", delta: "OTA-led", trend: "down" },
    { label: "Negotiated undercuts", value: "4", delta: "GDS review", trend: "down" }
  ],
  parityExceptions: [
    { id: "PX-101", priority: "P1", hotel: "Hilton Shanghai City Center", stayDate: "2026-05-04", channel: "Trip.com", roomType: "King Deluxe", ratePlan: "Flexible BAR", brandRate: 228, channelRate: 204, negotiatedRate: 222, gap: 24, gapPct: "10.5%", rootCause: "OTA promo stacking", status: "critical" },
    { id: "PX-102", priority: "P1", hotel: "Conrad Singapore Orchard", stayDate: "2026-05-11", channel: "Booking.com", roomType: "Twin Premium", ratePlan: "Advance Purchase", brandRate: 310, channelRate: 286, negotiatedRate: 300, gap: 24, gapPct: "7.7%", rootCause: "Tax or fee display difference", status: "critical" },
    { id: "PX-103", priority: "P2", hotel: "DoubleTree Bangkok Riverside", stayDate: "2026-05-18", channel: "Agoda", roomType: "Queen Guest Room", ratePlan: "Member Rate", brandRate: 148, channelRate: 139, negotiatedRate: 146, gap: 9, gapPct: "6.1%", rootCause: "Mobile-only discount", status: "watch" }
  ],
  rateComparisons: {
    "PX-101": [
      { source: "Brand.com", rate: 228, basis: "Flexible BAR", promo: "None", assessment: "Reference" },
      { source: "Trip.com", rate: 204, basis: "Same room/rate", promo: "Stacked 10%", assessment: "Undercuts Brand.com and negotiated" },
      { source: "Negotiated", rate: 222, basis: "Corporate display", promo: "Corporate", assessment: "Also undercut" }
    ],
    "PX-102": [
      { source: "Brand.com", rate: 310, basis: "Advance Purchase", promo: "None", assessment: "Reference" },
      { source: "Booking.com", rate: 286, basis: "Tax-included display", promo: "Genius", assessment: "Normalize tax before escalation" },
      { source: "Negotiated", rate: 300, basis: "Corporate display", promo: "Corporate", assessment: "Review needed" }
    ],
    "PX-103": [
      { source: "Brand.com", rate: 148, basis: "Member Rate", promo: "Member", assessment: "Reference" },
      { source: "Agoda", rate: 139, basis: "Same room/rate", promo: "Mobile-only", assessment: "True undercut" },
      { source: "Negotiated", rate: 146, basis: "Local corporate", promo: "Corporate", assessment: "Undercut" }
    ]
  },
  mixCurrent: [
    { channel: "Direct", share: 38, target: 45 },
    { channel: "OTA", share: 34, target: 30 },
    { channel: "GDS", share: 18, target: 15 },
    { channel: "Other", share: 10, target: 10 }
  ],
  revenueChannels: [
    { channel: "Direct", roomNights: 3017, netAdr: 213, netRevpar: 151, cost: 5, revpar: 159, status: "healthy" },
    { channel: "OTA", roomNights: 2699, netAdr: 172, netRevpar: 121, cost: 18, revpar: 148, status: "critical" },
    { channel: "GDS", roomNights: 1429, netAdr: 225, netRevpar: 139, cost: 10, revpar: 154, status: "healthy" },
    { channel: "Other", roomNights: 794, netAdr: 176, netRevpar: 96, cost: 14, revpar: 112, status: "watch" }
  ],
  dayContribution: [
    { date: "Apr 20", Direct: 820, OTA: 1180, GDS: 420, Other: 160, wow: "+1.2%", mom: "+3.4%" },
    { date: "Apr 21", Direct: 940, OTA: 1320, GDS: 500, Other: 180, wow: "+0.8%", mom: "+2.9%" },
    { date: "Apr 22", Direct: 1120, OTA: 1510, GDS: 560, Other: 210, wow: "+2.1%", mom: "+4.1%" },
    { date: "Apr 23", Direct: 1320, OTA: 1810, GDS: 620, Other: 250, wow: "+2.4%", mom: "+4.8%" },
    { date: "Apr 24", Direct: 1230, OTA: 1680, GDS: 510, Other: 220, wow: "-1.7%", mom: "+1.6%" },
    { date: "Apr 25", Direct: 1080, OTA: 1510, GDS: 460, Other: 200, wow: "-2.2%", mom: "+0.9%" },
    { date: "Apr 26", Direct: 1010, OTA: 1420, GDS: 410, Other: 170, wow: "+3.1%", mom: "+5.3%" }
  ],
  promotionIncrementality: [
    { promo: "Trip.com APAC flash deal", channel: "OTA", discount: "$42K", incremental: 170, cannibalized: 96, readout: "Mixed: growth but margin pressure", status: "watch" },
    { promo: "Agoda mobile member", channel: "OTA", discount: "$28K", incremental: 64, cannibalized: 82, readout: "Mostly discounting existing demand", status: "critical" },
    { promo: "Brand.com direct saver", channel: "Direct", discount: "$18K", incremental: 142, cannibalized: 31, readout: "Positive direct shift", status: "healthy" }
  ],
  systems: [
    { name: "Central Reservation System", status: "healthy", latency: "4 min", refresh: "08:29", message: "Inventory and rate feed normal" },
    { name: "OTA partner feeds", status: "watch", latency: "18 min", refresh: "08:15", message: "Agoda feed retry volume elevated" },
    { name: "Reporting warehouse", status: "critical", latency: "46 min", refresh: "07:41", message: "Pickup table delayed" }
  ],
  procedures: [
    { title: "Rate parity investigation", category: "Rate parity", owner: "Distribution Ops", updated: "2026-04-18", status: "Published", summary: "Check BAR, tax, fee, display, and package differences." },
    { title: "Inventory mismatch checklist", category: "Availability", owner: "Connectivity", updated: "2026-04-16", status: "Published", summary: "Compare CRS, PMS, cache, and partner extranet sellability." },
    { title: "OTA escalation template", category: "Partner", owner: "Analyst Team", updated: "2026-04-10", status: "Published", summary: "Required evidence and partner support fields." }
  ],
  quickLinks: [
    { name: "PMS", description: "Property management system", type: "Hotel operations" },
    { name: "CRS", description: "Central reservation system", type: "Distribution" },
    { name: "RMS", description: "Revenue management system", type: "Revenue" },
    { name: "OTA Extranets", description: "Trip.com, Booking.com, Agoda, Expedia", type: "Partners" },
    { name: "SharePoint", description: "SOPs and team documentation", type: "Knowledge" },
    { name: "Ticketing System", description: "Create and track support requests", type: "Operations" }
  ]
};

const state = {
  ticketStatus: "all",
  parityStatus: "all",
  selectedChannel: "Booking.com",
  selectedParityId: "PX-101",
  procedureSearch: "",
  contributionMetric: "roomNights",
  contributionView: "absolute",
  contributionChannels: ["Direct", "OTA", "GDS", "Other"]
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function statusClass(status) {
  if (status === "open") return "critical";
  if (status === "in progress") return "healthy";
  if (status === "waiting") return "watch";
  return status;
}

function selectedChannel() {
  return data.distributionChannels.find((item) => item.channel === state.selectedChannel);
}

function renderTickets() {
  const rows = data.tickets.filter((item) => state.ticketStatus === "all" || item.status === state.ticketStatus);
  document.querySelector("#ticketRows").innerHTML = rows.map((ticket) => `
    <tr>
      <td><strong>${ticket.title}</strong><span class="table-subtext">${ticket.property}</span></td>
      <td class="description-cell">${ticket.description}</td>
      <td>${ticket.channel}</td>
      <td>${ticket.issueType}</td>
      <td>${ticket.openDate}</td>
      <td>${ticket.queueTime}</td>
      <td><span class="priority ${ticket.priority.toLowerCase()}">${ticket.priority}</span></td>
      <td><span class="status-pill ${statusClass(ticket.status)}">${ticket.status}</span></td>
    </tr>
  `).join("");
}

function renderCurrentState() {
  document.querySelector("#kpiGrid").innerHTML = data.currentState.map((kpi) => {
    const content = `<span>${kpi.label}</span><strong>${kpi.value}</strong><small class="delta ${kpi.trend}">${kpi.delta}</small>`;
    return kpi.href ? `<a class="kpi-card kpi-link" href="${kpi.href}">${content}</a>` : `<article class="kpi-card">${content}</article>`;
  }).join("");
}

function renderChannelSelector() {
  document.querySelector("#channelSelector").innerHTML = data.distributionChannels.map((channel) => `
    <button class="channel-button ${channel.channel === state.selectedChannel ? "active" : ""}" data-channel="${channel.channel}">
      <span>${channel.icon}</span>
      <strong>${channel.channel}</strong>
    </button>
  `).join("");
  document.querySelectorAll("[data-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedChannel = button.dataset.channel;
      renderDistributionPerformance();
    });
  });
}

function renderDistributionPerformance() {
  renderChannelSelector();
  const channel = selectedChannel();
  const roi = (channel.conversion / 100) * channel.clicks * channel.adr / channel.channelCost;
  const kpis = [
    { label: "RevPAR", value: money.format(channel.revpar), note: `Rank #${channel.adrRank} ADR peer set`, status: "healthy" },
    { label: "ADR", value: money.format(channel.adr), note: `${money.format(channel.originalBar)} original BAR`, status: "healthy" },
    { label: "Commission rate", value: `${channel.commissionRate}%`, note: "Contracted OTA commission", status: "watch" },
    { label: "Cancellation rate", value: `${channel.cancelRate}%`, note: `Rank #${channel.cancellationRank} among OTAs`, status: channel.cancelRate > 12 ? "critical" : channel.cancelRate > 10 ? "watch" : "healthy" },
    { label: "Conversion rate", value: `${channel.conversion}%`, note: `${channel.clicks.toLocaleString()} customer clicks`, status: "healthy" },
    { label: "ROI", value: roi.toFixed(2), note: "Conversion * clicks * ADR / cost", status: roi > 1.3 ? "healthy" : "watch" },
    { label: "Effective cost vs BAR", value: `${channel.effectiveCost}%`, note: "After commission and discount", status: channel.effectiveCost > 18 ? "critical" : "watch" }
  ];
  document.querySelector("#distributionSnapshot").innerHTML = kpis.map((item) => `
    <article class="kpi-card ${item.status}">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <small>${item.note}</small>
    </article>
  `).join("");

  document.querySelector("#feeList").innerHTML = [
    ["Loyalty program cost", channel.loyaltyCost],
    ["Processing cost", channel.processingCost],
    ["Promotion", channel.promotion],
    ["OTA member discount", channel.memberDiscount]
  ].map(([label, value]) => `<div class="fee-row"><span>${label}</span><strong>${value}</strong></div>`).join("");

  document.querySelector("#marketMovementList").innerHTML = data.marketMovements[channel.channel].map((item) => `
    <article class="movement-item ${item.direction}">
      <div>
        <strong>${item.place}</strong>
        <span>${item.market}</span>
      </div>
      <b>WoW ${item.wow}</b>
      <b>MoM ${item.mom}</b>
    </article>
  `).join("");

  const rows = data.distributionBookings.filter((item) => item.channel === state.selectedChannel);
  document.querySelector("#distributionBookingRows").innerHTML = rows.map((item) => `
    <tr>
      <td>${item.bookingId}</td>
      <td>${item.hotel}</td>
      <td>${item.stayDate}</td>
      <td>${item.memberDiscount}</td>
      <td>${money.format(item.guestRate)}</td>
      <td>${money.format(item.commission)}</td>
      <td>${money.format(item.hotelNet)}</td>
      <td>${item.effectiveCost}</td>
    </tr>
  `).join("");
}

function renderRateParity() {
  document.querySelector("#parityInsight").textContent = "Select a parity exception to compare Brand.com, distribution rate, and negotiated rate. The selected row updates the panel on the right.";
  document.querySelector("#parityKpiGrid").innerHTML = data.parityKpis.map((kpi) => `<article class="kpi-card"><span>${kpi.label}</span><strong>${kpi.value}</strong><small class="delta ${kpi.trend}">${kpi.delta}</small></article>`).join("");
  const filtered = data.parityExceptions.filter((item) => state.parityStatus === "all" || item.status === state.parityStatus);
  if (!filtered.some((item) => item.id === state.selectedParityId)) state.selectedParityId = filtered[0]?.id || data.parityExceptions[0].id;
  document.querySelector("#parityExceptionRows").innerHTML = filtered.map((item) => `
    <tr class="selectable-row ${item.id === state.selectedParityId ? "selected" : ""}" data-parity-id="${item.id}">
      <td><span class="priority ${item.priority.toLowerCase()}">${item.priority}</span></td>
      <td>${item.hotel}<span class="table-subtext">${item.roomType}</span></td>
      <td>${item.stayDate}</td>
      <td>${item.channel}</td>
      <td>${money.format(item.brandRate)}</td>
      <td>${money.format(item.channelRate)}</td>
      <td>${money.format(item.negotiatedRate)}</td>
      <td>${money.format(item.gap)} / ${item.gapPct}</td>
      <td>${item.rootCause}</td>
      <td><span class="status-pill ${item.status}">${item.status}</span></td>
    </tr>
  `).join("");
  document.querySelectorAll("[data-parity-id]").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedParityId = row.dataset.parityId;
      renderRateParity();
    });
  });
  const selected = data.parityExceptions.find((item) => item.id === state.selectedParityId);
  document.querySelector("#selectedParityContext").textContent = `${selected.hotel} - ${selected.stayDate} - ${selected.ratePlan}`;
  document.querySelector("#rateComparisonRows").innerHTML = data.rateComparisons[selected.id].map((row) => `
    <tr>
      <td>${row.source}</td>
      <td>${money.format(row.rate)}</td>
      <td>${row.basis}</td>
      <td>${row.promo}</td>
      <td>${row.assessment}</td>
    </tr>
  `).join("");
}

function renderRevenuePerformance() {
  document.querySelector("#mixTargetChart").innerHTML = data.mixCurrent.map((item) => `
    <div class="target-mix-row">
      <span>${item.channel}</span>
      <div class="target-track">
        <div class="target-fill" style="width:${item.share}%; background:${channelColors[item.channel]}"></div>
        <i style="left:${item.target}%"></i>
      </div>
      <strong>${item.share}% <small>target ${item.target}%</small></strong>
    </div>
  `).join("");

  document.querySelector("#netMetricBars").innerHTML = data.revenueChannels.map((item) => `
    <div class="metric-row">
      <strong>${item.channel}</strong>
      <span>Net ADR</span>
      <div class="bar-track"><div class="bar-fill" style="width:${(item.netAdr / 240) * 100}%"></div></div>
      <b>${money.format(item.netAdr)}</b>
      <span>Net RevPAR</span>
      <div class="bar-track green-fill"><div class="bar-fill" style="width:${(item.netRevpar / 170) * 100}%"></div></div>
      <b>${money.format(item.netRevpar)}</b>
    </div>
  `).join("");

  document.querySelector("#costRevparPlot").innerHTML = `
    <span class="axis-label x-axis">Cost of acquisition -></span>
    <span class="axis-label y-axis">RevPAR -></span>
    ${data.revenueChannels.map((item) => {
      const left = Math.max(12, Math.min(86, item.cost * 4));
      const bottom = Math.max(12, Math.min(82, (item.revpar - 80) * 0.9));
      const size = Math.max(42, Math.min(78, item.roomNights / 48));
      return `<button class="profit-bubble ${item.status}" style="left:${left}%; bottom:${bottom}%; width:${size}px; height:${size}px" title="${item.channel}: Cost ${item.cost}%, RevPAR ${money.format(item.revpar)}">${item.channel}</button>`;
    }).join("")}
  `;

  renderAreaChart();

  document.querySelector("#incrementalityRows").innerHTML = data.promotionIncrementality.map((item) => `
    <tr>
      <td>${item.promo}</td>
      <td>${item.channel}</td>
      <td>${item.discount}</td>
      <td>${item.incremental}</td>
      <td>${item.cannibalized}</td>
      <td><span class="status-pill ${item.status}">${item.readout}</span></td>
    </tr>
  `).join("");
}

function renderAreaChart() {
  const channels = ["Direct", "OTA", "GDS", "Other"];
  const selectedChannels = channels.filter((channel) => state.contributionChannels.includes(channel));
  const selector = document.querySelector("#contributionChannelSelector");
  const w = 760;
  const h = 330;
  const left = 58;
  const right = 164;
  const top = 34;
  const bottom = 58;
  const plotW = w - left - right;
  const plotH = h - top - bottom;
  const baseY = top + plotH;
  const x = (index) => left + (index * plotW) / (data.dayContribution.length - 1);
  const channelAdr = Object.fromEntries(data.revenueChannels.map((item) => [item.channel, item.netAdr]));
  const valueFor = (day, channel) => {
    const roomNights = day[channel] || 0;
    return state.contributionMetric === "revenue" ? roomNights * (channelAdr[channel] || 180) : roomNights;
  };
  const dayTotal = (day) => selectedChannels.reduce((sum, channel) => sum + valueFor(day, channel), 0);
  const yMax = state.contributionView === "share"
    ? 100
    : Math.ceil(Math.max(...data.dayContribution.map(dayTotal)) / 500) * 500;
  const valueLabel = state.contributionMetric === "revenue" ? "Revenue" : "Room nights";
  const yLabel = state.contributionView === "share" ? "Contribution share" : valueLabel;
  const y = (value) => baseY - (value / yMax) * plotH;
  const layers = {};

  selector.innerHTML = channels.map((channel) => `
    <button class="channel-toggle ${state.contributionChannels.includes(channel) ? "active" : ""}" data-contribution-channel="${channel}" type="button">
      <i style="background:${channelColors[channel]}"></i>${channel}
    </button>
  `).join("");

  data.dayContribution.forEach((day, index) => {
    let cumulative = 0;
    const total = Math.max(1, dayTotal(day));
    selectedChannels.forEach((channel) => {
      const rawValue = valueFor(day, channel);
      const value = state.contributionView === "share" ? (rawValue / total) * 100 : rawValue;
      const yBottom = y(cumulative);
      cumulative += value;
      const yTop = y(cumulative);
      if (!layers[channel]) layers[channel] = [];
      layers[channel].push({ x: x(index), yTop, yBottom, value });
    });
  });

  const areas = selectedChannels.map((channel) => {
    const points = layers[channel] || [];
    const topLine = points.map((point) => `${point.x},${point.yTop}`).join(" ");
    const bottomLine = [...points].reverse().map((point) => `${point.x},${point.yBottom}`).join(" ");
    return `<polygon points="${topLine} ${bottomLine}" fill="${channelColors[channel]}" opacity="0.74" stroke="#ffffff" stroke-width="1.2">
      <title>${channel}</title>
    </polygon>`;
  }).join("");

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const value = yMax * ratio;
    const tickY = y(value);
    const label = state.contributionView === "share" ? `${Math.round(value)}%` : state.contributionMetric === "revenue" ? money.format(value) : Math.round(value).toLocaleString();
    return `
      <line x1="${left}" y1="${tickY}" x2="${w - right}" y2="${tickY}" class="chart-gridline" />
      <text x="${left - 10}" y="${tickY + 4}" text-anchor="end">${label}</text>
    `;
  }).join("");

  const xLabels = data.dayContribution.map((day, index) => `
    <text x="${x(index)}" y="${baseY + 28}" text-anchor="middle" transform="rotate(-35 ${x(index)} ${baseY + 28})">${day.date}</text>
  `).join("");

  const legend = selectedChannels.map((channel, index) => `
    <g transform="translate(${w - right + 38}, ${top + index * 30})">
      <rect width="18" height="12" rx="2" fill="${channelColors[channel]}" opacity="0.92"></rect>
      <text x="28" y="11">${channel}</text>
    </g>
  `).join("");

  document.querySelector("#dayContribution").innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${yLabel} stacked area chart by date">
      ${yTicks}
      <line x1="${left}" y1="${baseY}" x2="${w - right}" y2="${baseY}" class="chart-axis" />
      <line x1="${left}" y1="${top}" x2="${left}" y2="${baseY}" class="chart-axis" />
      ${areas}
      ${xLabels}
      <text x="${left}" y="20">${yLabel}</text>
      <text x="${w - right + 38}" y="20">Channel</text>
      ${legend}
    </svg>
  `;
}

function renderSystems() {
  document.querySelector("#systemGrid").innerHTML = data.systems.map((system) => `
    <article class="system-card">
      <div class="section-heading compact">
        <h4>${system.name}</h4>
        <span class="status-pill ${system.status}">${system.status}</span>
      </div>
      <div class="system-meta">
        <span><span class="metric-label">Latency</span><strong class="metric-value">${system.latency}</strong></span>
        <span><span class="metric-label">Last refresh</span><strong class="metric-value">${system.refresh}</strong></span>
      </div>
      <p>${system.message}</p>
      <button class="secondary-button" type="button">Open ticket</button>
    </article>
  `).join("");
}

function renderProcedures() {
  const rows = data.procedures.filter((item) => !state.procedureSearch || Object.values(item).join(" ").toLowerCase().includes(state.procedureSearch));
  document.querySelector("#procedureGrid").innerHTML = rows.map((item) => `
    <article class="doc-row">
      <span class="doc-icon">DOC</span>
      <div><h4>${item.title}</h4><p>${item.summary}</p></div>
      <span>${item.category}</span>
      <span>${item.owner}</span>
      <span>${item.updated}</span>
      <span class="status-pill ${item.status === "Published" ? "healthy" : "watch"}">${item.status}</span>
    </article>
  `).join("");
}

function runSql() {
  document.querySelector("#sqlRows").innerHTML = data.distributionBookings.map((row) => `
    <tr>
      <td>${row.bookingId}</td>
      <td>${row.hotel}</td>
      <td>APAC</td>
      <td>${row.channel}</td>
      <td>1</td>
      <td>${money.format(row.guestRate)}</td>
      <td>confirmed</td>
    </tr>
  `).join("");
}

function renderLinks() {
  document.querySelector("#quickLinks").innerHTML = data.quickLinks.map((link) => `
    <button class="quick-link" type="button" aria-disabled="true">
      <span>${link.name}</span>
      <strong>${link.type}</strong>
      <small>${link.description}</small>
    </button>
  `).join("");
}

function setCurrentDate() {
  const now = new Date();
  document.querySelector("#currentDateLabel").textContent = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function bindLocalControls() {
  document.querySelectorAll("[data-ticket-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-ticket-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.ticketStatus = button.dataset.ticketFilter;
      renderTickets();
    });
  });
  document.querySelectorAll("[data-parity-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-parity-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.parityStatus = button.dataset.parityFilter;
      renderRateParity();
    });
  });
  document.querySelector("#procedureSearch").addEventListener("input", (event) => {
    state.procedureSearch = event.target.value.trim().toLowerCase();
    renderProcedures();
  });
  document.querySelector("#contributionMetric").addEventListener("change", (event) => {
    state.contributionMetric = event.target.value;
    renderAreaChart();
  });
  document.querySelector("#contributionView").addEventListener("change", (event) => {
    state.contributionView = event.target.value;
    renderAreaChart();
  });
  document.querySelector("#contributionChannelSelector").addEventListener("click", (event) => {
    const button = event.target.closest("[data-contribution-channel]");
    if (!button) return;
    const channel = button.dataset.contributionChannel;
    const nextChannels = state.contributionChannels.includes(channel)
      ? state.contributionChannels.filter((item) => item !== channel)
      : [...state.contributionChannels, channel];
    state.contributionChannels = nextChannels.length ? nextChannels : [channel];
    renderAreaChart();
  });
  document.querySelector("#runSql").addEventListener("click", runSql);
}

function bindScrollSpy() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

function renderAll() {
  setCurrentDate();
  renderTickets();
  renderCurrentState();
  renderDistributionPerformance();
  renderRateParity();
  renderRevenuePerformance();
  renderSystems();
  renderProcedures();
  runSql();
  renderLinks();
}

bindLocalControls();
bindScrollSpy();
renderAll();
