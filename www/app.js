(function () {
  "use strict";

  var DATA = window.APP_DATA;
  var view = document.getElementById("view");
  var langBtn = document.getElementById("lang-toggle");

  var STRINGS = {
    fil: {
      "nav.home": "Home",
      "nav.hotlines": "Hotline",
      "nav.services": "Serbisyo",
      "nav.barangays": "Barangay",
      "nav.places": "Pasyalan",
      welcomeA: "Magandang Araw,",
      welcomeB: "Disiplinadong Montalbeño!",
      search: "Maghanap ng serbisyo, hotline, barangay…",
      sos: "Emergency: tumawag sa Montalban Hotline 911",
      sosCall: "Tumawag",
      govTitle: "Pamahalaang Bayan ng Montalban",
      govSite: "Opisyal na website",
      govEmail: "Public Information Office",
      quick: "Mabilisang Access",
      news: "Mga Anunsyo",
      call: "Tawagan",
      pending: "Idadagdag pa",
      emergency: "Pambansang Emergency",
      local: "Lokal na Opisina",
      requirements: "Mga Kailangan",
      office: "Saan pupunta",
      reqNote: "Paalala: Maaaring magbago ang requirements. Kumpirmahin muna sa opisina bago pumunta.",
      hotlineNote: "Ang mga lokal na numero ay idadagdag kapag nakumpirma na sa Munisipyo.",
      barangayIntro: "Ang Montalban (Rodriguez) ay may 11 barangay.",
      map: "Mapa",
      directions: "Direksyon",
      noResults: "Walang nahanap.",
      results: "Mga resulta para sa",
      "nav.report": "I-report",
      open: "Buksan",
      "nav.offices": "Opisina",
      officesIntro: "Oras at lokasyon ng mga opisina ng Munisipyo.",
      hoursNote: "Bukas ang mga opisina ng Munisipyo Lunes hanggang Biyernes, 8:00 AM–5:00 PM. Sarado tuwing Sabado, Linggo at holiday.",
      openNow: "Bukas ngayon",
      closedNow: "Sarado",
      closesAt: "Magsasara ng",
      opensAt: "Magbubukas",
      hours: "Oras",
      where: "Lokasyon",
      roomPending: "Eksaktong kuwarto: idadagdag pa",
      locationPending: "Lokasyon: idadagdag pa",
      viewOffice: "Tingnan ang opisina",
      days: ["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"],
      reportTitle: "Mag-report ng Problema",
      reportCta: "May problema sa inyong lugar? I-report dito",
      reportIntro: "Para sa mga hindi emergency na problema. Kung may panganib sa buhay, tumawag agad sa 911.",
      category: "Uri ng problema",
      barangay: "Barangay",
      choose: "— Pumili —",
      location: "Eksaktong lugar / palatandaan",
      locationPh: "Hal. tapat ng chapel sa Purok 3",
      useGps: "📍 Gamitin ang aking lokasyon",
      gpsOk: "Naidagdag ang lokasyon",
      gpsFail: "Hindi makuha ang lokasyon",
      details: "Ilarawan ang problema",
      detailsPh: "Ano ang nangyari, gaano na katagal, gaano kalala…",
      photo: "Litrato (opsyonal)",
      name: "Pangalan (opsyonal)",
      contact: "Numero o email para ma-update ka (opsyonal)",
      required: "Kailangan",
      submit: "Gumawa ng Report",
      sendVia: "Ipadala ang report",
      sendNote: "Ipadala sa opisyal na contact ng Munisipyo o barangay gamit ang alinman sa ibaba.",
      noChannel: "Wala pang nakumpirmang opisyal na contact ng Munisipyo para sa reports. I-share o kopyahin ang report at ipadala sa inyong barangay o sa Facebook page ng Munisipyo.",
      share: "📤 I-share",
      sms: "💬 SMS",
      email: "✉️ Email",
      copy: "📋 Kopyahin",
      copied: "Nakopya!",
      newReport: "Bagong report",
      myReports: "Aking mga Report",
      refNo: "Ref. No.",
      deleteReport: "Burahin",
      fillRequired: "Pakikumpleto ang mga kailangang field."
    },
    en: {
      "nav.home": "Home",
      "nav.hotlines": "Hotlines",
      "nav.services": "Services",
      "nav.barangays": "Barangays",
      "nav.places": "Places",
      welcomeA: "Magandang Araw,",
      welcomeB: "Disiplinadong Montalbeño!",
      search: "Search services, hotlines, barangays…",
      sos: "Emergency: call Montalban Hotline 911",
      sosCall: "Call",
      govTitle: "Municipal Government of Montalban",
      govSite: "Official website",
      govEmail: "Public Information Office",
      quick: "Quick Access",
      news: "Announcements",
      call: "Call",
      pending: "To be added",
      emergency: "National Emergency",
      local: "Local Offices",
      requirements: "Requirements",
      office: "Where to go",
      reqNote: "Note: Requirements may change. Please confirm with the office before going.",
      hotlineNote: "Local numbers will be added once confirmed with the Municipal Hall.",
      barangayIntro: "Montalban (Rodriguez) has 11 barangays.",
      map: "Map",
      directions: "Directions",
      noResults: "No results found.",
      results: "Results for",
      "nav.report": "Report",
      open: "Open",
      "nav.offices": "Offices",
      officesIntro: "Hours and locations of Municipal offices.",
      hoursNote: "Municipal offices are open Monday to Friday, 8:00 AM–5:00 PM. Closed on weekends and holidays.",
      openNow: "Open now",
      closedNow: "Closed",
      closesAt: "Closes at",
      opensAt: "Opens",
      hours: "Hours",
      where: "Location",
      roomPending: "Exact room: to be added",
      locationPending: "Location: to be added",
      viewOffice: "View office",
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      reportTitle: "Report a Problem",
      reportCta: "Problem in your area? Report it here",
      reportIntro: "For non-emergency problems. If a life is in danger, call 911 right away.",
      category: "Type of problem",
      barangay: "Barangay",
      choose: "— Choose —",
      location: "Exact location / landmark",
      locationPh: "E.g. across the chapel in Purok 3",
      useGps: "📍 Use my location",
      gpsOk: "Location added",
      gpsFail: "Couldn't get location",
      details: "Describe the problem",
      detailsPh: "What happened, how long, how serious…",
      photo: "Photo (optional)",
      name: "Name (optional)",
      contact: "Number or email for updates (optional)",
      required: "Required",
      submit: "Create Report",
      sendVia: "Send the report",
      sendNote: "Send it to the official Municipal or barangay contact using any option below.",
      noChannel: "No official Municipal contact for reports has been confirmed yet. Share or copy the report and send it to your barangay or the Municipality's Facebook page.",
      share: "📤 Share",
      sms: "💬 SMS",
      email: "✉️ Email",
      copy: "📋 Copy",
      copied: "Copied!",
      newReport: "New report",
      myReports: "My Reports",
      refNo: "Ref. No.",
      deleteReport: "Delete",
      fillRequired: "Please complete the required fields."
    }
  };

  var lang = "fil";
  try { lang = localStorage.getItem("lang") || "fil"; } catch (e) { /* storage blocked */ }

  function t(key) { return STRINGS[lang][key] || key; }
  function L(obj) { return typeof obj === "string" ? obj : (obj[lang] || obj.fil); }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function mapsUrl(q) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }

  // ---------- Renderers ----------

  function hotlineItem(h) {
    var action = h.phone
      ? '<a class="btn" href="tel:' + esc(h.phone) + '">📞 ' + esc(h.phone) + "</a>"
      : '<span class="pending">' + t("pending") + "</span>";
    return '<li class="card row"><span class="icon" aria-hidden="true">' + h.icon + "</span>" +
      '<div class="grow"><h3>' + esc(L(h.name)) + "</h3></div>" + action + "</li>";
  }

  // ---------- Office hours ----------

  function officeById(id) {
    return DATA.offices.filter(function (o) { return o.id === id; })[0];
  }

  function schedule(o) { return o.hours === "standard" ? DATA.standardHours : o.hours; }

  function toMins(hhmm) { var p = hhmm.split(":"); return +p[0] * 60 + +p[1]; }

  function fmtTime(hhmm) {
    var m = toMins(hhmm), h = Math.floor(m / 60) % 24, min = m % 60;
    return ((h % 12) || 12) + ":" + (min < 10 ? "0" : "") + min + (h < 12 ? " AM" : " PM");
  }

  // Current day/time in the Philippines, whatever the phone's timezone is.
  function manilaNow() {
    var parts = {};
    new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    return {
      day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday),
      mins: (+parts.hour % 24) * 60 + +parts.minute
    };
  }

  function openStatus(o) {
    var now = manilaNow(), sched = schedule(o);
    for (var i = 0; i < sched.length; i++) {
      var e = sched[i];
      if (e.days.indexOf(now.day) !== -1 && now.mins >= toMins(e.open) && now.mins < toMins(e.close)) {
        return { open: true, text: t("openNow") + " · " + t("closesAt") + " " + fmtTime(e.close) };
      }
    }
    // Find the next opening within the coming week.
    for (var k = 0; k < 8; k++) {
      var day = (now.day + k) % 7, best = null;
      sched.forEach(function (e) {
        if (e.days.indexOf(day) === -1) return;
        if (k === 0 && toMins(e.open) <= now.mins) return;
        if (!best || toMins(e.open) < toMins(best.open)) best = e;
      });
      if (best) {
        var when = k === 0 ? "" : (k === 1 ? (lang === "fil" ? "bukas " : "tomorrow ") : t("days")[day] + " ");
        return { open: false, text: t("closedNow") + " · " + t("opensAt") + " " + when + fmtTime(best.open) };
      }
    }
    return { open: false, text: t("closedNow") };
  }

  function statusBadge(o) {
    var st = openStatus(o);
    return '<span class="badge ' + (st.open ? "open" : "closed") + '">' + esc(st.text) + "</span>";
  }

  // "Lun–Biy · 8:00 AM–5:00 PM"
  function hoursSummary(o) {
    return schedule(o).map(function (e) {
      var d = e.days.slice().sort(), names = t("days");
      var contiguous = d[d.length - 1] - d[0] === d.length - 1;
      var days = d.length === 7 ? (lang === "fil" ? "Araw-araw" : "Daily")
        : contiguous && d.length > 2 ? names[d[0]] + "–" + names[d[d.length - 1]]
        : d.map(function (x) { return names[x]; }).join(", ");
      return days + " · " + fmtTime(e.open) + "–" + fmtTime(e.close);
    }).join("<br>");
  }

  function officeWhere(o) {
    if (!o.building) return t("locationPending");
    var b = DATA.buildings[o.building];
    return esc(L(b.name)) + '<br><span class="muted">' + esc(b.address) + "</span>" +
      (o.room ? "<br>" + esc(o.room) : '<br><span class="muted">' + t("roomPending") + "</span>");
  }

  function officeItem(o) {
    var call = o.phone ? '<a class="btn" href="tel:' + esc(o.phone) + '">📞 ' + esc(o.phone) + "</a>" : "";
    return '<li class="card office" id="office-' + o.id + '"><div class="row"><span class="icon" aria-hidden="true">' + o.icon + "</span>" +
      '<div class="grow"><h3>' + esc(L(o.name)) + "</h3>" + (o.note ? '<div class="muted">' + esc(L(o.note)) + "</div>" : "") + "</div></div>" +
      '<div class="office-status">' + statusBadge(o) + "</div>" +
      '<dl class="facts"><dt>🕗 ' + t("hours") + "</dt><dd>" + hoursSummary(o) + "</dd>" +
      "<dt>📍 " + t("where") + "</dt><dd>" + officeWhere(o) + "</dd></dl>" +
      '<div class="actions"><a class="btn ghost" target="_blank" rel="noopener" href="' + mapsUrl(o.map) + '">🧭 ' + t("directions") + "</a>" + call + "</div></li>";
  }

  function renderOffices(focus) {
    view.innerHTML = "<h2>" + t("nav.offices") + '</h2><p class="muted">' + t("officesIntro") + "</p>" +
      '<p class="note">' + t("hoursNote") + '</p><ul class="list">' + DATA.offices.map(officeItem).join("") + "</ul>";
    var el = focus && document.getElementById("office-" + focus);
    if (el) {
      el.classList.add("highlight");
      setTimeout(function () { el.scrollIntoView({ block: "center" }); }, 0);
    }
  }

  function serviceItem(s) {
    var o = s.officeId && officeById(s.officeId);
    var reqs = L(s.requirements).map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
    return '<li><details class="card" id="svc-' + s.id + '"><summary class="row">' +
      '<span class="icon" aria-hidden="true">' + s.icon + "</span>" +
      '<div class="grow"><h3>' + esc(L(s.name)) + '</h3><div class="muted">' + esc(L(s.office)) + "</div></div>" +
      '<span class="chev" aria-hidden="true">›</span></summary>' +
      '<div class="section-label">' + t("requirements") + "</div><ul>" + reqs + "</ul>" +
      '<div class="section-label">' + t("office") + '</div><div>' + esc(L(s.office)) + "</div>" +
      (o ? '<div class="svc-office">' + statusBadge(o) + '<div class="muted">' + hoursSummary(o) + "</div>" +
        '<a class="btn ghost" href="#/offices/' + o.id + '">🏢 ' + t("viewOffice") + "</a></div>" : "") +
      "</details></li>";
  }

  function placeItem(p) {
    return '<li class="card"><div class="row"><span class="icon" aria-hidden="true">' + p.icon + "</span>" +
      '<div class="grow"><h3>' + esc(p.name) + '</h3><div class="muted">Brgy. ' + esc(p.barangay) + "</div></div></div>" +
      '<p style="margin:10px 0 12px">' + esc(L(p.desc)) + "</p>" +
      '<a class="btn ghost" target="_blank" rel="noopener" href="' + mapsUrl(p.map) + '">📍 ' + t("directions") + "</a></li>";
  }

  function barangayChip(b) {
    return '<a class="chip" target="_blank" rel="noopener" href="' +
      mapsUrl("Barangay " + b.replace(/\s*\(.*\)/, "") + " Hall, Rodriguez, Rizal") + '">' + esc(b) + "</a>";
  }

  function govCard() {
    var g = DATA.town;
    return '<section class="card gov"><img src="icons/icon-192.png" alt="" width="56" height="56">' +
      "<h3>" + t("govTitle") + '</h3><div class="addr">' + esc(g.address) + "</div><ul>" +
      '<li>🌐 <a href="' + esc(g.website) + '" target="_blank" rel="noopener">' + t("govSite") + ": " + esc(g.website.replace(/^https?:\/\//, "")) + "</a></li>" +
      '<li>✉️ <a href="mailto:' + esc(g.email) + '">' + t("govEmail") + ": " + esc(g.email) + "</a></li>" +
      "</ul></section>";
  }

  function renderHome() {
    var tiles = [
      ["#/hotlines", "📞", t("nav.hotlines")],
      ["#/services", "📋", t("nav.services")],
      ["#/offices", "🏢", t("nav.offices")],
      ["#/barangays", "🏘️", t("nav.barangays")],
      ["#/places", "🗺️", t("nav.places")],
      ["#/report", "📝", t("nav.report")]
    ].map(function (x) {
      return '<a class="tile" href="' + x[0] + '"><span class="emoji" aria-hidden="true">' + x[1] + "</span>" + x[2] + "</a>";
    }).join("");

    var news = DATA.announcements.map(function (a) {
      return '<li class="card"><div class="muted">' + esc(a.date) + "</div><h3>" + esc(L(a.title)) +
        '</h3><p style="margin:6px 0 0">' + esc(L(a.body)) + "</p></li>";
    }).join("");

    view.innerHTML =
      '<section class="hero"><h2><span class="script">' + t("welcomeA") + '</span><span class="big">' + t("welcomeB") + "</span></h2>" +
      '<form id="search-form" role="search"><input id="q" class="search" type="search" placeholder="' + t("search") + '" aria-label="' + t("search") + '"></form></section>' +
      '<a class="hotline911" href="tel:911" aria-label="' + t("sos") + '"><span class="hl-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg></span>' +
      '<span class="hl-label" aria-hidden="true"><span class="hl-top">MONTALBAN</span><span class="hl-pill">HOTLINE</span></span>' +
      '<span class="hl-num" aria-hidden="true">911</span><span class="hl-call" aria-hidden="true">' + t("sosCall") + " ›</span></a>" +
      '<a class="report-cta" href="#/report">📝 ' + t("reportCta") + ' <span aria-hidden="true">›</span></a>' +
      '<div class="section-label">' + t("quick") + '</div><div class="grid">' + tiles + "</div>" +
      '<div class="section-label">' + t("news") + '</div><ul class="list">' + news + "</ul>" + govCard();

    document.getElementById("search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("q").value.trim();
      if (q) location.hash = "#/search/" + encodeURIComponent(q);
    });
  }

  function renderHotlines() {
    var em = DATA.hotlines.filter(function (h) { return h.group === "emergency"; }).map(hotlineItem).join("");
    var lo = DATA.hotlines.filter(function (h) { return h.group === "local"; }).map(hotlineItem).join("");
    view.innerHTML = "<h2>" + t("nav.hotlines") + "</h2>" +
      '<div class="section-label">' + t("emergency") + '</div><ul class="list">' + em + "</ul>" +
      '<div class="section-label">' + t("local") + '</div><p class="note">' + t("hotlineNote") + '</p><ul class="list">' + lo + "</ul>";
  }

  function renderServices() {
    view.innerHTML = "<h2>" + t("nav.services") + "</h2>" +
      '<input id="filter" class="search bordered" type="search" placeholder="' + t("search") + '" aria-label="' + t("search") + '">' +
      '<p class="note">' + t("reqNote") + '</p><ul class="list" id="svc-list">' + DATA.services.map(serviceItem).join("") + "</ul>";

    var list = document.getElementById("svc-list");
    document.getElementById("filter").addEventListener("input", function (e) {
      var q = e.target.value.toLowerCase();
      var hits = DATA.services.filter(function (s) { return matches(s, q); });
      list.innerHTML = hits.length ? hits.map(serviceItem).join("") : '<li class="empty">' + t("noResults") + "</li>";
    });
  }

  function renderBarangays() {
    view.innerHTML = "<h2>" + t("nav.barangays") + '</h2><p class="muted">' + t("barangayIntro") + "</p>" +
      '<div class="chips">' + DATA.barangays.map(barangayChip).join("") + "</div>";
  }

  function renderPlaces() {
    view.innerHTML = "<h2>" + t("nav.places") + '</h2><ul class="list">' + DATA.places.map(placeItem).join("") + "</ul>";
  }

  // ---------- Report a problem ----------

  var REPORTS_KEY = "reports";

  function loadReports() {
    try { return JSON.parse(localStorage.getItem(REPORTS_KEY)) || []; } catch (e) { return []; }
  }
  function saveReports(list) {
    try { localStorage.setItem(REPORTS_KEY, JSON.stringify(list)); } catch (e) { /* storage blocked */ }
  }

  function refNo() {
    var d = new Date();
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    return "MTB-" + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" +
      Math.random().toString(36).slice(2, 6).toUpperCase();
  }

  function categoryById(id) {
    return DATA.report.categories.filter(function (c) { return c.id === id; })[0];
  }

  // Plain-text report, always in Filipino + English labels so any office can read it.
  function reportText(r) {
    var c = categoryById(r.category);
    var lines = [
      "REPORT NG PROBLEMA / PROBLEM REPORT",
      "Ref. No.: " + r.ref,
      "Petsa / Date: " + new Date(r.created).toLocaleString("en-PH"),
      "Uri / Type: " + (c ? c.name.fil + " / " + c.name.en : r.category),
      "Barangay: " + r.barangay,
      "Lugar / Location: " + r.location
    ];
    if (r.gps) lines.push("Mapa / Map: https://www.google.com/maps?q=" + r.gps);
    lines.push("", "Detalye / Details:", r.details);
    if (r.name || r.contact) lines.push("", "Nag-report / Reported by: " + [r.name, r.contact].filter(Boolean).join(" — "));
    lines.push("", "(Ipinadala gamit ang Bayan ng Montalban app)");
    return lines.join("\n");
  }

  function reportItem(r) {
    var c = categoryById(r.category);
    return '<li class="card row"><span class="icon" aria-hidden="true">' + (c ? c.icon : "📝") + "</span>" +
      '<div class="grow"><h3>' + esc(c ? L(c.name) : r.category) + '</h3><div class="muted">' +
      esc(r.ref) + " · Brgy. " + esc(r.barangay) + " · " + esc(new Date(r.created).toLocaleDateString("en-PH")) + "</div></div>" +
      '<a class="btn ghost" href="#/report/' + esc(r.ref) + '">' + t("open") + "</a></li>";
  }

  function field(label, control, required) {
    return '<label class="field"><span>' + label + (required ? ' <em>*</em>' : "") + "</span>" + control + "</label>";
  }

  function renderReport(ref) {
    if (ref) return renderReportSend(ref);

    var cats = DATA.report.categories.map(function (c) {
      return '<label class="cat"><input type="radio" name="category" value="' + c.id + '" required>' +
        '<span><span aria-hidden="true">' + c.icon + "</span> " + esc(L(c.name)) + "</span></label>";
    }).join("");
    var brgys = DATA.barangays.map(function (b) {
      return '<option value="' + esc(b) + '">' + esc(b) + "</option>";
    }).join("");
    var mine = loadReports();

    view.innerHTML = "<h2>" + t("reportTitle") + '</h2><p class="note">' + t("reportIntro") + "</p>" +
      '<form id="report-form" class="card form" novalidate>' +
      '<fieldset><legend>' + t("category") + ' <em>*</em></legend><div class="cats">' + cats + "</div></fieldset>" +
      field(t("barangay"), '<select name="barangay" required><option value="">' + t("choose") + "</option>" + brgys + "</select>", true) +
      field(t("location"), '<input name="location" required placeholder="' + t("locationPh") + '">', true) +
      '<div class="gps-row"><button type="button" id="gps" class="btn ghost">' + t("useGps") + '</button><span id="gps-status" class="muted"></span></div>' +
      field(t("details"), '<textarea name="details" rows="4" required placeholder="' + t("detailsPh") + '"></textarea>', true) +
      field(t("photo"), '<input name="photo" type="file" accept="image/*" capture="environment">') +
      field(t("name"), '<input name="name" autocomplete="name">') +
      field(t("contact"), '<input name="contact" autocomplete="tel">') +
      '<p id="form-error" class="error" role="alert" hidden>' + t("fillRequired") + "</p>" +
      '<button class="btn wide" type="submit">' + t("submit") + "</button></form>" +
      (mine.length ? '<div class="section-label">' + t("myReports") + '</div><ul class="list">' + mine.map(reportItem).join("") + "</ul>" : "");

    var form = document.getElementById("report-form");
    var gps = null;

    form.addEventListener("input", function () { document.getElementById("form-error").hidden = true; });

    document.getElementById("gps").addEventListener("click", function () {
      var status = document.getElementById("gps-status");
      if (!navigator.geolocation) { status.textContent = t("gpsFail"); return; }
      status.textContent = "…";
      navigator.geolocation.getCurrentPosition(function (pos) {
        gps = pos.coords.latitude.toFixed(6) + "," + pos.coords.longitude.toFixed(6);
        status.textContent = "✓ " + t("gpsOk");
      }, function () { status.textContent = t("gpsFail"); }, { enableHighAccuracy: true, timeout: 15000 });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = document.getElementById("form-error");
      if (!form.checkValidity() || !form.details.value.trim() || !form.location.value.trim()) {
        err.hidden = false;
        form.classList.add("touched");
        return;
      }
      var r = {
        ref: refNo(),
        created: Date.now(),
        category: form.category.value,
        barangay: form.barangay.value,
        location: form.location.value.trim(),
        gps: gps,
        details: form.details.value.trim(),
        name: form.name.value.trim(),
        contact: form.contact.value.trim()
      };
      // The photo can't go in localStorage or SMS/email links; keep it in memory for the share sheet.
      pendingPhoto = form.photo.files[0] || null;
      pendingPhotoRef = r.ref;
      saveReports([r].concat(loadReports()));
      location.hash = "#/report/" + r.ref;
    });
  }

  var pendingPhoto = null;
  var pendingPhotoRef = null;

  function renderReportSend(ref) {
    var r = loadReports().filter(function (x) { return x.ref === ref; })[0];
    if (!r) { location.hash = "#/report"; return; }
    var text = reportText(r);
    var subject = "Report " + r.ref + " — Brgy. " + r.barangay;
    var ch = DATA.report;
    var photo = pendingPhotoRef === ref ? pendingPhoto : null;

    var buttons = "";
    if (navigator.share) buttons += '<button type="button" id="share" class="btn">' + t("share") + "</button>";
    if (ch.sms) buttons += '<a class="btn" href="sms:' + esc(ch.sms) + "?body=" + encodeURIComponent(text) + '">' + t("sms") + "</a>";
    if (ch.email) buttons += '<a class="btn" href="mailto:' + esc(ch.email) + "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(text) + '">' + t("email") + "</a>";
    buttons += '<button type="button" id="copy" class="btn ghost">' + t("copy") + "</button>";

    view.innerHTML = "<h2>" + t("sendVia") + "</h2>" +
      '<div class="card"><div class="muted">' + t("refNo") + "</div><h3 class=\"ref\">" + esc(r.ref) + "</h3></div>" +
      '<p class="note">' + (ch.sms || ch.email ? t("sendNote") : t("noChannel")) + "</p>" +
      '<div class="actions">' + buttons + "</div>" +
      '<pre class="card preview">' + esc(text) + "</pre>" +
      '<div class="actions"><a class="btn ghost" href="#/report">' + t("newReport") + "</a>" +
      '<button type="button" id="del" class="btn ghost danger">' + t("deleteReport") + "</button></div>";

    var shareBtn = document.getElementById("share");
    if (shareBtn) shareBtn.addEventListener("click", function () {
      var payload = { title: subject, text: text };
      if (photo && navigator.canShare && navigator.canShare({ files: [photo] })) payload.files = [photo];
      navigator.share(payload).catch(function () {});
    });

    document.getElementById("copy").addEventListener("click", function (e) {
      var btn = e.currentTarget;
      var done = function () { btn.textContent = "✓ " + t("copied"); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, fallbackCopy);
      else fallbackCopy();
      function fallbackCopy() {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (err) { /* ignore */ }
        ta.remove();
      }
    });

    document.getElementById("del").addEventListener("click", function () {
      saveReports(loadReports().filter(function (x) { return x.ref !== ref; }));
      location.hash = "#/report";
    });
  }

  // ---------- Search ----------

  function haystack(obj) {
    return JSON.stringify(obj).toLowerCase();
  }
  function matches(obj, q) { return !q || haystack(obj).indexOf(q) !== -1; }

  function renderSearch(q) {
    var lq = q.toLowerCase();
    var h = DATA.hotlines.filter(function (x) { return matches(x, lq); });
    var s = DATA.services.filter(function (x) { return matches(x, lq); });
    var b = DATA.barangays.filter(function (x) { return x.toLowerCase().indexOf(lq) !== -1; });
    var p = DATA.places.filter(function (x) { return matches(x, lq); });
    var o = DATA.offices.filter(function (x) { return matches(x, lq); });

    var html = "<h2>" + t("results") + " “" + esc(q) + "”</h2>";
    if (h.length) html += '<div class="section-label">' + t("nav.hotlines") + '</div><ul class="list">' + h.map(hotlineItem).join("") + "</ul>";
    if (s.length) html += '<div class="section-label">' + t("nav.services") + '</div><ul class="list">' + s.map(serviceItem).join("") + "</ul>";
    if (o.length) html += '<div class="section-label">' + t("nav.offices") + '</div><ul class="list">' + o.map(officeItem).join("") + "</ul>";
    if (b.length) html += '<div class="section-label">' + t("nav.barangays") + '</div><div class="chips">' + b.map(barangayChip).join("") + "</div>";
    if (p.length) html += '<div class="section-label">' + t("nav.places") + '</div><ul class="list">' + p.map(placeItem).join("") + "</ul>";
    if (!h.length && !s.length && !b.length && !p.length && !o.length) html += '<p class="empty">' + t("noResults") + "</p>";
    view.innerHTML = html;
  }

  // ---------- Router ----------

  var routes = {
    "": ["home", renderHome],
    hotlines: ["hotlines", renderHotlines],
    services: ["services", renderServices],
    barangays: ["barangays", renderBarangays],
    places: ["places", renderPlaces]
  };

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var tab;
    if (parts[0] === "search" && parts[1]) {
      tab = "home";
      renderSearch(decodeURIComponent(parts[1]));
    } else if (parts[0] === "offices") {
      tab = "offices";
      renderOffices(parts[1] && decodeURIComponent(parts[1]));
    } else if (parts[0] === "report") {
      tab = "report";
      renderReport(parts[1] && decodeURIComponent(parts[1]));
    } else {
      var r = routes[parts[0]] || routes[""];
      tab = r[0];
      r[1]();
    }
    document.querySelectorAll(".tabbar a").forEach(function (a) {
      var on = a.getAttribute("data-tab") === tab;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }

  function applyLang() {
    document.documentElement.lang = lang;
    langBtn.textContent = lang === "fil" ? "EN" : "FIL";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    route();
  }

  langBtn.addEventListener("click", function () {
    lang = lang === "fil" ? "en" : "fil";
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ }
    applyLang();
  });

  window.addEventListener("hashchange", route);
  applyLang();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    // When a new version takes over an already-open page, reload once so it shows.
    var hadController = !!navigator.serviceWorker.controller;
    var reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !reloaded) { reloaded = true; location.reload(); }
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(function () {});
  }
})();
