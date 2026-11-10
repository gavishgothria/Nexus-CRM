// ============================================================================
// NEXUS CRM — HIGH-DPI SVG ANALYTICS & TELEMETRY CHART ENGINE (INR ₹ NATIVE)
// ============================================================================

window.NexusCharts = {
  formatCompactCurrency(amount, currencySymbol = "₹", rate = 1) {
    const val = (Number(amount) || 0) * rate;
    if (currencySymbol === "₹") {
      if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
      if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
      if (val >= 1000) return `₹${(val / 1000).toFixed(0)}K`;
      return `₹${val.toFixed(0)}`;
    }
    if (val >= 1000000) return `${currencySymbol}${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `${currencySymbol}${(val / 1000).toFixed(0)}K`;
    return `${currencySymbol}${val.toFixed(0)}`;
  },

  /**
   * Renders Dual-Series Revenue Trajectory & Weighted Forecast SVG Chart
   */
  renderRevenueTrajectoryChart(series, currencySymbol = "₹", rate = 1) {
    if (!series || !series.length) return "";
    const width = 680;
    const height = 250;
    const padLeft = 68;
    const padRight = 24;
    const padTop = 24;
    const padBottom = 38;
    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;

    const maxVal = Math.max(
      ...series.map(s => Math.max(s.closedWon, s.weightedForecast, s.target))
    ) * 1.12;

    const getX = (i) => padLeft + (i / (series.length - 1)) * plotW;
    const getY = (val) => padTop + plotH - (val / maxVal) * plotH;

    // Grid lines
    const gridSteps = 4;
    let gridLines = "";
    for (let i = 0; i <= gridSteps; i++) {
      const val = (maxVal / gridSteps) * i;
      const y = getY(val);
      gridLines += `
        <line x1="${padLeft}" y1="${y}" x2="${width - padRight}" y2="${y}" stroke="var(--border-subtle)" stroke-dasharray="4 4" stroke-width="1" />
        <text x="${padLeft - 10}" y="${y + 4}" text-anchor="end" fill="var(--text-tertiary)" font-size="11" font-family="var(--font-mono)">
          ${this.formatCompactCurrency(val, currencySymbol, rate)}
        </text>
      `;
    }

    // Build paths
    const wonPoints = series.map((d, i) => `${getX(i)},${getY(d.closedWon)}`).join(" ");
    const forecastPoints = series.map((d, i) => `${getX(i)},${getY(d.weightedForecast)}`).join(" ");
    const targetPoints = series.map((d, i) => `${getX(i)},${getY(d.target)}`).join(" ");

    const areaWon = `M ${getX(0)},${padTop + plotH} L ${wonPoints.replace(/ /g, " L ")} L ${getX(series.length - 1)},${padTop + plotH} Z`;
    const areaForecast = `M ${getX(0)},${padTop + plotH} L ${forecastPoints.replace(/ /g, " L ")} L ${getX(series.length - 1)},${padTop + plotH} Z`;

    let dotsAndLabels = "";
    series.forEach((d, i) => {
      const x = getX(i);
      const yWon = getY(d.closedWon);
      const yFor = getY(d.weightedForecast);
      dotsAndLabels += `
        <text x="${x}" y="${height - 10}" text-anchor="middle" fill="var(--text-secondary)" font-size="11" font-weight="500">${d.month}</text>
        <circle cx="${x}" cy="${yFor}" r="4.5" fill="#8b5cf6" stroke="var(--bg-surface)" stroke-width="2">
          <title>${d.month} Weighted Forecast: ${this.formatCompactCurrency(d.weightedForecast, currencySymbol, rate)}</title>
        </circle>
        <circle cx="${x}" cy="${yWon}" r="4.5" fill="#10b981" stroke="var(--bg-surface)" stroke-width="2">
          <title>${d.month} Closed Won: ${this.formatCompactCurrency(d.closedWon, currencySymbol, rate)}</title>
        </circle>
      `;
    });

    return `
      <svg viewBox="0 0 ${width} ${height}" class="crm-svg-chart" role="img" aria-label="Revenue Forecast Trajectory Chart">
        <defs>
          <linearGradient id="gradWon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.28"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
          </linearGradient>
          <linearGradient id="gradForecast" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        ${gridLines}
        <path d="${areaForecast}" fill="url(#gradForecast)" />
        <path d="${areaWon}" fill="url(#gradWon)" />
        <polyline fill="none" stroke="var(--text-tertiary)" stroke-width="1.5" stroke-dasharray="5 5" points="${targetPoints}" />
        <polyline fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${forecastPoints}" />
        <polyline fill="none" stroke="#10b981" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" points="${wonPoints}" />
        ${dotsAndLabels}
      </svg>
    `;
  },

  /**
   * Renders Stage Funnel Conversion Horizontal Bars
   */
  renderStageFunnel(stages, deals, currencySymbol = "₹", rate = 1) {
    const activeStages = stages.filter(s => s.id !== "closed_lost");
    const stageStats = activeStages.map(stage => {
      const stageDeals = deals.filter(d => d.stage === stage.id);
      const total = stageDeals.reduce((acc, d) => acc + (Number(d.amount) || 0), 0);
      return {
        ...stage,
        count: stageDeals.length,
        total
      };
    });

    const maxTotal = Math.max(...stageStats.map(s => s.total), 1);

    return `
      <div class="funnel-list">
        ${stageStats.map(s => {
          const pct = Math.max(Math.round((s.total / maxTotal) * 100), 6);
          return `
            <div class="funnel-row">
              <div class="funnel-meta">
                <span class="funnel-stage-name">
                  <span class="stage-dot" style="background:${s.color}"></span>
                  ${s.name}
                  <span class="funnel-count">${s.count} deals</span>
                </span>
                <span class="funnel-value">${this.formatCompactCurrency(s.total, currencySymbol, rate)} <small>(${s.probability}%)</small></span>
              </div>
              <div class="funnel-track">
                <div class="funnel-fill" style="width:${pct}%; background:${s.color}"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  /**
   * Renders Cohort Rep Quota Attainment Breakdown
   */
  renderRepAttainment(deals, currencySymbol = "₹", rate = 1) {
    const reps = [
      { name: "Gavish Gothria", role: "VP RevOps / AE", quota: 92000000, color: "#6366f1" },
      { name: "Elena Rostova", role: "Enterprise AE", quota: 55000000, color: "#0ea5e9" },
      { name: "Marcus Vance", role: "Mid-Market AE", quota: 38000000, color: "#10b981" }
    ];

    return `
      <div class="rep-attainment-list">
        ${reps.map(rep => {
          const repDeals = deals.filter(d => d.owner === rep.name && d.stage !== "closed_lost");
          const closedWon = repDeals.filter(d => d.stage === "closed_won").reduce((s, d) => s + d.amount, 0);
          const weighted = repDeals.reduce((s, d) => s + (d.amount * (d.probability / 100)), 0);
          const pct = Math.min(Math.round((weighted / rep.quota) * 100), 100);
          const wonPct = Math.min(Math.round((closedWon / rep.quota) * 100), 100);

          return `
            <div class="rep-row">
              <div class="rep-header">
                <div>
                  <strong>${rep.name}</strong>
                  <span class="rep-role-badge">${rep.role}</span>
                </div>
                <div class="rep-numbers">
                  <span class="mono-val">${this.formatCompactCurrency(weighted, currencySymbol, rate)}</span>
                  <span class="text-muted"> / ${this.formatCompactCurrency(rep.quota, currencySymbol, rate)} (${pct}%)</span>
                </div>
              </div>
              <div class="dual-progress-track" title="Solid: Closed Won (${wonPct}%) | Translucent: Weighted Pipeline (${pct}%)">
                <div class="dual-progress-weighted" style="width:${pct}%; background:${rep.color}44"></div>
                <div class="dual-progress-won" style="width:${wonPct}%; background:${rep.color}"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
};
