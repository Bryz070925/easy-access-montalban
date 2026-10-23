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
      reportCta: "May problema sa inyong lugar?",
      reportCtaSub: "I-report ang sirang kalsada, baha, basura at iba pa",
      reportIntro: "Para sa mga hindi emergency na problema. Kung may panganib sa buhay, tumawag agad sa 911.",
      category: "Uri ng problema",
      barangay: "Barangay",
      choose: "— Pumili —",
      location: "Eksaktong lugar / palatandaan",
      locationPh: "Hal. tapat ng chapel sa Purok 3",
      useGps: "Gamitin ang aking lokasyon",
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
      share: "I-share",
      sms: "SMS",
      email: "Email",
      copy: "Kopyahin",
      copied: "Nakopya!",
      newReport: "Bagong report",
      myReports: "Aking mga Report",
      refNo: "Ref. No.",
      deleteReport: "Burahin",
      fillRequired: "Pakikumpleto ang mga kailangang field.",
      "nav.inquire": "Magtanong",
      where2: "Saan",
      askAbout: "Magtanong tungkol dito",
      servicesIntro: "Mga serbisyo ng bawat opisina at ang mga kailangang dalhin.",
      servicesCount: "serbisyo",
      officeHoursLink: "Oras at lokasyon",
      seeServices: "Mga serbisyo",
      inquireCta: "Magtanong sa opisina",
      inquireCtaSub: "Makakuha ng reference no. at sagot",
      reportCtaShort: "May problema?",
      reportCtaShortSub: "I-report sa bayan",
      inquireTitle: "Magtanong sa Opisina",
      inquireIntro: "Ipadala ang tanong mo sa tamang opisina. Makakatanggap ka ng reference number at makikita mo rito ang sagot.",
      inquireOfflineIntro: "Ipadala ang tanong mo sa tamang opisina. (Hindi pa naka-set up ang online na sistema, kaya ibabahagi o kokopyahin mo muna ang tanong.)",
      tabAsk: "Magtanong",
      tabMine: "Aking mga tanong",
      office2: "Opisina",
      topic: "Tungkol saan",
      topicPh: "Hal. Business permit renewal",
      question: "Ang iyong tanong",
      questionPh: "Isulat nang malinaw ang tanong mo…",
      inquirePrivacy: "Ang pangalan at contact ay makikita lang ng staff ng opisina.",
      sendInquiry: "Ipadala ang tanong",
      sending: "Ipinapadala…",
      sentTitle: "Naipadala na!",
      sentBody: "I-save ang reference number mo. Makikita mo ang sagot sa \u201cAking mga tanong\u201d.",
      viewMine: "Tingnan ang aking mga tanong",
      askAnother: "Magtanong ulit",
      netError: "Hindi maipadala. Tingnan ang internet connection at subukan ulit.",
      noInquiries: "Wala ka pang tanong.",
      refresh: "I-refresh",
      lastUpdated: "Huling update",
      offlineCached: "Offline: ipinapakita ang huling na-save.",
      reply: "Sagot",
      repliedBy: "Sumagot",
      "status.new": "Bago",
      "status.in_progress": "Inaasikaso",
      "status.answered": "Nasagot",
      "status.closed": "Sarado",
      "status.local": "Hindi naipadala online",
      allStatus: "Lahat",
      staffLogin: "Para sa staff: mag-login",
      deskTitle: "Staff Desk",
      deskLoginIntro: "Para lang sa mga awtorisadong staff ng Munisipyo.",
      email2: "Email",
      password: "Password",
      login: "Mag-login",
      logout: "Mag-logout",
      loginFailed: "Mali ang email o password.",
      notStaff: "Hindi naka-rehistro bilang staff ang account na ito.",
      deskNotSetup: "Hindi pa naka-set up ang online na sistema. Tingnan ang SUPABASE-SETUP.md sa repository.",
      allOffices: "Lahat ng opisina",
      tabInquiries: "Mga tanong",
      tabPost: "Anunsyo",
      from: "Mula kay",
      save: "I-save",
      saved: "Na-save!",
      status: "Status",
      replyPh: "Isulat ang sagot para sa residente…",
      annTitle: "Pamagat",
      annTitlePh: "Hal. Libreng anti-rabies vaccination sa Sabado",
      annCategory: "Uri",
      annOffice: "Mula sa opisina",
      annBody: "Detalye",
      annBodyPh: "Kailan, saan, sino ang puwede, ano ang dadalhin…",
      post: "I-post",
      posted: "Na-post!",
      deleteConfirm: "Burahin ang anunsyong ito?",
      postedAnn: "Mga naka-post",
      "cat.advisory": "Abiso",
      "cat.schedule": "Iskedyul",
      "cat.program": "Programa",
      "cat.emergency": "Emergency",
      none: "— Wala —",
      noneYet: "Wala pa.",
      inquiryCount: "tanong",
      tabStaff: "Staff",
      addStaff: "Magdagdag ng staff",
      staffName: "Pangalan (makikita sa mga sagot)",
      tempPassword: "Pansamantalang password",
      generate: "Gumawa",
      officeAccess: "Opisinang hahawakan",
      allOfficesOpt: "Lahat ng opisina",
      makeAdmin: "Admin: puwedeng mag-manage ng staff",
      createStaff: "Gumawa ng account",
      staffCreated: "Nagawa na ang account. Ibigay ito sa staff:",
      pwChanged: "Napalitan ang password. Ibigay ito sa staff:",
      credsNote: "Ipadala nang pribado (hal. personal na mensahe), hindi sa group chat. Puwedeng ipa-reset ulit kung kailangan.",
      staffList: "Mga staff",
      adminBadge: "Admin",
      youBadge: "Ikaw",
      resetPw: "Reset password",
      removeStaff: "Alisin",
      removeConfirm: "Alisin ang staff na ito? Hindi na siya makakapag-login.",
      resetConfirm: "Gumawa ng bagong password para sa staff na ito?",
      fnNotDeployed: "Hindi pa naka-deploy ang \u201cstaff-admin\u201d function sa Supabase. Tingnan ang SUPABASE-SETUP.md, step 7.",
      pwRule: "8 character pataas",
      desk: "Desk"
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
      reportCta: "Problem in your area?",
      reportCtaSub: "Report damaged roads, flooding, garbage and more",
      reportIntro: "For non-emergency problems. If a life is in danger, call 911 right away.",
      category: "Type of problem",
      barangay: "Barangay",
      choose: "— Choose —",
      location: "Exact location / landmark",
      locationPh: "E.g. across the chapel in Purok 3",
      useGps: "Use my location",
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
      share: "Share",
      sms: "SMS",
      email: "Email",
      copy: "Copy",
      copied: "Copied!",
      newReport: "New report",
      myReports: "My Reports",
      refNo: "Ref. No.",
      deleteReport: "Delete",
      fillRequired: "Please complete the required fields.",
      "nav.inquire": "Ask",
      where2: "Where",
      askAbout: "Ask about this",
      servicesIntro: "Services of each office and what to bring.",
      servicesCount: "services",
      officeHoursLink: "Hours & location",
      seeServices: "Services",
      inquireCta: "Ask an office",
      inquireCtaSub: "Get a reference no. and an answer",
      reportCtaShort: "Problem?",
      reportCtaShortSub: "Report it to the town",
      inquireTitle: "Ask an Office",
      inquireIntro: "Send your question to the right office. You'll get a reference number and can see the answer here.",
      inquireOfflineIntro: "Send your question to the right office. (The online system isn't set up yet, so you'll share or copy your question for now.)",
      tabAsk: "Ask",
      tabMine: "My inquiries",
      office2: "Office",
      topic: "Topic",
      topicPh: "E.g. Business permit renewal",
      question: "Your question",
      questionPh: "Write your question clearly…",
      inquirePrivacy: "Your name and contact are only visible to the office staff.",
      sendInquiry: "Send question",
      sending: "Sending…",
      sentTitle: "Sent!",
      sentBody: "Save your reference number. You'll see the answer in \u201cMy inquiries\u201d.",
      viewMine: "See my inquiries",
      askAnother: "Ask another",
      netError: "Couldn't send. Check your internet connection and try again.",
      noInquiries: "You have no inquiries yet.",
      refresh: "Refresh",
      lastUpdated: "Last updated",
      offlineCached: "Offline: showing the last saved copy.",
      reply: "Answer",
      repliedBy: "Answered by",
      "status.new": "New",
      "status.in_progress": "In progress",
      "status.answered": "Answered",
      "status.closed": "Closed",
      "status.local": "Not sent online",
      allStatus: "All",
      staffLogin: "For staff: log in",
      deskTitle: "Staff Desk",
      deskLoginIntro: "For authorized Municipal staff only.",
      email2: "Email",
      password: "Password",
      login: "Log in",
      logout: "Log out",
      loginFailed: "Wrong email or password.",
      notStaff: "This account is not registered as staff.",
      deskNotSetup: "The online system isn't set up yet. See SUPABASE-SETUP.md in the repository.",
      allOffices: "All offices",
      tabInquiries: "Inquiries",
      tabPost: "Announcements",
      from: "From",
      save: "Save",
      saved: "Saved!",
      status: "Status",
      replyPh: "Write the answer for the resident…",
      annTitle: "Title",
      annTitlePh: "E.g. Free anti-rabies vaccination this Saturday",
      annCategory: "Category",
      annOffice: "From office",
      annBody: "Details",
      annBodyPh: "When, where, who can join, what to bring…",
      post: "Post",
      posted: "Posted!",
      deleteConfirm: "Delete this announcement?",
      postedAnn: "Posted",
      "cat.advisory": "Advisory",
      "cat.schedule": "Schedule",
      "cat.program": "Program",
      "cat.emergency": "Emergency",
      none: "— None —",
      noneYet: "None yet.",
      inquiryCount: "inquiries",
      tabStaff: "Staff",
      addStaff: "Add staff",
      staffName: "Name (shown on replies)",
      tempPassword: "Temporary password",
      generate: "Generate",
      officeAccess: "Office they handle",
      allOfficesOpt: "All offices",
      makeAdmin: "Admin: can manage staff",
      createStaff: "Create account",
      staffCreated: "Account created. Give this to the staff member:",
      pwChanged: "Password changed. Give this to the staff member:",
      credsNote: "Send it privately (e.g. a direct message), not in a group chat. You can reset it again anytime.",
      staffList: "Staff",
      adminBadge: "Admin",
      youBadge: "You",
      resetPw: "Reset password",
      removeStaff: "Remove",
      removeConfirm: "Remove this staff member? They will no longer be able to log in.",
      resetConfirm: "Create a new password for this staff member?",
      fnNotDeployed: "The \u201cstaff-admin\u201d function isn't deployed in Supabase yet. See SUPABASE-SETUP.md, step 7.",
      pwRule: "8 characters or more",
      desk: "Desk"
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

  // Inline SVG icon from icons.js (Lucide).
  function ic(name, size) {
    return '<svg class="i" width="' + (size || 20) + '" height="' + (size || 20) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (window.ICONS[name] || "") + "</svg>";
  }
  function badgeIcon(name, tone) {
    return '<span class="icon' + (tone ? " tone-" + tone : "") + '">' + ic(name, 22) + "</span>";
  }

  function mapsUrl(q) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }

  // ---------- Renderers ----------

  function hotlineItem(h) {
    var action = h.phone
      ? '<a class="btn" href="tel:' + esc(h.phone) + '">' + ic("phone", 16) + esc(h.phone) + "</a>"
      : '<span class="pending">' + t("pending") + "</span>";
    return '<li class="card row">' + badgeIcon(h.icon, h.group === "emergency" ? "red" : "") +
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
    var call = o.phone ? '<a class="btn" href="tel:' + esc(o.phone) + '">' + ic("phone", 16) + esc(o.phone) + "</a>" : "";
    return '<li class="card office" id="office-' + o.id + '"><div class="row">' + badgeIcon(o.icon) +
      '<div class="grow"><h3>' + esc(L(o.name)) + "</h3>" + (o.note ? '<div class="muted">' + esc(L(o.note)) + "</div>" : "") + "</div></div>" +
      '<div class="office-status">' + statusBadge(o) + "</div>" +
      '<dl class="facts"><dt>' + ic("clock", 16) + t("hours") + "</dt><dd>" + hoursSummary(o) + "</dd>" +
      "<dt>" + ic("map-pin", 16) + t("where") + "</dt><dd>" + officeWhere(o) + "</dd></dl>" +
      '<div class="actions"><a class="btn ghost" target="_blank" rel="noopener" href="' + mapsUrl(o.map) + '">' + ic("navigation", 16) + t("directions") + "</a>" +
      '<a class="btn ghost" href="#/services/' + o.id + '">' + ic("clipboard-list", 16) + t("seeServices") + "</a>" + call + "</div></li>";
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

  // ---------- Services (grouped by office) ----------

  function groupById(id) {
    return officeById(id) || DATA.serviceGroups.filter(function (g) { return g.id === id; })[0];
  }
  function servicesOf(id) { return DATA.services.filter(function (s) { return s.officeId === id; }); }
  function serviceById(id) { return DATA.services.filter(function (s) { return s.id === id; })[0]; }
  function officeLabel(id) { var o = officeById(id); return o ? o.abbr + " · " + L(o.name) : id; }

  function groupWhere(g) {
    if (g.where) return esc(L(g.where));
    if (!g.building) return t("locationPending");
    var b = DATA.buildings[g.building];
    return esc(L(b.name)) + " · " + esc(b.address);
  }

  function serviceBlock(s) {
    var reqs = L(s.requirements).map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
    var ask = officeById(s.officeId)
      ? '<a class="btn ghost small" href="#/inquire/new/' + s.id + '">' + ic("message-circle-question", 16) + t("askAbout") + "</a>"
      : "";
    return '<div class="svc" id="svc-' + s.id + '"><h4>' + esc(L(s.name)) + "</h4><ul>" + reqs + "</ul>" + ask + "</div>";
  }

  function groupCard(g, list, open) {
    var isOffice = !!officeById(g.id);
    return '<li><details class="card grp" id="grp-' + g.id + '"' + (open ? " open" : "") + '><summary class="row">' +
      badgeIcon(g.icon) + '<div class="grow"><div class="title-row"><span class="abbr">' + esc(g.abbr) + "</span><h3>" + esc(L(g.name)) + "</h3></div>" +
      '<div class="muted">' + esc(L(g.note)) + " · " + list.length + " " + t("servicesCount") + "</div></div>" +
      '<span class="chev">' + ic("chevron-down", 20) + "</span></summary>" +
      '<div class="grp-meta">' + ic("map-pin", 16) + "<span>" + groupWhere(g) + "</span></div>" +
      (isOffice ? '<div class="grp-meta">' + statusBadge(g) + '<a href="#/offices/' + g.id + '">' + t("officeHoursLink") + "</a></div>" : "") +
      list.map(serviceBlock).join("") + "</details></li>";
  }

  function serviceResult(s) {
    var g = groupById(s.officeId);
    return '<li><a class="card row link-card" href="#/services/' + s.officeId + '">' + badgeIcon(g.icon) +
      '<div class="grow"><h3>' + esc(L(s.name)) + '</h3><div class="muted">' + esc(g.abbr + " · " + L(g.name)) + "</div></div>" +
      ic("chevron-right", 20) + "</a></li>";
  }

  function renderServices(focus) {
    view.innerHTML = "<h2>" + t("nav.services") + '</h2><p class="muted">' + t("servicesIntro") + "</p>" +
      '<div class="search-wrap bordered">' + ic("search", 20) + '<input id="filter" class="search" type="search" placeholder="' + t("search") + '" aria-label="' + t("search") + '"></div>' +
      '<p class="note">' + t("reqNote") + '</p><ul class="list" id="svc-list"></ul>';

    var list = document.getElementById("svc-list");
    function draw(q) {
      var html = DATA.offices.concat(DATA.serviceGroups).map(function (g) {
        var items = servicesOf(g.id);
        if (q && !matches({ a: g.abbr, n: g.name, o: g.note }, q)) {
          items = items.filter(function (s) { return matches({ n: s.name, r: s.requirements }, q); });
          if (!items.length) return "";
        }
        return groupCard(g, items, !!q || g.id === focus);
      }).join("");
      list.innerHTML = html || '<li class="empty">' + t("noResults") + "</li>";
    }
    draw("");
    document.getElementById("filter").addEventListener("input", function (e) { draw(e.target.value.toLowerCase().trim()); });
    var el = focus && document.getElementById("grp-" + focus);
    if (el) setTimeout(function () { el.scrollIntoView({ block: "start" }); window.scrollBy(0, -72); }, 0);
  }

  function placeItem(p) {
    return '<li class="card"><div class="row">' + badgeIcon(p.icon, "sky") +
      '<div class="grow"><h3>' + esc(p.name) + '</h3><div class="muted">Brgy. ' + esc(p.barangay) + "</div></div></div>" +
      '<p class="desc">' + esc(L(p.desc)) + "</p>" +
      '<a class="btn ghost" target="_blank" rel="noopener" href="' + mapsUrl(p.map) + '">' + ic("navigation", 16) + t("directions") + "</a></li>";
  }

  function barangayChip(b) {
    return '<a class="chip" target="_blank" rel="noopener" href="' +
      mapsUrl("Barangay " + b.replace(/\s*\(.*\)/, "") + " Hall, Rodriguez, Rizal") + '">' + ic("map-pin", 16) + esc(b) + "</a>";
  }

  function govCard() {
    var g = DATA.town;
    return '<section class="card gov"><img src="icons/icon-192.png" alt="" width="56" height="56">' +
      "<h3>" + t("govTitle") + '</h3><div class="addr">' + esc(g.address) + "</div><ul>" +
      '<li><a href="' + esc(g.website) + '" target="_blank" rel="noopener">' + ic("globe", 18) + "<span><small>" + t("govSite") + "</small>" + esc(g.website.replace(/^https?:\/\//, "")) + "</span></a></li>" +
      '<li><a href="mailto:' + esc(g.email) + '">' + ic("mail", 18) + "<span><small>" + t("govEmail") + "</small>" + esc(g.email) + "</span></a></li>" +
      (ONLINE ? '<li><a href="#/desk">' + ic("user-cog", 18) + "<span>" + t("staffLogin") + "</span></a></li>" : "") +
      "</ul></section>";
  }

  function renderHome() {
    var tiles = [
      ["#/hotlines", "phone-call", t("nav.hotlines"), "red"],
      ["#/services", "clipboard-list", t("nav.services"), "green"],
      ["#/offices", "building-2", t("nav.offices"), "sky"],
      ["#/barangays", "house-plus", t("nav.barangays"), "amber"],
      ["#/places", "mountain", t("nav.places"), "teal"],
      ["#/report", "message-square-warning", t("nav.report"), "violet"]
    ].map(function (x) {
      return '<a class="tile" href="' + x[0] + '"><span class="tile-icon tone-' + x[3] + '">' + ic(x[1], 26) + "</span>" + x[2] + "</a>";
    }).join("");

    view.innerHTML =
      '<section class="hero"><h2><span class="script">' + t("welcomeA") + '</span><span class="big">' + t("welcomeB") + "</span></h2>" +
      '<form id="search-form" class="search-wrap" role="search">' + ic("search", 20) + '<input id="q" class="search" type="search" placeholder="' + t("search") + '" aria-label="' + t("search") + '"></form></section>' +
      '<a class="hotline911" href="tel:911" aria-label="' + t("sos") + '"><span class="hl-icon">' + ic("phone-call", 22) + "</span>" +
      '<span class="hl-label" aria-hidden="true"><span class="hl-top">MONTALBAN</span><span class="hl-pill">HOTLINE</span></span>' +
      '<span class="hl-num" aria-hidden="true">911</span><span class="hl-call" aria-hidden="true">' + t("sosCall") + ic("chevron-right", 16) + "</span></a>" +
      '<div class="cta-row"><a class="cta" href="#/inquire">' + badgeIcon("message-circle-question", "sky") +
      "<strong>" + t("inquireCta") + '</strong><span class="muted">' + t("inquireCtaSub") + "</span></a>" +
      '<a class="cta" href="#/report">' + badgeIcon("message-square-warning", "amber") +
      "<strong>" + t("reportCtaShort") + '</strong><span class="muted">' + t("reportCtaShortSub") + "</span></a></div>" +
      '<div class="section-label">' + t("quick") + '</div><div class="grid">' + tiles + "</div>" +
      '<div class="section-label">' + t("news") + '</div><ul class="list" id="news-list">' + announcementsHtml() + "</ul>" + govCard();
    refreshAnnouncements();

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
    return '<li class="card row">' + badgeIcon(c ? c.icon : "message-square-warning") +
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
        '<span>' + ic(c.icon, 22) + esc(L(c.name)) + "</span></label>";
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
      '<div class="gps-row"><button type="button" id="gps" class="btn ghost">' + ic("crosshair", 16) + t("useGps") + '</button><span id="gps-status" class="muted"></span></div>' +
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

    view.innerHTML = "<h2>" + t("sendVia") + "</h2>" +
      '<div class="card"><div class="muted">' + t("refNo") + "</div><h3 class=\"ref\">" + esc(r.ref) + "</h3></div>" +
      '<p class="note">' + (ch.sms || ch.email ? t("sendNote") : t("noChannel")) + "</p>" +
      shareButtons({ text: text, subject: subject, sms: ch.sms, email: ch.email }) +
      '<pre class="card preview">' + esc(text) + "</pre>" +
      '<div class="actions"><a class="btn ghost" href="#/report">' + ic("plus", 16) + t("newReport") + "</a>" +
      '<button type="button" id="del" class="btn danger">' + ic("trash-2", 16) + t("deleteReport") + "</button></div>";
    wireShareButtons(view, { text: text, subject: subject, photo: photo });

    document.getElementById("del").addEventListener("click", function () {
      saveReports(loadReports().filter(function (x) { return x.ref !== ref; }));
      location.hash = "#/report";
    });
  }

  // ---------- Online database (Supabase, configured in config.js) ----------
  // Without a configuration the app still works: inquiries are shared or
  // copied like reports, and the staff Desk explains it isn't set up.

  var CFG = window.APP_CONFIG || {};
  var ONLINE = !!(CFG.supabaseUrl && CFG.supabaseAnonKey);
  var SESSION_KEY = "staffSession", MY_KEY = "myInquiries", ANN_KEY = "annCache";

  function getJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function setJSON(key, v) {
    try { if (v == null) localStorage.removeItem(key); else localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* storage blocked */ }
  }

  // Private random token tying this phone to its own inquiries.
  function clientToken() {
    var tok = getJSON("clientToken", null);
    if (!tok) {
      var a = new Uint8Array(24);
      crypto.getRandomValues(a);
      tok = Array.prototype.map.call(a, function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
      setJSON("clientToken", tok);
    }
    return tok;
  }

  function request(method, path, body, opts) {
    opts = opts || {};
    var sess = opts.auth ? getJSON(SESSION_KEY, null) : null;
    var headers = { apikey: CFG.supabaseAnonKey, "Content-Type": "application/json" };
    // Staff send their login token. Residents send the legacy JWT anon key too;
    // newer "sb_publishable_" keys are not JWTs and go only in the apikey header.
    if (sess) headers.Authorization = "Bearer " + sess.access_token;
    else if (/^eyJ/.test(CFG.supabaseAnonKey)) headers.Authorization = "Bearer " + CFG.supabaseAnonKey;
    if (opts.prefer) headers.Prefer = opts.prefer;
    return fetch(CFG.supabaseUrl.replace(/\/$/, "") + path, {
      method: method, headers: headers, body: body == null ? undefined : JSON.stringify(body)
    }).then(function (r) {
      return r.text().then(function (txt) {
        var data = null;
        try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = txt; }
        if (!r.ok) {
          var err = new Error((data && (data.message || data.error_description || data.error)) || "HTTP " + r.status);
          err.status = r.status;
          throw err;
        }
        return data;
      });
    });
  }

  function rpc(name, params, opts) { return request("POST", "/rest/v1/rpc/" + name, params || {}, opts); }

  // Refresh the staff login when it is about to expire.
  function freshSession() {
    var s = getJSON(SESSION_KEY, null);
    if (!s) { var e = new Error("not logged in"); e.status = 401; return Promise.reject(e); }
    if (Date.now() / 1000 < s.expires_at - 60) return Promise.resolve(s);
    return request("POST", "/auth/v1/token?grant_type=refresh_token", { refresh_token: s.refresh_token }).then(function (d) {
      s.access_token = d.access_token;
      s.refresh_token = d.refresh_token;
      s.expires_at = Math.floor(Date.now() / 1000) + d.expires_in;
      setJSON(SESSION_KEY, s);
      return s;
    });
  }

  function staffRequest(method, path, body, prefer) {
    return freshSession()
      .then(function () { return request(method, path, body, { auth: true, prefer: prefer }); })
      .catch(function (e) {
        if (e.status === 401) { setJSON(SESSION_KEY, null); updateStaffUi(); }
        throw e;
      });
  }

  function staffLogin(email, password) {
    return request("POST", "/auth/v1/token?grant_type=password", { email: email, password: password }).then(function (d) {
      var s = { access_token: d.access_token, refresh_token: d.refresh_token, expires_at: Math.floor(Date.now() / 1000) + d.expires_in };
      setJSON(SESSION_KEY, s);
      return rpc("whoami", {}, { auth: true }).then(function (rows) {
        if (!rows || !rows.length) {
          staffLogout();
          var e = new Error(t("notStaff"));
          e.notStaff = true;
          throw e;
        }
        s.name = rows[0].display_name;
        s.office = rows[0].office_id;
        s.admin = !!rows[0].is_admin;
        setJSON(SESSION_KEY, s);
        return s;
      });
    });
  }

  function staffLogout() {
    if (getJSON(SESSION_KEY, null)) request("POST", "/auth/v1/logout", null, { auth: true }).catch(function () {});
    setJSON(SESSION_KEY, null);
    updateStaffUi();
  }

  function updateStaffUi() {
    var btn = document.getElementById("desk-btn");
    if (btn) btn.hidden = !(ONLINE && getJSON(SESSION_KEY, null));
  }

  function fmtDate(d) {
    return new Date(d).toLocaleDateString(lang === "fil" ? "fil-PH" : "en-PH", { month: "short", day: "numeric", year: "numeric" });
  }

  function segTabs(active, items) {
    return '<div class="seg" role="tablist">' + items.map(function (x) {
      var on = x[1] === active;
      return '<a role="tab" href="' + x[0] + '"' + (on ? ' class="on" aria-selected="true"' : "") + ">" + x[2] + "</a>";
    }).join("") + "</div>";
  }

  function officeOptions(selected, noneLabel) {
    return '<option value="">' + (noneLabel || t("choose")) + "</option>" + DATA.offices.map(function (o) {
      return '<option value="' + o.id + '"' + (o.id === selected ? " selected" : "") + ">" + esc(o.abbr + " · " + L(o.name)) + "</option>";
    }).join("");
  }

  // Share / SMS / email / copy buttons for text the app hands to other apps.
  function shareButtons(o) {
    var b = "";
    if (navigator.share) b += '<button type="button" class="btn js-share">' + ic("share-2", 16) + t("share") + "</button>";
    if (o.sms) b += '<a class="btn" href="sms:' + esc(o.sms) + "?body=" + encodeURIComponent(o.text) + '">' + ic("message-circle", 16) + t("sms") + "</a>";
    if (o.email) b += '<a class="btn" href="mailto:' + esc(o.email) + "?subject=" + encodeURIComponent(o.subject) +
      "&body=" + encodeURIComponent(o.text) + '">' + ic("mail", 16) + t("email") + "</a>";
    return '<div class="actions">' + b + '<button type="button" class="btn ghost js-copy">' + ic("copy", 16) + t("copy") + "</button></div>";
  }

  function wireShareButtons(root, o) {
    var share = root.querySelector(".js-share");
    if (share) share.addEventListener("click", function () {
      var payload = { title: o.subject, text: o.text };
      if (o.photo && navigator.canShare && navigator.canShare({ files: [o.photo] })) payload.files = [o.photo];
      navigator.share(payload).catch(function () {});
    });
    root.querySelector(".js-copy").addEventListener("click", function (e) {
      var btn = e.currentTarget;
      var done = function () { btn.innerHTML = ic("check", 16) + t("copied"); };
      if (navigator.clipboard) navigator.clipboard.writeText(o.text).then(done, fallbackCopy);
      else fallbackCopy();
      function fallbackCopy() {
        var ta = document.createElement("textarea");
        ta.value = o.text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (err) { /* ignore */ }
        ta.remove();
      }
    });
  }

  // ---------- Inquiries (residents) ----------

  function saveMine(q) { setJSON(MY_KEY, [q].concat(getJSON(MY_KEY, [])).slice(0, 50)); }

  function inquireTabs(active) {
    var n = getJSON(MY_KEY, []).length;
    return segTabs(active, [
      ["#/inquire", "ask", ic("message-circle-question", 16) + t("tabAsk")],
      ["#/inquire/mine", "mine", ic("inbox", 16) + t("tabMine") + (n ? " (" + n + ")" : "")]
    ]);
  }

  function renderInquire(arg, arg2) {
    if (arg === "mine") return renderMyInquiries();
    if (arg === "sent") return renderInquirySent(arg2);

    var svc = arg === "new" && arg2 ? serviceById(arg2) : null;
    var officeId = svc && officeById(svc.officeId) ? svc.officeId : "";
    var brgys = DATA.barangays.map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + "</option>"; }).join("");

    view.innerHTML = "<h2>" + t("inquireTitle") + "</h2>" + inquireTabs("ask") +
      '<p class="muted">' + (ONLINE ? t("inquireIntro") : t("inquireOfflineIntro")) + "</p>" +
      '<form id="inq-form" class="card form" novalidate>' +
      field(t("office2"), '<select name="office" required>' + officeOptions(officeId) + "</select>", true) +
      field(t("topic"), '<input name="topic" maxlength="200" placeholder="' + t("topicPh") + '" value="' + (svc ? esc(L(svc.name)) : "") + '">') +
      field(t("question"), '<textarea name="question" rows="5" required minlength="5" maxlength="2000" placeholder="' + t("questionPh") + '"></textarea>', true) +
      field(t("name"), '<input name="name" maxlength="120" autocomplete="name">') +
      field(t("contact"), '<input name="contact" maxlength="120" autocomplete="tel">') +
      field(t("barangay"), '<select name="barangay"><option value="">' + t("choose") + "</option>" + brgys + "</select>") +
      '<p class="muted small with-icon">' + ic("lock", 14) + t("inquirePrivacy") + "</p>" +
      '<p id="form-error" class="error" role="alert" hidden></p>' +
      '<button class="btn wide" type="submit">' + ic("send", 18) + t("sendInquiry") + "</button></form>";

    var form = document.getElementById("inq-form");
    var err = document.getElementById("form-error");
    var btn = form.querySelector("button[type=submit]");
    form.addEventListener("input", function () { err.hidden = true; });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity() || form.question.value.trim().length < 5) {
        err.textContent = t("fillRequired"); err.hidden = false; form.classList.add("touched");
        return;
      }
      var q = {
        office_id: form.office.value, topic: form.topic.value.trim(), question: form.question.value.trim(),
        name: form.name.value.trim(), contact: form.contact.value.trim(), barangay: form.barangay.value, created: Date.now()
      };
      if (!ONLINE) {
        q.ref = refNo().replace("MTB", "INQ");
        q.local = true;
        saveMine(q);
        location.hash = "#/inquire/sent/" + q.ref;
        return;
      }
      btn.disabled = true;
      btn.textContent = t("sending");
      rpc("submit_inquiry", {
        p_office_id: q.office_id, p_topic: q.topic, p_question: q.question, p_name: q.name,
        p_contact: q.contact, p_barangay: q.barangay, p_client_token: clientToken()
      }).then(function (ref) {
        // Name and contact stay with the office, not in this phone's history.
        q.ref = ref; q.status = "new"; delete q.name; delete q.contact;
        saveMine(q);
        location.hash = "#/inquire/sent/" + ref;
      }).catch(function (ex) {
        btn.disabled = false;
        btn.innerHTML = ic("send", 18) + t("sendInquiry");
        err.textContent = ex.status ? ex.message : t("netError");
        err.hidden = false;
      });
    });
  }

  function inquiryText(q) {
    var lines = [
      "TANONG SA OPISINA / INQUIRY",
      "Ref. No.: " + q.ref,
      "Opisina / Office: " + officeLabel(q.office_id)
    ];
    if (q.topic) lines.push("Tungkol / Topic: " + q.topic);
    lines.push("", q.question);
    var who = [q.name, q.contact, q.barangay && "Brgy. " + q.barangay].filter(Boolean).join(" — ");
    if (who) lines.push("", "Mula kay / From: " + who);
    lines.push("", "(Ipinadala gamit ang Bayan ng Montalban app)");
    return lines.join("\n");
  }

  function renderInquirySent(ref) {
    var q = getJSON(MY_KEY, []).filter(function (x) { return x.ref === ref; })[0];
    if (!q) { location.hash = "#/inquire"; return; }
    var text = inquiryText(q);
    view.innerHTML = "<h2>" + t("inquireTitle") + "</h2>" +
      '<div class="card sent">' + ic(q.local ? "send" : "circle-check", 44) +
      "<h3>" + (q.local ? t("sendVia") : t("sentTitle")) + '</h3><div class="muted">' + t("refNo") + '</div><div class="ref">' + esc(ref) + "</div>" +
      (q.local ? "" : '<p class="muted">' + t("sentBody") + "</p>") + "</div>" +
      (q.local ? '<p class="note">' + t("noChannel") + "</p>" + shareButtons({ text: text, subject: "Inquiry " + ref }) + '<pre class="card preview">' + esc(text) + "</pre>" : "") +
      '<div class="actions"><a class="btn" href="#/inquire/mine">' + ic("inbox", 16) + t("viewMine") + "</a>" +
      '<a class="btn ghost" href="#/inquire">' + ic("plus", 16) + t("askAnother") + "</a></div>";
    if (q.local) wireShareButtons(view, { text: text, subject: "Inquiry " + ref });
  }

  function statusPill(st) { return '<span class="pill st-' + st + '">' + t("status." + st) + "</span>"; }

  function inquiryCard(q) {
    var st = q.local ? "local" : q.status || "new";
    return '<li class="card inq"><div class="inq-head"><span class="ref small">' + esc(q.ref) + "</span>" + statusPill(st) + "</div>" +
      "<h3>" + esc(q.topic || officeLabel(q.office_id)) + '</h3><div class="muted">' + esc(officeLabel(q.office_id)) + " · " + fmtDate(q.created_at || q.created) + "</div>" +
      '<p class="desc">' + esc(q.question).replace(/\n/g, "<br>") + "</p>" +
      (q.reply ? '<div class="reply"><div class="reply-label">' + ic("reply", 16) + t("reply") + (q.replied_by ? " · " + esc(q.replied_by) : "") + "</div>" +
        esc(q.reply).replace(/\n/g, "<br>") + "</div>" : "") +
      (q.local ? '<a class="btn ghost small" href="#/inquire/sent/' + esc(q.ref) + '">' + ic("share-2", 16) + t("share") + "</a>" : "") + "</li>";
  }

  function renderMyInquiries() {
    var mine = getJSON(MY_KEY, []);
    var hasOnline = ONLINE && mine.some(function (q) { return !q.local; });
    view.innerHTML = "<h2>" + t("inquireTitle") + "</h2>" + inquireTabs("mine") +
      (hasOnline ? '<div class="toolbar"><span id="inq-status" class="muted small"></span><button id="inq-refresh" class="btn ghost small" type="button">' +
        ic("refresh-cw", 16) + t("refresh") + "</button></div>" : "") +
      '<ul class="list" id="inq-list">' + (mine.length ? mine.map(inquiryCard).join("") : '<li class="empty">' + t("noInquiries") + "</li>") + "</ul>";
    if (!hasOnline) return;

    function load() {
      var status = document.getElementById("inq-status");
      status.textContent = "…";
      rpc("my_inquiries", { p_client_token: clientToken() }).then(function (rows) {
        var byRef = {};
        rows.forEach(function (r) { byRef[r.ref] = r; });
        var merged = getJSON(MY_KEY, []).map(function (q) { return byRef[q.ref] ? Object.assign(q, byRef[q.ref]) : q; });
        setJSON(MY_KEY, merged);
        var list = document.getElementById("inq-list");
        if (!list) return; // navigated away
        list.innerHTML = merged.map(inquiryCard).join("");
        document.getElementById("inq-status").textContent = t("lastUpdated") + ": " +
          new Date().toLocaleTimeString(lang === "fil" ? "fil-PH" : "en-PH", { hour: "numeric", minute: "2-digit" });
      }).catch(function () {
        var s = document.getElementById("inq-status");
        if (s) s.textContent = t("offlineCached");
      });
    }
    document.getElementById("inq-refresh").addEventListener("click", load);
    load();
  }

  // ---------- Announcements ----------

  function annItem(a, staffTools) {
    var online = !!a.created_at;
    var cat = online ? a.category : "advisory";
    var o = online && a.office_id ? officeById(a.office_id) : null;
    var meta = [online ? fmtDate(a.created_at) : a.date, o ? o.abbr : null].filter(Boolean).join(" · ");
    return '<li class="card news"><div class="news-head">' +
      badgeIcon(cat === "emergency" ? "siren" : "megaphone", cat === "emergency" ? "red" : "amber") +
      '<div class="grow"><h3>' + esc(online ? a.title : L(a.title)) + '</h3><div class="muted">' + esc(meta) + "</div></div>" +
      (online ? '<span class="pill cat-' + cat + '">' + t("cat." + cat) + "</span>" : "") + "</div>" +
      '<p class="desc">' + esc(online ? a.body : L(a.body)).replace(/\n/g, "<br>") + "</p>" +
      (staffTools ? '<div class="ann-tools"><span class="muted small">' + esc(a.posted_by || "") + '</span><button type="button" class="btn danger small js-del" data-id="' + esc(a.id) + '">' +
        ic("trash-2", 16) + t("deleteReport") + "</button></div>" : "") + "</li>";
  }

  function announcementsHtml() {
    return getJSON(ANN_KEY, []).map(function (a) { return annItem(a); })
      .concat(DATA.announcements.map(function (a) { return annItem(a); })).join("");
  }

  function refreshAnnouncements() {
    if (!ONLINE) return Promise.resolve([]);
    return request("GET", "/rest/v1/announcements?select=*&order=created_at.desc&limit=30").then(function (rows) {
      setJSON(ANN_KEY, rows);
      var el = document.getElementById("news-list");
      if (el) el.innerHTML = announcementsHtml();
      return rows;
    }).catch(function () { return getJSON(ANN_KEY, []); });
  }

  // ---------- Staff Desk ----------

  var deskFilter = "open";

  function renderDesk(tab) {
    if (!ONLINE) {
      view.innerHTML = "<h2>" + t("deskTitle") + '</h2><p class="note">' + t("deskNotSetup") + "</p>";
      return;
    }
    var s = getJSON(SESSION_KEY, null);
    if (!s) return renderDeskLogin();
    if (!("admin" in s)) {
      // Logged in before admins existed: look up the admin flag once.
      return staffRequest("POST", "/rest/v1/rpc/whoami", {}).then(function (rows) {
        s.admin = !!(rows && rows[0] && rows[0].is_admin);
        setJSON(SESSION_KEY, s);
        drawDesk(s, tab);
      }).catch(function (e) {
        if (e.status === 401) return route();
        drawDesk(s, tab); // offline: show the Desk without the Staff tab, retry next time
      });
    }
    drawDesk(s, tab);
  }

  function drawDesk(s, tab) {
    view.innerHTML = '<div class="desk-head"><div><h2>' + t("deskTitle") + '</h2><div class="muted">' + esc(s.name) + " · " +
      esc(s.office ? officeLabel(s.office) : t("allOffices")) + '</div></div><button id="logout" class="btn ghost small" type="button">' +
      ic("log-out", 16) + t("logout") + "</button></div>" +
      segTabs(tab === "post" || (tab === "staff" && s.admin) ? tab : "inq", [
        ["#/desk", "inq", ic("inbox", 16) + t("tabInquiries")],
        ["#/desk/post", "post", ic("megaphone", 16) + t("tabPost")]
      ].concat(s.admin ? [["#/desk/staff", "staff", ic("user-cog", 16) + t("tabStaff")]] : [])) + '<div id="desk-body"></div>';
    document.getElementById("logout").addEventListener("click", function () { staffLogout(); location.hash = "#/"; });
    if (tab === "post") deskPost(s);
    else if (tab === "staff" && s.admin) deskStaff(s);
    else deskInquiries();
  }

  function renderDeskLogin() {
    view.innerHTML = "<h2>" + t("deskTitle") + '</h2><p class="muted">' + t("deskLoginIntro") + "</p>" +
      '<form id="login-form" class="card form" novalidate>' +
      field(t("email2"), '<input name="email" type="email" required autocomplete="username">', true) +
      field(t("password"), '<input name="password" type="password" required autocomplete="current-password">', true) +
      '<p id="form-error" class="error" role="alert" hidden></p>' +
      '<button class="btn wide" type="submit">' + ic("log-in", 18) + t("login") + "</button></form>";
    var form = document.getElementById("login-form");
    var err = document.getElementById("form-error");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { err.textContent = t("fillRequired"); err.hidden = false; return; }
      var btn = form.querySelector("button");
      btn.disabled = true;
      staffLogin(form.email.value.trim(), form.password.value).then(function () {
        updateStaffUi();
        route();
      }).catch(function (ex) {
        btn.disabled = false;
        err.textContent = ex.notStaff ? t("notStaff") : ex.status ? t("loginFailed") : t("netError");
        err.hidden = false;
      });
    });
  }

  function deskCard(r) {
    var opts = ["new", "in_progress", "answered", "closed"].map(function (st) {
      return '<option value="' + st + '"' + (st === r.status ? " selected" : "") + ">" + t("status." + st) + "</option>";
    }).join("");
    var who = [r.name, r.contact, r.barangay && "Brgy. " + r.barangay].filter(Boolean).join(" · ");
    return '<li class="card inq" data-ref="' + esc(r.ref) + '"><div class="inq-head"><span class="ref small">' + esc(r.ref) + "</span>" + statusPill(r.status) + "</div>" +
      "<h3>" + esc(r.topic || officeLabel(r.office_id)) + '</h3><div class="muted">' + esc(officeLabel(r.office_id)) + " · " + fmtDate(r.created_at) + "</div>" +
      '<p class="desc">' + esc(r.question).replace(/\n/g, "<br>") + "</p>" +
      (who ? '<div class="who">' + ic("user-round", 16) + "<span>" + esc(who) + "</span></div>" : "") +
      '<div class="desk-reply"><textarea rows="3" maxlength="4000" aria-label="' + t("reply") + '" placeholder="' + t("replyPh") + '">' + esc(r.reply || "") + "</textarea>" +
      '<div class="desk-actions"><select aria-label="' + t("status") + '">' + opts + '</select><button type="button" class="btn small js-save">' +
      ic("check", 16) + t("save") + "</button></div>" +
      (r.replied_by ? '<div class="muted small">' + t("repliedBy") + ": " + esc(r.replied_by) + "</div>" : "") + "</div></li>";
  }

  function deskInquiries() {
    var body = document.getElementById("desk-body");
    var filters = [["open", t("status.new") + " / " + t("status.in_progress")], ["answered", t("status.answered")], ["closed", t("status.closed")], ["all", t("allStatus")]];
    body.innerHTML = '<div class="chips-row">' + filters.map(function (f) {
      return '<button type="button" class="fchip' + (f[0] === deskFilter ? " on" : "") + '" data-f="' + f[0] + '">' + f[1] + "</button>";
    }).join("") + '</div><div class="toolbar"><span id="desk-status" class="muted small"></span><button id="desk-refresh" class="btn ghost small" type="button">' +
      ic("refresh-cw", 16) + t("refresh") + '</button></div><ul class="list" id="desk-list"></ul>';
    var list = document.getElementById("desk-list");
    var status = document.getElementById("desk-status");

    function load() {
      var q = "/rest/v1/inquiries?select=*&order=created_at.desc&limit=200";
      if (deskFilter === "open") q += "&status=in.(new,in_progress)";
      else if (deskFilter !== "all") q += "&status=eq." + deskFilter;
      status.textContent = "…";
      staffRequest("GET", q).then(function (rows) {
        list.innerHTML = rows.length ? rows.map(deskCard).join("") : '<li class="empty">' + t("noneYet") + "</li>";
        status.textContent = rows.length + " " + t("inquiryCount");
      }).catch(function (e) {
        if (e.status === 401) return route();
        status.textContent = t("netError");
      });
    }

    body.querySelector(".chips-row").addEventListener("click", function (e) {
      var b = e.target.closest(".fchip");
      if (!b) return;
      deskFilter = b.getAttribute("data-f");
      body.querySelectorAll(".fchip").forEach(function (x) { x.classList.toggle("on", x === b); });
      load();
    });
    document.getElementById("desk-refresh").addEventListener("click", load);

    list.addEventListener("click", function (e) {
      var btn = e.target.closest(".js-save");
      if (!btn) return;
      var li = btn.closest("[data-ref]");
      var reply = li.querySelector("textarea").value.trim();
      var st = li.querySelector("select").value;
      if (reply && st === "new") st = "answered"; // a reply with status left at "new" means it's answered
      btn.disabled = true;
      staffRequest("PATCH", "/rest/v1/inquiries?ref=eq." + encodeURIComponent(li.getAttribute("data-ref")),
        { status: st, reply: reply || null }, "return=representation").then(function (rows) {
        var tmp = document.createElement("ul");
        tmp.innerHTML = deskCard(rows[0]);
        var fresh = tmp.firstChild;
        li.replaceWith(fresh);
        var saved = fresh.querySelector(".js-save");
        saved.innerHTML = ic("check", 16) + t("saved");
        setTimeout(function () { saved.innerHTML = ic("check", 16) + t("save"); }, 1800);
      }).catch(function (ex) {
        btn.disabled = false;
        if (ex.status === 401) return route();
        alert(ex.status ? ex.message : t("netError"));
      });
    });
    load();
  }

  function deskPost(s) {
    var body = document.getElementById("desk-body");
    var cats = ["advisory", "schedule", "program", "emergency"].map(function (c) {
      return '<option value="' + c + '">' + t("cat." + c) + "</option>";
    }).join("");
    body.innerHTML = '<form id="ann-form" class="card form" novalidate>' +
      field(t("annTitle"), '<input name="title" required minlength="3" maxlength="160" placeholder="' + t("annTitlePh") + '">', true) +
      field(t("annCategory"), '<select name="category">' + cats + "</select>") +
      field(t("annOffice"), '<select name="office">' + officeOptions(s.office || "", t("none")) + "</select>") +
      field(t("annBody"), '<textarea name="body" rows="5" required minlength="3" maxlength="4000" placeholder="' + t("annBodyPh") + '"></textarea>', true) +
      '<p id="form-error" class="error" role="alert" hidden></p>' +
      '<button class="btn wide" type="submit">' + ic("send", 18) + t("post") + "</button></form>" +
      '<div class="section-label">' + t("postedAnn") + '</div><ul class="list" id="ann-list"></ul>';

    var form = document.getElementById("ann-form");
    var err = document.getElementById("form-error");
    var annList = document.getElementById("ann-list");
    function load() {
      refreshAnnouncements().then(function (rows) {
        annList.innerHTML = rows.length ? rows.map(function (a) { return annItem(a, true); }).join("") : '<li class="empty">' + t("noneYet") + "</li>";
      });
    }
    form.addEventListener("input", function () { err.hidden = true; });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { err.textContent = t("fillRequired"); err.hidden = false; form.classList.add("touched"); return; }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      staffRequest("POST", "/rest/v1/announcements", {
        title: form.title.value.trim(), body: form.body.value.trim(),
        category: form.category.value, office_id: form.office.value || null
      }, "return=minimal").then(function () {
        form.reset();
        form.classList.remove("touched");
        btn.disabled = false;
        btn.innerHTML = ic("check", 18) + t("posted");
        setTimeout(function () { btn.innerHTML = ic("send", 18) + t("post"); }, 1800);
        load();
      }).catch(function (ex) {
        btn.disabled = false;
        if (ex.status === 401) return route();
        err.textContent = ex.status ? ex.message : t("netError");
        err.hidden = false;
      });
    });
    annList.addEventListener("click", function (e) {
      var b = e.target.closest(".js-del");
      if (!b || !confirm(t("deleteConfirm"))) return;
      staffRequest("DELETE", "/rest/v1/announcements?id=eq." + encodeURIComponent(b.getAttribute("data-id"))).then(load)
        .catch(function (ex) { alert(ex.status ? ex.message : t("netError")); });
    });
    load();
  }

  // ---------- Staff management (admins only, via the "staff-admin" Edge Function) ----------

  function staffFn(action, payload) {
    return freshSession().then(function (sess) {
      return fetch(CFG.supabaseUrl.replace(/\/$/, "") + "/functions/v1/staff-admin", {
        method: "POST",
        headers: { apikey: CFG.supabaseAnonKey, Authorization: "Bearer " + sess.access_token, "Content-Type": "application/json" },
        body: JSON.stringify(Object.assign({ action: action }, payload || {}))
      });
    }).then(function (r) {
      return r.text().then(function (txt) {
        var data = null;
        try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = null; }
        if (!r.ok) {
          // Supabase answers 404 without an "error" field when the function isn't deployed.
          var err = new Error(r.status === 404 && !(data && data.error) ? t("fnNotDeployed") : (data && data.error) || "HTTP " + r.status);
          err.status = r.status;
          throw err;
        }
        return data;
      });
    });
  }

  // Readable random password (no 0/O, 1/l/I).
  function makePassword() {
    var abc = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    var a = new Uint8Array(12);
    crypto.getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return abc[b % abc.length]; }).join("");
  }

  function credsBox(label, email, password) {
    var text = email + "\n" + password;
    return '<div class="card creds"><div class="reply-label">' + ic("circle-check", 16) + esc(label) + "</div>" +
      '<div class="creds-row"><span class="muted small">' + t("email2") + "</span><b>" + esc(email) + "</b></div>" +
      '<div class="creds-row"><span class="muted small">' + t("password") + '</span><b class="mono">' + esc(password) + "</b></div>" +
      '<p class="muted small">' + t("credsNote") + "</p>" + shareButtons({ text: text, subject: "Bayan ng Montalban Staff Desk" }) + "</div>";
  }

  function staffCard(m) {
    var badges = (m.is_admin ? '<span class="pill st-answered">' + t("adminBadge") + "</span>" : "") +
      (m.me ? '<span class="pill">' + t("youBadge") + "</span>" : "");
    return '<li class="card staff" data-id="' + esc(m.user_id) + '"><div class="inq-head"><h3>' + esc(m.display_name) + '</h3><span class="badges">' + badges + "</span></div>" +
      '<div class="muted">' + esc(m.email) + "</div>" +
      '<div class="staff-edit"><select class="js-office" aria-label="' + t("officeAccess") + '">' +
      officeOptions(m.office_id || "", t("allOfficesOpt")) + "</select>" +
      '<label class="check"><input type="checkbox" class="js-admin"' + (m.is_admin ? " checked" : "") + (m.me ? " disabled" : "") + "> " + t("adminBadge") + "</label></div>" +
      '<div class="actions"><button type="button" class="btn small js-save">' + ic("check", 16) + t("save") + "</button>" +
      '<button type="button" class="btn ghost small js-reset">' + ic("lock", 16) + t("resetPw") + "</button>" +
      (m.me ? "" : '<button type="button" class="btn danger small js-remove">' + ic("trash-2", 16) + t("removeStaff") + "</button>") +
      "</div></li>";
  }

  function deskStaff() {
    var body = document.getElementById("desk-body");
    body.innerHTML = '<form id="staff-form" class="card form" novalidate><h3>' + t("addStaff") + "</h3>" +
      field(t("staffName"), '<input name="display_name" required minlength="2" maxlength="80" placeholder="Juan dela Cruz">', true) +
      field(t("email2"), '<input name="email" type="email" required autocomplete="off">', true) +
      field(t("tempPassword"), '<div class="pw-row"><input name="password" required minlength="8" maxlength="72" autocomplete="new-password" placeholder="' + t("pwRule") + '">' +
        '<button type="button" class="btn ghost small js-gen">' + ic("refresh-cw", 16) + t("generate") + "</button></div>", true) +
      field(t("officeAccess"), '<select name="office_id">' + officeOptions("", t("allOfficesOpt")) + "</select>") +
      '<label class="check"><input type="checkbox" name="is_admin"> ' + t("makeAdmin") + "</label>" +
      '<p id="form-error" class="error" role="alert" hidden></p>' +
      '<button class="btn wide" type="submit">' + ic("user-cog", 18) + t("createStaff") + "</button></form>" +
      '<div id="creds"></div><div class="section-label">' + t("staffList") + '</div><p id="staff-status" class="muted small"></p><ul class="list" id="staff-list"></ul>';

    var form = document.getElementById("staff-form");
    var err = document.getElementById("form-error");
    var list = document.getElementById("staff-list");
    var status = document.getElementById("staff-status");
    var creds = document.getElementById("creds");

    function showCreds(label, email, password) {
      creds.innerHTML = credsBox(label, email, password);
      wireShareButtons(creds, { text: email + "\n" + password, subject: "Bayan ng Montalban Staff Desk" });
      creds.scrollIntoView({ block: "center" });
    }
    function fail(ex) {
      if (ex.status === 401) return route();
      alert(ex.status ? ex.message : t("netError"));
    }
    function load() {
      status.textContent = "…";
      staffFn("list").then(function (d) {
        list.innerHTML = d.staff.map(staffCard).join("");
        status.textContent = d.staff.length + " " + t("tabStaff").toLowerCase();
      }).catch(function (ex) {
        if (ex.status === 401) return route();
        status.textContent = ex.status ? ex.message : t("netError");
      });
    }

    form.querySelector(".js-gen").addEventListener("click", function () { form.password.value = makePassword(); err.hidden = true; });
    form.addEventListener("input", function () { err.hidden = true; });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { err.textContent = t("fillRequired"); err.hidden = false; form.classList.add("touched"); return; }
      var btn = form.querySelector("button[type=submit]");
      var email = form.email.value.trim(), password = form.password.value;
      btn.disabled = true;
      staffFn("create", {
        display_name: form.display_name.value.trim(), email: email, password: password,
        office_id: form.office_id.value || null, is_admin: form.is_admin.checked
      }).then(function () {
        btn.disabled = false;
        form.reset();
        form.classList.remove("touched");
        showCreds(t("staffCreated"), email, password);
        load();
      }).catch(function (ex) {
        btn.disabled = false;
        if (ex.status === 401) return route();
        err.textContent = ex.status ? ex.message : t("netError");
        err.hidden = false;
      });
    });

    list.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      var li = b && b.closest("[data-id]");
      if (!li) return;
      var id = li.getAttribute("data-id");
      var email = li.querySelector(".muted").textContent;
      if (b.classList.contains("js-save")) {
        b.disabled = true;
        staffFn("update", { user_id: id, office_id: li.querySelector(".js-office").value || null, is_admin: li.querySelector(".js-admin").checked })
          .then(function () { b.disabled = false; b.innerHTML = ic("check", 16) + t("saved"); setTimeout(load, 900); })
          .catch(function (ex) { b.disabled = false; fail(ex); });
      } else if (b.classList.contains("js-reset")) {
        if (!confirm(t("resetConfirm"))) return;
        var pw = makePassword();
        staffFn("reset_password", { user_id: id, password: pw })
          .then(function () { showCreds(t("pwChanged"), email, pw); }).catch(fail);
      } else if (b.classList.contains("js-remove")) {
        if (!confirm(t("removeConfirm"))) return;
        staffFn("remove", { user_id: id }).then(load).catch(fail);
      }
    });
    load();
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
    if (s.length) html += '<div class="section-label">' + t("nav.services") + '</div><ul class="list">' + s.map(serviceResult).join("") + "</ul>";
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
    barangays: ["barangays", renderBarangays],
    places: ["places", renderPlaces]
  };

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var tab;
    if (parts[0] === "search" && parts[1]) {
      tab = "home";
      renderSearch(decodeURIComponent(parts[1]));
    } else if (parts[0] === "services") {
      tab = "services";
      renderServices(parts[1] && decodeURIComponent(parts[1]));
    } else if (parts[0] === "inquire") {
      tab = "inquire";
      renderInquire(parts[1], parts[2] && decodeURIComponent(parts[2]));
    } else if (parts[0] === "desk") {
      tab = "desk";
      renderDesk(parts[1]);
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

  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML = ic(el.getAttribute("data-icon"), 22);
  });

  // Soft shadow under the header once the page scrolls.
  var topbar = document.querySelector(".topbar");
  window.addEventListener("scroll", function () {
    topbar.classList.toggle("scrolled", window.scrollY > 4);
  }, { passive: true });

  updateStaffUi();
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
