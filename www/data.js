// Content for the Bayan ng Montalban app.
// Edit this file to update the app. Any `phone: null` means the official
// number has not been verified yet — the app shows "Idadagdag pa / To be added"
// instead of guessing. Please confirm details with the Municipal Hall.

window.APP_DATA = {
  town: {
    name: "Bayan ng Montalban",
    official: "Municipality of Rodriguez (Montalban), Rizal",
    // From the official "Bayan ng Montalban" Facebook page.
    address: "J.P. Rizal St., Brgy. Balite, Rodriguez (Montalban), Rizal 1860",
    website: "https://montalban.gov.ph",
    email: "montalbanpublicinformation@gmail.com",
    tagline: {
      fil: "Serbisyo at impormasyon ng bayan, abot-kamay.",
      en: "Town services and information, at your fingertips."
    }
  },

  hotlines: [
    { id: "911", group: "emergency", name: { fil: "Montalban Hotline 911 (Emergency)", en: "Montalban Hotline 911 (Emergency)" }, phone: "911", icon: "🚨" },
    { id: "8888", group: "emergency", name: { fil: "Citizens' Complaint Hotline", en: "Citizens' Complaint Hotline" }, phone: "8888", icon: "📣" },
    { id: "redcross", group: "emergency", name: { fil: "Philippine Red Cross", en: "Philippine Red Cross" }, phone: "143", icon: "➕" },
    { id: "mdrrmo", group: "local", name: { fil: "MDRRMO (Rescue / Kalamidad)", en: "MDRRMO (Rescue / Disaster)" }, phone: null, icon: "🛟" },
    { id: "pnp", group: "local", name: { fil: "Rodriguez Municipal Police Station", en: "Rodriguez Municipal Police Station" }, phone: null, icon: "👮" },
    { id: "bfp", group: "local", name: { fil: "Bureau of Fire Protection – Rodriguez", en: "Bureau of Fire Protection – Rodriguez" }, phone: null, icon: "🚒" },
    { id: "rhu", group: "local", name: { fil: "Rural Health Unit / Municipal Health Office", en: "Rural Health Unit / Municipal Health Office" }, phone: null, icon: "🏥" },
    { id: "mswdo", group: "local", name: { fil: "MSWDO (Social Welfare)", en: "MSWDO (Social Welfare)" }, phone: null, icon: "🤝" },
    { id: "townhall", group: "local", name: { fil: "Munisipyo (Trunkline)", en: "Municipal Hall (Trunkline)" }, phone: null, icon: "🏛️" }
  ],

  // Municipal offices. `hours` uses days 0=Sun … 6=Sat and 24h times in
  // Philippine time. "standard" = the Municipal Hall schedule below; give an
  // office its own array to override it. `room: null`
  // shows "To be added". `map` is a Google Maps search query.
  offices: [
    { id: "mayor", icon: "🏛️", name: { fil: "Tanggapan ng Mayor", en: "Office of the Mayor" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null },
    { id: "treasurer", icon: "💰", name: { fil: "Municipal Treasurer's Office", en: "Municipal Treasurer's Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Cedula, bayad sa amilyar at iba pang buwis", en: "Cedula, real property tax and other payments" } },
    { id: "assessor", icon: "📐", name: { fil: "Municipal Assessor's Office", en: "Municipal Assessor's Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Tax declaration ng lupa at bahay", en: "Tax declarations for land and buildings" } },
    { id: "civil-registrar", icon: "📜", name: { fil: "Municipal Civil Registrar", en: "Municipal Civil Registrar" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Birth, kasal at death certificate", en: "Birth, marriage and death certificates" } },
    { id: "bplo", icon: "🏪", name: { fil: "Business Permits and Licensing Office (BPLO)", en: "Business Permits and Licensing Office (BPLO)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null },
    { id: "engineering", icon: "🏗️", name: { fil: "Municipal Engineering Office", en: "Municipal Engineering Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null },
    { id: "mswdo", icon: "🤝", name: { fil: "MSWDO (Social Welfare)", en: "MSWDO (Social Welfare)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Solo parent, ayuda at iba pang tulong", en: "Solo parent, assistance and other aid" } },
    { id: "osca", icon: "👵", name: { fil: "OSCA (Office of Senior Citizens Affairs)", en: "OSCA (Office of Senior Citizens Affairs)" }, building: null, room: null, map: "OSCA Rodriguez Rizal", hours: "standard", phone: null },
    { id: "pdao", icon: "♿", name: { fil: "PDAO (Persons with Disability Affairs Office)", en: "PDAO (Persons with Disability Affairs Office)" }, building: null, room: null, map: "PDAO Rodriguez Rizal", hours: "standard", phone: null },
    { id: "rhu", icon: "🏥", name: { fil: "Rural Health Unit / Municipal Health Office", en: "Rural Health Unit / Municipal Health Office" }, building: null, room: null, map: "Rural Health Unit Rodriguez Rizal", hours: "standard", phone: null },
    { id: "mdrrmo", icon: "🛟", name: { fil: "MDRRMO (Rescue / Kalamidad)", en: "MDRRMO (Rescue / Disaster)" }, building: null, room: null, map: "MDRRMO Rodriguez Rizal", hours: "standard", phone: null,
      note: { fil: "Opisina lang ito. Sa emergency, tumawag sa 911.", en: "Office hours only. In an emergency, call 911." } }
  ],

  buildings: {
    townhall: {
      name: { fil: "Munisipyo ng Montalban", en: "Montalban Municipal Hall" },
      address: "J.P. Rizal St., Brgy. Balite, Rodriguez, Rizal 1860"
    }
  },

  // Municipal office hours (confirmed): Mon–Fri, 8:00 AM–5:00 PM.
  standardHours: [{ days: [1, 2, 3, 4, 5], open: "08:00", close: "17:00" }],

  services: [
    {
      id: "cedula",
      officeId: "treasurer",
      icon: "🪪",
      office: { fil: "Municipal Treasurer's Office", en: "Municipal Treasurer's Office" },
      name: { fil: "Cedula (Community Tax Certificate)", en: "Cedula (Community Tax Certificate)" },
      requirements: {
        fil: ["Valid ID", "Impormasyon ng kita o sahod (kung mayroon)"],
        en: ["Valid ID", "Income or salary information (if any)"]
      }
    },
    {
      id: "brgy-clearance",
      icon: "📄",
      office: { fil: "Barangay Hall ng inyong barangay", en: "Your Barangay Hall" },
      name: { fil: "Barangay Clearance", en: "Barangay Clearance" },
      requirements: {
        fil: ["Valid ID", "Cedula ng kasalukuyang taon", "Patunay ng paninirahan sa barangay"],
        en: ["Valid ID", "Current-year cedula", "Proof of residence in the barangay"]
      }
    },
    {
      id: "birth-cert",
      officeId: "civil-registrar",
      icon: "👶",
      office: { fil: "Municipal Civil Registrar", en: "Municipal Civil Registrar" },
      name: { fil: "Kopya ng Birth Certificate / Late Registration", en: "Birth Certificate Copy / Late Registration" },
      requirements: {
        fil: ["Valid ID ng humihiling", "Buong pangalan, petsa at lugar ng kapanganakan", "Authorization letter kung hindi ikaw ang may-ari ng record"],
        en: ["Requester's valid ID", "Full name, date and place of birth", "Authorization letter if you are not the record owner"]
      }
    },
    {
      id: "business-permit",
      officeId: "bplo",
      icon: "🏪",
      office: { fil: "Business Permits and Licensing Office (BPLO)", en: "Business Permits and Licensing Office (BPLO)" },
      name: { fil: "Business Permit (Bago o Renewal)", en: "Business Permit (New or Renewal)" },
      requirements: {
        fil: ["Application form", "DTI / SEC / CDA registration", "Barangay Business Clearance", "Kontrata ng upa o titulo ng lugar", "Cedula", "Nakaraang permit (para sa renewal)"],
        en: ["Application form", "DTI / SEC / CDA registration", "Barangay Business Clearance", "Lease contract or land title", "Cedula", "Previous permit (for renewal)"]
      }
    },
    {
      id: "building-permit",
      officeId: "engineering",
      icon: "🏗️",
      office: { fil: "Municipal Engineering Office", en: "Municipal Engineering Office" },
      name: { fil: "Building Permit", en: "Building Permit" },
      requirements: {
        fil: ["Application form", "Titulo o patunay ng pagmamay-ari ng lupa", "Mga plano na pirmado ng lisensyadong propesyonal", "Barangay Clearance", "Tax declaration at resibo ng amilyar"],
        en: ["Application form", "Land title or proof of ownership", "Plans signed by licensed professionals", "Barangay Clearance", "Tax declaration and real property tax receipt"]
      }
    },
    {
      id: "senior-id",
      officeId: "osca",
      icon: "👵",
      office: { fil: "OSCA (Office of Senior Citizens Affairs)", en: "OSCA (Office of Senior Citizens Affairs)" },
      name: { fil: "Senior Citizen ID", en: "Senior Citizen ID" },
      requirements: {
        fil: ["Birth certificate o anumang patunay ng edad (60 pataas)", "Patunay ng paninirahan", "1x1 o 2x2 na litrato"],
        en: ["Birth certificate or other proof of age (60+)", "Proof of residence", "1x1 or 2x2 photo"]
      }
    },
    {
      id: "pwd-id",
      officeId: "pdao",
      icon: "♿",
      office: { fil: "PDAO / MSWDO", en: "PDAO / MSWDO" },
      name: { fil: "PWD ID", en: "PWD ID" },
      requirements: {
        fil: ["Medical certificate o certificate of disability", "Patunay ng paninirahan", "1x1 na litrato", "Application form"],
        en: ["Medical certificate or certificate of disability", "Proof of residence", "1x1 photo", "Application form"]
      }
    },
    {
      id: "solo-parent",
      officeId: "mswdo",
      icon: "👨‍👧",
      office: { fil: "MSWDO", en: "MSWDO" },
      name: { fil: "Solo Parent ID", en: "Solo Parent ID" },
      requirements: {
        fil: ["Birth certificate ng (mga) anak", "Barangay certificate ng paninirahan", "Dokumentong nagpapatunay ng pagiging solo parent", "Application form"],
        en: ["Child(ren)'s birth certificate", "Barangay certificate of residency", "Document proving solo-parent status", "Application form"]
      }
    }
  ],

  // Where "Report a problem" sends reports. Leave null until the Municipal
  // Hall confirms an official channel; residents can still share or copy.
  report: {
    email: null,
    sms: null,
    categories: [
      { id: "road", icon: "🕳️", name: { fil: "Sirang kalsada / lubak", en: "Damaged road / pothole" } },
      { id: "flood", icon: "🌧️", name: { fil: "Baha / baradong kanal", en: "Flooding / clogged drainage" } },
      { id: "garbage", icon: "🗑️", name: { fil: "Basura na hindi nakokolekta", en: "Uncollected garbage" } },
      { id: "light", icon: "💡", name: { fil: "Patay na ilaw sa kalye", en: "Broken streetlight" } },
      { id: "water", icon: "🚰", name: { fil: "Tagas o problema sa tubig", en: "Water leak or supply problem" } },
      { id: "tree", icon: "🌳", name: { fil: "Natumbang puno / sanga", en: "Fallen tree / branch" } },
      { id: "noise", icon: "🔊", name: { fil: "Ingay / istorbo", en: "Noise / disturbance" } },
      { id: "other", icon: "❓", name: { fil: "Iba pa", en: "Other" } }
    ]
  },

  barangays: [
    "Balite (Poblacion)", "Burgos", "Geronimo", "Macabud", "Manggahan", "Mascap",
    "Puray", "Rosario", "San Isidro", "San Jose", "San Rafael"
  ],

  places: [
    {
      id: "wawa",
      icon: "🌊",
      name: "Wawa Dam",
      barangay: "San Rafael",
      desc: {
        fil: "Makasaysayang dam sa gitna ng Pamitinan at Binacayan — sikat na pasyalan at swimming spot.",
        en: "Historic dam between Mt. Pamitinan and Mt. Binacayan — a popular sightseeing and swimming spot."
      },
      map: "Wawa Dam, Rodriguez, Rizal"
    },
    {
      id: "pamitinan",
      icon: "⛰️",
      name: "Mt. Pamitinan",
      barangay: "San Rafael",
      desc: {
        fil: "Batong bundok na may tanaw sa Wawa Gorge. Kailangang magparehistro at kumuha ng guide.",
        en: "Limestone peak overlooking Wawa Gorge. Registration and a guide are required."
      },
      map: "Mount Pamitinan, Rodriguez, Rizal"
    },
    {
      id: "binacayan",
      icon: "🏔️",
      name: "Mt. Binacayan",
      barangay: "San Rafael",
      desc: {
        fil: "Kambal ng Pamitinan sa kabila ng ilog, kilala sa matatalim na batong tuktok.",
        en: "Pamitinan's twin across the river, known for its jagged limestone summit."
      },
      map: "Mount Binacayan, Rodriguez, Rizal"
    },
    {
      id: "hapunang-banoi",
      icon: "🧗",
      name: "Mt. Hapunang Banoi",
      barangay: "San Rafael",
      desc: {
        fil: "Isa sa mga paboritong bundok ng mga baguhang hiker malapit sa Wawa.",
        en: "A favorite climb for beginner hikers near Wawa."
      },
      map: "Mount Hapunang Banoi, Rodriguez, Rizal"
    },
    {
      id: "pamitinan-cave",
      icon: "🕳️",
      name: "Pamitinan Cave",
      barangay: "San Rafael",
      desc: {
        fil: "Makasaysayang kuweba na iniuugnay kay Andres Bonifacio at sa Katipunan.",
        en: "Historic cave associated with Andres Bonifacio and the Katipunan."
      },
      map: "Pamitinan Cave, Rodriguez, Rizal"
    }
  ],

  announcements: [
    {
      date: "2026-10-22",
      title: { fil: "Maligayang pagdating!", en: "Welcome!" },
      body: {
        fil: "Ito ang unang bersyon ng Bayan ng Montalban app. Ang mga numero at requirements ay patuloy na kinukumpirma sa Munisipyo.",
        en: "This is the first version of the Bayan ng Montalban app. Phone numbers and requirements are still being confirmed with the Municipal Hall."
      }
    }
  ]
};
