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
    email: "montalbanpublicinformation@gmail.com"
  },

  hotlines: [
    { id: "911", group: "emergency", name: { fil: "Montalban Hotline 911 (Emergency)", en: "Montalban Hotline 911 (Emergency)" }, phone: "911", icon: "siren" },
    { id: "8888", group: "emergency", name: { fil: "Citizens' Complaint Hotline", en: "Citizens' Complaint Hotline" }, phone: "8888", icon: "megaphone" },
    { id: "redcross", group: "emergency", name: { fil: "Philippine Red Cross", en: "Philippine Red Cross" }, phone: "143", icon: "cross" },
    { id: "mdrrmo", group: "local", name: { fil: "MDRRMO (Rescue / Kalamidad)", en: "MDRRMO (Rescue / Disaster)" }, phone: null, icon: "life-buoy" },
    { id: "pnp", group: "local", name: { fil: "Rodriguez Municipal Police Station", en: "Rodriguez Municipal Police Station" }, phone: null, icon: "shield" },
    { id: "bfp", group: "local", name: { fil: "Bureau of Fire Protection – Rodriguez", en: "Bureau of Fire Protection – Rodriguez" }, phone: null, icon: "flame" },
    { id: "rhu", group: "local", name: { fil: "Rural Health Unit / Municipal Health Office", en: "Rural Health Unit / Municipal Health Office" }, phone: null, icon: "hospital" },
    { id: "mswdo", group: "local", name: { fil: "MSWDO (Social Welfare)", en: "MSWDO (Social Welfare)" }, phone: null, icon: "hand-heart" },
    { id: "townhall", group: "local", name: { fil: "Munisipyo (Trunkline)", en: "Municipal Hall (Trunkline)" }, phone: null, icon: "landmark" }
  ],

  // Municipal offices. `hours` uses days 0=Sun … 6=Sat and 24h times in
  // Philippine time. "standard" = the Municipal Hall schedule below; give an
  // office its own array to override it. `room: null`
  // shows "To be added". `map` is a Google Maps search query.
  offices: [
    { id: "mayor", abbr: "MO", icon: "landmark", name: { fil: "Tanggapan ng Mayor", en: "Office of the Mayor" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Clearance, tulong at endorsement", en: "Clearances, assistance and endorsements" } },
    { id: "treasurer", abbr: "MTO", icon: "wallet", name: { fil: "Municipal Treasurer's Office", en: "Municipal Treasurer's Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Cedula, bayad sa amilyar at iba pang buwis", en: "Cedula, real property tax and other payments" } },
    { id: "assessor", abbr: "MAO", icon: "ruler", name: { fil: "Municipal Assessor's Office", en: "Municipal Assessor's Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Tax declaration ng lupa at bahay", en: "Tax declarations for land and buildings" } },
    { id: "civil-registrar", abbr: "MCR", icon: "scroll-text", name: { fil: "Municipal Civil Registrar", en: "Municipal Civil Registrar" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Birth, kasal at death certificate", en: "Birth, marriage and death certificates" } },
    { id: "bplo", abbr: "BPLO", icon: "store", name: { fil: "Business Permits and Licensing Office (BPLO)", en: "Business Permits and Licensing Office (BPLO)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Bagong negosyo at renewal", en: "New business and renewal" } },
    { id: "engineering", abbr: "MEO", icon: "hard-hat", name: { fil: "Municipal Engineering Office", en: "Municipal Engineering Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Building at occupancy permit", en: "Building and occupancy permits" } },
    { id: "mswdo", abbr: "MSWDO", icon: "hand-heart", name: { fil: "MSWDO (Social Welfare)", en: "MSWDO (Social Welfare)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "AICS, ayuda at Solo Parent ID", en: "AICS, assistance and Solo Parent ID" } },
    { id: "osca", abbr: "OSCA", icon: "user-round", name: { fil: "OSCA (Office of Senior Citizens Affairs)", en: "OSCA (Office of Senior Citizens Affairs)" }, building: null, room: null, map: "OSCA Rodriguez Rizal", hours: "standard", phone: null,
      note: { fil: "Senior Citizen ID at benepisyo", en: "Senior Citizen ID and benefits" } },
    { id: "pdao", abbr: "PDAO", icon: "accessibility", name: { fil: "PDAO (Persons with Disability Affairs Office)", en: "PDAO (Persons with Disability Affairs Office)" }, building: null, room: null, map: "PDAO Rodriguez Rizal", hours: "standard", phone: null,
      note: { fil: "PWD ID at benepisyo", en: "PWD ID and benefits" } },
    { id: "rhu", abbr: "MHO", icon: "hospital", name: { fil: "Rural Health Unit / Municipal Health Office", en: "Rural Health Unit / Municipal Health Office" }, building: null, room: null, map: "Rural Health Unit Rodriguez Rizal", hours: "standard", phone: null,
      note: { fil: "Konsulta, bakuna at health permit", en: "Consultations, vaccines and health permits" } },
    { id: "mdrrmo", abbr: "MDRRMO", icon: "life-buoy", name: { fil: "MDRRMO (Rescue / Kalamidad)", en: "MDRRMO (Rescue / Disaster)" }, building: null, room: null, map: "MDRRMO Rodriguez Rizal", hours: "standard", phone: null,
      note: { fil: "Rescue, evacuation at paghahanda sa kalamidad. Sa emergency, tumawag sa 911.", en: "Rescue, evacuation and disaster preparedness. In an emergency, call 911." } },
    { id: "mpdo", abbr: "MPDO", icon: "map", name: { fil: "Planning & Development / Zoning (MPDO)", en: "Planning & Development / Zoning (MPDO)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Locational clearance at paggamit ng lupa", en: "Locational clearance and land use" } },
    { id: "peso", abbr: "PESO", icon: "briefcase", name: { fil: "Public Employment Service Office (PESO)", en: "Public Employment Service Office (PESO)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Trabaho, job fair at SPES", en: "Jobs, job fairs and SPES" } },
    { id: "agri", abbr: "AGRI", icon: "sprout", name: { fil: "Municipal Agriculture Office", en: "Municipal Agriculture Office" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Magsasaka, mangingisda at hayop", en: "Farmers, fisherfolk and livestock" } },
    { id: "menro", abbr: "MENRO", icon: "leaf", name: { fil: "Environment & Natural Resources (MENRO)", en: "Environment & Natural Resources (MENRO)" }, building: "townhall", room: null, map: "Rodriguez Municipal Hall, J.P. Rizal, Balite, Rodriguez, Rizal", hours: "standard", phone: null,
      note: { fil: "Basura at mga isyung pangkalikasan", en: "Garbage collection and environmental concerns" } }
  ],

  buildings: {
    townhall: {
      name: { fil: "Munisipyo ng Montalban", en: "Montalban Municipal Hall" },
      address: "J.P. Rizal St., Brgy. Balite, Rodriguez, Rizal 1860"
    }
  },

  // Municipal office hours (confirmed): Mon–Fri, 8:00 AM–5:00 PM.
  standardHours: [{ days: [1, 2, 3, 4, 5], open: "08:00", close: "17:00" }],

  // Services grouped by office (officeId matches `offices` above, or
  // "barangay" for the Barangay Hall group in `serviceGroups`). Requirements
  // are the usual ones; offices may ask for more, so the app tells residents
  // to confirm first. Expanded from the "Montalban Serbisyo Hub" list.
  serviceGroups: [
    { id: "barangay", abbr: "BRGY", icon: "house-plus",
      name: { fil: "Barangay Hall", en: "Barangay Hall" },
      note: { fil: "Clearance at certificate mula sa inyong barangay", en: "Clearances and certificates from your barangay" },
      where: { fil: "Barangay Hall ng inyong barangay", en: "Your Barangay Hall" } }
  ],

  services: [
    // Office of the Mayor
    { id: "mayors-clearance", officeId: "mayor",
      name: { fil: "Mayor's Clearance", en: "Mayor's Clearance" },
      requirements: { fil: ["Barangay clearance", "Cedula (Community Tax Certificate)", "Valid ID"],
                      en: ["Barangay clearance", "Community Tax Certificate (cedula)", "Valid ID"] } },
    { id: "scholarship", officeId: "mayor",
      name: { fil: "Tulong pang-edukasyon / scholarship", en: "Educational / scholarship assistance" },
      requirements: { fil: ["Certificate of enrollment o registration", "Pinakabagong grades", "Barangay certificate of residency", "Valid ID ng estudyante o magulang"],
                      en: ["Certificate of enrollment or registration", "Latest grades", "Barangay certificate of residency", "Valid ID of student or parent"] } },
    { id: "endorsement", officeId: "mayor",
      name: { fil: "Endorsement o certification", en: "Request for endorsement or certification" },
      requirements: { fil: ["Sulat ng kahilingan (letter of request)", "Valid ID", "Mga kaugnay na dokumento"],
                      en: ["Letter of request", "Valid ID", "Supporting documents"] } },

    // Municipal Civil Registrar
    { id: "birth-reg", officeId: "civil-registrar",
      name: { fil: "Pagpaparehistro ng kapanganakan (on time o late)", en: "Registration of birth (timely or late)" },
      requirements: { fil: ["Certificate of Live Birth mula sa ospital o midwife", "Valid ID ng mga magulang", "Para sa late registration: mga patunay (baptismal, school records) at affidavit"],
                      en: ["Certificate of Live Birth from hospital or midwife", "Parents' valid IDs", "For late registration: supporting documents (baptismal, school records) and affidavit"] } },
    { id: "birth-cert", officeId: "civil-registrar",
      name: { fil: "Certified true copy ng birth, kasal o death record", en: "Certified true copy of birth, marriage or death record" },
      requirements: { fil: ["Request form", "Valid ID ng may-ari ng record o awtorisadong tao", "Authorization letter kung hindi ikaw ang may-ari"],
                      en: ["Request form", "Valid ID of owner or authorized person", "Authorization letter if not the owner"] } },
    { id: "marriage-license", officeId: "civil-registrar",
      name: { fil: "Aplikasyon ng marriage license", en: "Marriage license application" },
      requirements: { fil: ["Birth certificate ng magpapakasal", "CENOMAR", "Pre-marriage counseling certificate", "Valid ID", "Parental consent o advice kung kailangan"],
                      en: ["Birth certificates", "CENOMAR", "Pre-marriage counseling certificate", "Valid IDs", "Parental consent or advice if applicable"] } },
    { id: "clerical-error", officeId: "civil-registrar",
      name: { fil: "Pagtatama ng clerical error / pagpapalit ng first name (RA 9048 / 10172)", en: "Correction of clerical error / change of first name (RA 9048 / 10172)" },
      requirements: { fil: ["Petition form mula sa Civil Registrar", "Certified copy ng record na itatama", "Hindi bababa sa dalawang dokumentong nagpapakita ng tamang detalye", "Valid ID"],
                      en: ["Petition form from the Civil Registrar", "Certified copy of the record to be corrected", "At least two documents showing the correct entry", "Valid ID"] } },

    // BPLO
    { id: "business-permit", officeId: "bplo",
      name: { fil: "Bagong business permit", en: "New business permit" },
      requirements: { fil: ["Application form", "DTI, SEC o CDA registration", "Barangay business clearance", "Kontrata ng upa o patunay ng pagmamay-ari ng lugar", "Locational / zoning clearance", "Sanitary permit at fire safety inspection", "Cedula"],
                      en: ["Application form", "DTI, SEC or CDA registration", "Barangay business clearance", "Lease contract or proof of ownership of the place", "Locational / zoning clearance", "Sanitary permit and fire safety inspection", "Cedula"] } },
    { id: "business-renewal", officeId: "bplo",
      name: { fil: "Renewal ng business permit", en: "Business permit renewal" },
      requirements: { fil: ["Permit noong nakaraang taon", "Deklarasyon ng gross sales", "Barangay business clearance", "Updated na fire at sanitary requirements"],
                      en: ["Previous year's permit", "Gross sales declaration", "Barangay business clearance", "Updated fire and sanitary requirements"] } },
    { id: "business-closure", officeId: "bplo",
      name: { fil: "Pagsasara ng negosyo (retirement)", en: "Business retirement / closure" },
      requirements: { fil: ["Sulat ng kahilingan", "Orihinal na permit", "Affidavit of closure", "Barangay certification ng pagsasara"],
                      en: ["Letter of request", "Original permit", "Affidavit of closure", "Barangay certification of closure"] } },

    // Municipal Treasurer
    { id: "cedula", officeId: "treasurer",
      name: { fil: "Cedula (Community Tax Certificate)", en: "Community Tax Certificate (cedula)" },
      requirements: { fil: ["Valid ID", "Impormasyon ng kita (para sa computation)"],
                      en: ["Valid ID", "Income information (for computation)"] } },
    { id: "rpt-payment", officeId: "treasurer",
      name: { fil: "Pagbabayad ng amilyar (real property tax)", en: "Real property tax payment" },
      requirements: { fil: ["Tax declaration number o dating official receipt"],
                      en: ["Tax declaration number or previous official receipt"] } },
    { id: "transfer-tax", officeId: "treasurer",
      name: { fil: "Pagbabayad ng transfer tax", en: "Transfer tax payment" },
      requirements: { fil: ["Deed of sale / donation", "Tax declaration", "BIR Certificate Authorizing Registration (CAR)"],
                      en: ["Deed of sale / donation", "Tax declaration", "BIR certificate authorizing registration (CAR)"] } },

    // Municipal Assessor
    { id: "td-copy", officeId: "assessor",
      name: { fil: "Certified copy ng tax declaration", en: "Certified copy of tax declaration" },
      requirements: { fil: ["Request form", "Valid ID", "Authorization kung hindi ikaw ang may-ari"],
                      en: ["Request form", "Valid ID", "Authorization if not the owner"] } },
    { id: "td-transfer", officeId: "assessor",
      name: { fil: "Paglilipat ng tax declaration", en: "Transfer of tax declaration" },
      requirements: { fil: ["Deed of conveyance", "Titulo (TCT/CCT)", "CAR mula sa BIR", "Resibo ng transfer tax", "Real property tax clearance"],
                      en: ["Deed of conveyance", "Title (TCT/CCT)", "CAR from BIR", "Transfer tax receipt", "Real property tax clearance"] } },
    { id: "no-improvement", officeId: "assessor",
      name: { fil: "Certificate of no improvement / landholdings", en: "Certificate of no improvement / landholdings" },
      requirements: { fil: ["Request form", "Valid ID"], en: ["Request form", "Valid ID"] } },

    // MSWDO
    { id: "aics", officeId: "mswdo",
      name: { fil: "AICS (Tulong sa mga nasa krisis)", en: "Assistance to Individuals in Crisis Situation (AICS)" },
      requirements: { fil: ["Barangay certificate of indigency", "Valid ID", "Medical abstract, reseta, bill o death certificate depende sa kailangan"],
                      en: ["Barangay certificate of indigency", "Valid ID", "Medical abstract, prescription, bill or death certificate depending on need"] } },
    { id: "solo-parent", officeId: "mswdo",
      name: { fil: "Solo Parent ID", en: "Solo Parent ID" },
      requirements: { fil: ["Application form", "Barangay certificate", "Birth certificate ng (mga) anak", "Patunay ng pagiging solo parent (hal. death certificate ng asawa, desisyon ng korte, affidavit)"],
                      en: ["Application form", "Barangay certificate", "Birth certificate of child/children", "Proof of solo parent status (e.g., death certificate of spouse, court decision, affidavit)"] } },

    // OSCA
    { id: "senior-id", officeId: "osca",
      name: { fil: "Senior Citizen ID", en: "Senior Citizen ID" },
      requirements: { fil: ["Birth certificate o valid ID na nagpapakita ng edad 60 pataas", "1x1 na litrato", "Barangay certificate of residency"],
                      en: ["Birth certificate or valid ID showing age 60+", "1x1 photo", "Barangay certificate of residency"] } },

    // PDAO
    { id: "pwd-id", officeId: "pdao",
      name: { fil: "PWD ID", en: "PWD ID" },
      requirements: { fil: ["Medical certificate na nagsasaad ng kapansanan", "1x1 na litrato", "Barangay certificate of residency", "Valid ID"],
                      en: ["Medical certificate stating the disability", "1x1 photo", "Barangay certificate of residency", "Valid ID"] } },

    // Municipal Health Office
    { id: "consultation", officeId: "rhu",
      name: { fil: "Konsulta, prenatal at bakuna ng bata", en: "Consultation, prenatal and child immunization" },
      requirements: { fil: ["Health o immunization card kung mayroon", "PhilHealth details kung miyembro"],
                      en: ["Health or immunization card if available", "PhilHealth details if member"] } },
    { id: "health-cert", officeId: "rhu",
      name: { fil: "Health certificate (food handlers, manggagawa)", en: "Health certificate (food handlers, workers)" },
      requirements: { fil: ["Valid ID", "Kinakailangang lab results (hal. stool, chest X-ray)", "1x1 na litrato"],
                      en: ["Valid ID", "Required lab results (e.g., stool, chest X-ray)", "1x1 photo"] } },
    { id: "sanitary-permit", officeId: "rhu",
      name: { fil: "Sanitary permit para sa negosyo", en: "Sanitary permit for business" },
      requirements: { fil: ["Mga dokumento ng negosyo", "Health certificate ng mga empleyado", "Inspeksyon ng establisyimento"],
                      en: ["Business documents", "Health certificates of employees", "Inspection of the establishment"] } },
    { id: "tb-dots", officeId: "rhu",
      name: { fil: "TB-DOTS at iba pang programang pangkalusugan", en: "TB-DOTS and other public health programs" },
      requirements: { fil: ["Referral o dating records kung mayroon"], en: ["Referral or previous records if any"] } },

    // Municipal Engineering
    { id: "building-permit", officeId: "engineering",
      name: { fil: "Building permit", en: "Building permit" },
      requirements: { fil: ["Application forms na pirmado ng lisensyadong propesyonal", "Building plans", "Patunay ng pagmamay-ari ng lupa o pahintulot", "Locational / zoning clearance", "Barangay clearance", "Tax declaration at resibo ng amilyar"],
                      en: ["Application forms signed by licensed professionals", "Building plans", "Proof of land ownership or authority", "Locational / zoning clearance", "Barangay clearance", "Tax declaration and real property tax receipt"] } },
    { id: "occupancy", officeId: "engineering",
      name: { fil: "Certificate of occupancy", en: "Certificate of occupancy" },
      requirements: { fil: ["Building permit", "Certificate of completion", "As-built plans", "Fire safety inspection certificate"],
                      en: ["Building permit", "Certificate of completion", "As-built plans", "Fire safety inspection certificate"] } },
    { id: "fencing-permit", officeId: "engineering",
      name: { fil: "Permit sa bakod, paghuhukay o demolisyon", en: "Fencing, excavation or demolition permit" },
      requirements: { fil: ["Application form", "Mga plano", "Patunay ng pagmamay-ari"],
                      en: ["Application form", "Plans", "Proof of ownership"] } },

    // MPDO
    { id: "zoning-clearance", officeId: "mpdo",
      name: { fil: "Locational / zoning clearance", en: "Locational / zoning clearance" },
      requirements: { fil: ["Application form", "Vicinity map / lot plan", "Patunay ng pagmamay-ari o upa", "Tax declaration"],
                      en: ["Application form", "Vicinity map / lot plan", "Proof of ownership or lease", "Tax declaration"] } },
    { id: "zoning-cert", officeId: "mpdo",
      name: { fil: "Zoning certification", en: "Zoning certification" },
      requirements: { fil: ["Request letter", "Lot plan o tax declaration"], en: ["Request letter", "Lot plan or tax declaration"] } },

    // MDRRMO
    { id: "rescue", officeId: "mdrrmo",
      name: { fil: "Rescue at ambulansya", en: "Emergency rescue and ambulance request" },
      requirements: { fil: ["Tumawag sa 911 kapag emergency", "Eksaktong lokasyon, uri ng emergency, at ilan ang apektado"],
                      en: ["Call 911 for emergencies", "Exact location, nature of emergency, number of people affected"] } },
    { id: "evacuation-info", officeId: "mdrrmo",
      name: { fil: "Impormasyon sa evacuation, bagyo at baha", en: "Evacuation and typhoon/flood information" },
      requirements: { fil: ["Abangan ang mga Anunsyo para sa mga abiso"], en: ["Watch Announcements for advisories"] } },
    { id: "drr-training", officeId: "mdrrmo",
      name: { fil: "Disaster preparedness training para sa komunidad", en: "Community disaster preparedness training" },
      requirements: { fil: ["Sulat ng kahilingan mula sa barangay, paaralan o organisasyon"], en: ["Letter of request from barangay, school or organization"] } },

    // PESO
    { id: "job-referral", officeId: "peso",
      name: { fil: "Job referral at job fair registration", en: "Job referral and job fair registration" },
      requirements: { fil: ["Updated na resume", "Valid ID"], en: ["Updated resume", "Valid ID"] } },
    { id: "spes", officeId: "peso",
      name: { fil: "SPES (trabaho para sa mga estudyante)", en: "Special Program for Employment of Students (SPES)" },
      requirements: { fil: ["Birth certificate", "Certificate of enrollment o grades", "Barangay certificate of indigency o patunay ng kita"],
                      en: ["Birth certificate", "Certificate of enrollment or grades", "Barangay certificate of indigency or income proof"] } },

    // Municipal Agriculture
    { id: "rsbsa", officeId: "agri",
      name: { fil: "RSBSA registration (magsasaka at mangingisda)", en: "RSBSA registration (farmers and fisherfolk)" },
      requirements: { fil: ["Valid ID", "1x1 na litrato", "Patunay ng sakahan (tax declaration o certification)"],
                      en: ["Valid ID", "1x1 photo", "Proof of farm (tax declaration or certification)"] } },
    { id: "farm-inputs", officeId: "agri",
      name: { fil: "Binhi, punla at farm inputs", en: "Seeds, seedlings and farm inputs" },
      requirements: { fil: ["RSBSA registration"], en: ["RSBSA registration"] } },
    { id: "animal-vax", officeId: "agri",
      name: { fil: "Bakuna ng hayop (anti-rabies, livestock)", en: "Animal vaccination (anti-rabies, livestock)" },
      requirements: { fil: ["Dalhin ang hayop sa nakatakdang petsa", "Pangalan ng may-ari at barangay"],
                      en: ["Bring the animal on the scheduled date", "Owner's name and barangay"] } },

    // MENRO
    { id: "garbage-collection", officeId: "menro",
      name: { fil: "Schedule ng basura at hindi nakolektang basura", en: "Garbage collection schedule and missed collection" },
      requirements: { fil: ["Barangay at kalye", "Petsa ng hindi nakolektang basura"], en: ["Barangay and street", "Date of missed collection"] } },
    { id: "tree-cutting", officeId: "menro",
      name: { fil: "Pagputol ng puno / environmental clearance endorsement", en: "Tree cutting / environmental clearance endorsement" },
      requirements: { fil: ["Sulat ng kahilingan", "Lokasyon at mga litrato", "Endorsement ng barangay"],
                      en: ["Letter of request", "Location and photos", "Barangay endorsement"] } },
    { id: "illegal-dumping", officeId: "menro",
      name: { fil: "I-report ang illegal dumping, quarrying o pagsusunog", en: "Report illegal dumping, quarrying or burning" },
      requirements: { fil: ["Lokasyon", "Mga litrato kung ligtas kumuha", "Petsa at oras na nakita"],
                      en: ["Location", "Photos if safe to take", "Date and time observed"] } },

    // Barangay
    { id: "brgy-clearance", officeId: "barangay",
      name: { fil: "Barangay Clearance", en: "Barangay Clearance" },
      requirements: { fil: ["Valid ID", "Cedula ng kasalukuyang taon", "Patunay ng paninirahan sa barangay"],
                      en: ["Valid ID", "Current-year cedula", "Proof of residence in the barangay"] } }
  ],

  report: {
    email: null,
    sms: null,
    categories: [
      { id: "road", icon: "construction", name: { fil: "Sirang kalsada / lubak", en: "Damaged road / pothole" } },
      { id: "flood", icon: "cloud-rain", name: { fil: "Baha / baradong kanal", en: "Flooding / clogged drainage" } },
      { id: "garbage", icon: "trash-2", name: { fil: "Basura na hindi nakokolekta", en: "Uncollected garbage" } },
      { id: "light", icon: "lightbulb", name: { fil: "Patay na ilaw sa kalye", en: "Broken streetlight" } },
      { id: "water", icon: "droplets", name: { fil: "Tagas o problema sa tubig", en: "Water leak or supply problem" } },
      { id: "tree", icon: "tree-pine", name: { fil: "Natumbang puno / sanga", en: "Fallen tree / branch" } },
      { id: "noise", icon: "volume-2", name: { fil: "Ingay / istorbo", en: "Noise / disturbance" } },
      { id: "other", icon: "circle-help", name: { fil: "Iba pa", en: "Other" } }
    ]
  },

  barangays: [
    "Balite (Poblacion)", "Burgos", "Geronimo", "Macabud", "Manggahan", "Mascap",
    "Puray", "Rosario", "San Isidro", "San Jose", "San Rafael"
  ],

  places: [
    {
      id: "wawa",
      icon: "waves",
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
      icon: "mountain",
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
      icon: "mountain-snow",
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
      icon: "footprints",
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
      icon: "flashlight",
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
