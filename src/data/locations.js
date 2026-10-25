/**
 * Kerala Location Hierarchy & Search System for VeeduX
 * 
 * Scalable data structure:
 * State (Kerala) → District (14) → City / Town / Municipality → Locality / Ward
 * 
 * Supports seamless future expansion to other Indian states.
 */

export const STATE_INFO = {
  id: "kerala",
  name: "Kerala",
  malayalam: "കേരളം",
  country: "India",
  districtsCount: 14,
  tagline: "God's Own Country",
};

export const KERALA_DISTRICTS = [
  // 1. Thiruvananthapuram
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    popularName: "Trivandrum",
    malayalam: "തിരുവനന്തപുരം",
    headquarters: "Thiruvananthapuram",
    region: "South Kerala",
    description: "Capital city, Technopark IT hub, royal heritage and coastal beaches",
    cities: [
      {
        id: "trivandrum-city",
        name: "Thiruvananthapuram City",
        type: "Corporation",
        isPopular: true,
        tag: "Royal & Elite Center",
        localities: [
          { id: "kowdiar", name: "Kowdiar", tag: "Royal Palace & Posh Living" },
          { id: "sasthamangalam", name: "Sasthamangalam", tag: "Prime Residential" },
          { id: "vellayambalam", name: "Vellayambalam", tag: "City Center Corridor" },
          { id: "vazhuthacaud", name: "Vazhuthacaud", tag: "Cultural & Administrative Hub" },
          { id: "palayam", name: "Palayam", tag: "Secretariat & University Zone" },
          { id: "manacaud", name: "Manacaud", tag: "Heritage Residential" },
        ],
      },
      {
        id: "kazhakkoottam",
        name: "Kazhakkoottam",
        type: "Major Town",
        isPopular: true,
        tag: "Technopark IT Corridor",
        localities: [
          { id: "technopark-p1", name: "Technopark Phase 1 & 2", tag: "IT Hub" },
          { id: "technopark-p3", name: "Technopark Phase 3 / Taurus Downtown", tag: "Commercial Mall Zone" },
          { id: "karyavattom", name: "Karyavattom", tag: "University Campus & Green Belt" },
          { id: "menamkulam", name: "Menamkulam", tag: "Coastal Residential" },
          { id: "kulathoor", name: "Kulathoor", tag: "Bypass Tech Frontage" },
        ],
      },
      {
        id: "pattom",
        name: "Pattom",
        type: "Major Town",
        isPopular: true,
        tag: "Central Commercial & Residential",
        localities: [
          { id: "pattom-junction", name: "Pattom Junction", tag: "Commercial Center" },
          { id: "mar-ivanios", name: "Mar Ivanios Road", tag: "Educational Enclave" },
          { id: "plamoodu", name: "Plamoodu", tag: "Residential Plots" },
        ],
      },
      {
        id: "sreekaryam",
        name: "Sreekaryam",
        type: "Major Town",
        isPopular: true,
        tag: "CET College & NH Bypass",
        localities: [
          { id: "cet-junction", name: "CET Junction", tag: "Engineering Hub" },
          { id: "chavadimukku", name: "Chavadimukku", tag: "Bypass Access" },
          { id: "pangappara", name: "Pangappara", tag: "Peaceful Villas" },
        ],
      },
      {
        id: "kovalam",
        name: "Kovalam",
        type: "Town",
        isPopular: true,
        tag: "International Beach & Resort Zone",
        localities: [
          { id: "lighthouse-beach", name: "Lighthouse Beach", tag: "Tourism Frontage" },
          { id: "samudra-beach", name: "Samudra Beach", tag: "Luxury Resort Belt" },
          { id: "vellar", name: "Vellar", tag: "Crafts Village & Hills" },
        ],
      },
      {
        id: "varkala",
        name: "Varkala",
        type: "Municipality",
        isPopular: false,
        tag: "Cliff Coast & Tourism",
        localities: [
          { id: "north-cliff", name: "North Cliff", tag: "Cliff Top Properties" },
          { id: "papanasam", name: "Papanasam Beach", tag: "Heritage Coastal" },
        ],
      },
      {
        id: "neyyattinkara",
        name: "Neyyattinkara",
        type: "Municipality",
        isPopular: false,
        tag: "Southern Growth Center",
        localities: [
          { id: "amaravila", name: "Amaravila", tag: "Highway Frontage" },
          { id: "balaramapuram", name: "Balaramapuram", tag: "Handloom Town" },
        ],
      },
    ],
    // Flattened localities list for backward compatibility
    localities: [
      { id: "kazhakoottam", name: "Kazhakkoottam", popular: true, tag: "Technopark Phase 1-3" },
      { id: "kowdiar", name: "Kowdiar", popular: true, tag: "Royal & Luxury Residential" },
      { id: "pattom", name: "Pattom", popular: true, tag: "Commercial Center" },
      { id: "sreekaryam", name: "Sreekaryam", popular: true, tag: "CET & NH Bypass" },
      { id: "sasthamangalam", name: "Sasthamangalam", popular: true, tag: "Prime Residential" },
      { id: "vellayambalam", name: "Vellayambalam", popular: false, tag: "City Center" },
      { id: "kovalam", name: "Kovalam", popular: true, tag: "Coastal Resort Zone" },
      { id: "varkala", name: "Varkala", popular: false, tag: "Cliff Beach Town" },
    ],
  },

  // 2. Kollam
  {
    id: "kollam",
    name: "Kollam",
    popularName: "Quilon (Cashew City)",
    malayalam: "കൊല്ലം",
    headquarters: "Kollam",
    region: "South Kerala",
    description: "Ashtamudi Lake backwaters, port city, and cashew trade center",
    cities: [
      {
        id: "kollam-city",
        name: "Kollam City",
        type: "Corporation",
        isPopular: true,
        tag: "Port & Commercial Hub",
        localities: [
          { id: "ashtamudi", name: "Ashtamudi Lakefront", tag: "Luxury Waterfront" },
          { id: "chinnakada", name: "Chinnakada Clock Tower", tag: "Commercial Center" },
          { id: "kadappakkada", name: "Kadappakkada", tag: "Prime Residential" },
          { id: "tangasseri", name: "Tangasseri", tag: "Historic Lighthouse Coast" },
          { id: "polayathode", name: "Polayathode", tag: "Bypass Junction" },
        ],
      },
      {
        id: "kavanad",
        name: "Kavanad",
        type: "Town",
        isPopular: true,
        tag: "Highway Bypass & Lake Frontage",
        localities: [
          { id: "sakthikulangara", name: "Sakthikulangara", tag: "Harbor & Commercial" },
          { id: "meenathu", name: "Meenathu", tag: "Waterfront Villas" },
        ],
      },
      {
        id: "karunagappally",
        name: "Karunagappally",
        type: "Municipality",
        isPopular: false,
        tag: "Northern Commercial Hub",
        localities: [
          { id: "puthiyakavu", name: "Puthiyakavu", tag: "Commercial Junction" },
          { id: "maruthorvattom", name: "Maruthorvattom", tag: "Residential Plots" },
        ],
      },
      {
        id: "kottarakkara",
        name: "Kottarakkara",
        type: "Municipality",
        isPopular: false,
        tag: "Kathakali Heritage Center",
        localities: [
          { id: "pulamon", name: "Pulamon", tag: "Town Center" },
          { id: "valakom", name: "Valakom", tag: "MC Road Access" },
        ],
      },
    ],
    localities: [
      { id: "ashtamudi", name: "Ashtamudi", popular: true, tag: "Lakefront Luxury" },
      { id: "chinnakada", name: "Chinnakada", popular: true, tag: "Commercial Clock Tower" },
      { id: "kavanad", name: "Kavanad", popular: false, tag: "Highway Bypass" },
      { id: "kadappakkada", name: "Kadappakkada", popular: false, tag: "Residential" },
      { id: "kottarakkara", name: "Kottarakkara", popular: false, tag: "MC Road Hub" },
    ],
  },

  // 3. Pathanamthitta
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    popularName: "Pathanamthitta (Pilgrim Hub)",
    malayalam: "പത്തനംതിട്ട",
    headquarters: "Pathanamthitta",
    region: "South Kerala",
    description: "NRI hub, serene rubber plantations, riverfront lands, and Sabarimala gateway",
    cities: [
      {
        id: "thiruvalla",
        name: "Thiruvalla",
        type: "Municipality",
        isPopular: true,
        tag: "Major NRI Hub & Healthcare City",
        localities: [
          { id: "cross-junction", name: "Cross Junction", tag: "Commercial Heart" },
          { id: "pushpagiri", name: "Pushpagiri Area", tag: "Medical Enclave" },
          { id: "kuttoor", name: "Kuttoor", tag: "Peaceful Villas" },
          { id: "kavumbhagom", name: "Kavumbhagom", tag: "Residential Plots" },
          { id: "manjadi", name: "Manjadi", tag: "Highway Frontage" },
        ],
      },
      {
        id: "adoor",
        name: "Adoor",
        type: "Municipality",
        isPopular: true,
        tag: "MC Road Fast Growth Hub",
        localities: [
          { id: "central-junction", name: "Central Junction", tag: "Shopping & Transit" },
          { id: "revenue-tower", name: "Revenue Tower Zone", tag: "Administrative" },
          { id: "parakode", name: "Parakode", tag: "Wholesale Market" },
        ],
      },
      {
        id: "pathanamthitta-town",
        name: "Pathanamthitta Town",
        type: "Municipality",
        isPopular: false,
        tag: "District Capital",
        localities: [
          { id: "aban-junction", name: "Aban Junction", tag: "City Core" },
          { id: "kumbazha", name: "Kumbazha", tag: "Riverview Residential" },
        ],
      },
      {
        id: "kozhencherry",
        name: "Kozhencherry",
        type: "Major Town",
        isPopular: false,
        tag: "Pamba Riverside & Maramon",
        localities: [
          { id: "thekkemala", name: "Thekkemala", tag: "Scenic Countryside" },
          { id: "cherukolpuzha", name: "Cherukolpuzha", tag: "Riverfront Land" },
        ],
      },
      {
        id: "ranni",
        name: "Ranni",
        type: "Major Town",
        isPopular: false,
        tag: "Rubber Plantation Belt",
        localities: [
          { id: "pazhavangadi", name: "Pazhavangadi", tag: "Town Center" },
          { id: "ittichuvadu", name: "Ittichuvadu", tag: "Rubber Estate Plots" },
        ],
      },
    ],
    localities: [
      { id: "thiruvalla", name: "Thiruvalla", popular: true, tag: "NRI Hub & Medical City" },
      { id: "adoor", name: "Adoor", popular: true, tag: "MC Road Junction" },
      { id: "kozhencherry", name: "Kozhencherry", popular: false, tag: "Pamba Riverside" },
      { id: "ranni", name: "Ranni", popular: false, tag: "Rubber Plantation Land" },
    ],
  },

  // 4. Alappuzha
  {
    id: "alappuzha",
    name: "Alappuzha",
    popularName: "Alleppey (Venice of the East)",
    malayalam: "ആലപ്പുഴ",
    headquarters: "Alappuzha",
    region: "South-Central Kerala",
    description: "Vembanad backwaters, houseboats, heritage villas, and NH 66 corridor",
    cities: [
      {
        id: "alappuzha-city",
        name: "Alappuzha City",
        type: "Municipality",
        isPopular: true,
        tag: "Backwater Capital & Beach Town",
        localities: [
          { id: "punnamada", name: "Punnamada Finishing Point", tag: "Waterfront & Houseboat Frontage" },
          { id: "beach-road", name: "Alappuzha Beach Road", tag: "Heritage Coastal Promenade" },
          { id: "thiruvampady", name: "Thiruvampady", tag: "Prime Residential" },
          { id: "mullakkal", name: "Mullakkal", tag: "Commercial Core" },
        ],
      },
      {
        id: "cherthala",
        name: "Cherthala",
        type: "Municipality",
        isPopular: true,
        tag: "Kochi Industrial Corridor & Infopark",
        localities: [
          { id: "cherthala-bypass", name: "NH 66 Bypass", tag: "High-Speed Commercial" },
          { id: "infopark-cherthala", name: "Infopark Pallipuram", tag: "IT Corridors" },
          { id: "poochakkal", name: "Poochakkal", tag: "Backwater Countryside" },
        ],
      },
      {
        id: "kayamkulam",
        name: "Kayamkulam",
        type: "Municipality",
        isPopular: false,
        tag: "Highway Junction & Thermal Zone",
        localities: [
          { id: "krishnapuram", name: "Krishnapuram Palace Zone", tag: "Heritage Plots" },
          { id: "kayamkulam-lake", name: "Kayamkulam Lakefront", tag: "Lakeview Properties" },
        ],
      },
      {
        id: "ambalapuzha",
        name: "Ambalapuzha",
        type: "Town",
        isPopular: false,
        tag: "Temple Town & Heritage Coast",
        localities: [
          { id: "ambalapuzha-east", name: "Temple East Nada", tag: "Traditional Residential" },
          { id: "purakkad", name: "Purakkad", tag: "Coastal Fishery Land" },
        ],
      },
    ],
    localities: [
      { id: "punnamada", name: "Punnamada", popular: true, tag: "Backwater Frontage" },
      { id: "cherthala", name: "Cherthala", popular: true, tag: "NH 66 & Infopark" },
      { id: "thiruvampady", name: "Thiruvampady", popular: false, tag: "Town Center" },
      { id: "kayamkulam", name: "Kayamkulam", popular: false, tag: "Highway Junction" },
      { id: "ambalapuzha", name: "Ambalapuzha", popular: false, tag: "Heritage Coastal" },
    ],
  },

  // 5. Kottayam
  {
    id: "kottayam",
    name: "Kottayam",
    popularName: "Kottayam (Land of Letters & Lakes)",
    malayalam: "കോട്ടയം",
    headquarters: "Kottayam",
    region: "Central Kerala",
    description: "Educational hub, publishing legacy, scenic plantations, and Vembanad lakefront",
    cities: [
      {
        id: "kottayam-town",
        name: "Kottayam Town",
        type: "Municipality",
        isPopular: true,
        tag: "Commercial & Publishing Capital",
        localities: [
          { id: "kanjikuzhy", name: "Kanjikuzhy", tag: "Ultra-Posh Residential Area" },
          { id: "devalokam", name: "Devalokam", tag: "Bishops Palace & Elite Villas" },
          { id: "collectorate-area", name: "Collectorate / Civil Station", tag: "Administrative Core" },
          { id: "nagampadam", name: "Nagampadam", tag: "Stadium & Railway Hub" },
        ],
      },
      {
        id: "kumarakom",
        name: "Kumarakom",
        type: "Major Town",
        isPopular: true,
        tag: "World Famous Vembanad Resort Zone",
        localities: [
          { id: "lakefront-kumarakom", name: "Lakefront Resorts Belt", tag: "Luxury Hospitality" },
          { id: "kavanattinkara", name: "Kavanattinkara", tag: "Waterfront Plots" },
        ],
      },
      {
        id: "changanassery",
        name: "Changanassery",
        type: "Municipality",
        isPopular: false,
        tag: "Trading Center & Educational Hub",
        localities: [
          { id: "perunna", name: "Perunna", tag: "NSS HQ & Residential" },
          { id: "sb-college-area", name: "SB College Zone", tag: "Student Center" },
        ],
      },
      {
        id: "pala",
        name: "Pala",
        type: "Municipality",
        isPopular: false,
        tag: "Meenachil Riverfront & Plantations",
        localities: [
          { id: "lalam", name: "Lalam", tag: "Town Core" },
          { id: "puliyannoor", name: "Puliyannoor", tag: "Estate Plots" },
        ],
      },
      {
        id: "ettumanoor",
        name: "Ettumanoor",
        type: "Municipality",
        isPopular: false,
        tag: "Temple Town & MC Road Bypass",
        localities: [
          { id: "ettumanoor-bypass", name: "Bypass Corridor", tag: "Commercial Showrooms" },
          { id: "athirampuzha", name: "Athirampuzha (MG University)", tag: "Campus Vicinity" },
        ],
      },
    ],
    localities: [
      { id: "kanjikuzhy", name: "Kanjikuzhy", popular: true, tag: "High-End Residential" },
      { id: "kumarakom", name: "Kumarakom", popular: true, tag: "Vembanad Lakefront" },
      { id: "changanassery", name: "Changanassery", popular: true, tag: "Bustling Town" },
      { id: "pala", name: "Pala", popular: true, tag: "Estate & Residential Plots" },
      { id: "ettumanoor", name: "Ettumanoor", popular: false, tag: "Temple Town & Bypass" },
    ],
  },

  // 6. Idukki
  {
    id: "idukki",
    name: "Idukki",
    popularName: "Idukki (Spice Hills & Valleys)",
    malayalam: "ഇടുക്കി",
    headquarters: "Painavu",
    region: "Highlands",
    description: "Cardamom hills, tea estates, cool climate hill stations, and eco-resort acreage",
    cities: [
      {
        id: "munnar",
        name: "Munnar",
        type: "Special Zone",
        isPopular: true,
        tag: "Premier Hill Station & Tea Plantations",
        localities: [
          { id: "old-munnar", name: "Old Munnar Town", tag: "Commercial & Tourism Core" },
          { id: "pallivasal", name: "Pallivasal", tag: "Scenic Viewpoint Villas" },
          { id: "devikulam", name: "Devikulam", tag: "Misty Lake & Plantation Estates" },
          { id: "chinnakanal", name: "Chinnakanal", tag: "Anayirankal Dam Resorts" },
        ],
      },
      {
        id: "thodupuzha",
        name: "Thodupuzha",
        type: "Municipality",
        isPopular: true,
        tag: "Fast Developing Gateway City",
        localities: [
          { id: "mangattukavala", name: "Mangattukavala", tag: "Commercial Junction" },
          { id: "vengalloor", name: "Vengalloor", tag: "Prime Residential Plots" },
          { id: "muthalakodam", name: "Muthalakodam", tag: "Suburban Villas" },
        ],
      },
      {
        id: "kattappana",
        name: "Kattappana",
        type: "Municipality",
        isPopular: false,
        tag: "Cardamom & Spices Capital",
        localities: [
          { id: "tb-junction", name: "TB Junction", tag: "City Core" },
          { id: "puliyanmala", name: "Puliyanmala", tag: "Spice Estate Land" },
        ],
      },
      {
        id: "kumily",
        name: "Kumily (Thekkady)",
        type: "Town",
        isPopular: false,
        tag: "Periyar Tiger Reserve Gateway",
        localities: [
          { id: "thekkady-road", name: "Thekkady Lake Road", tag: "Tourism Frontage" },
          { id: "anakkara", name: "Anakkara", tag: "Spice Tourism Homestays" },
        ],
      },
    ],
    localities: [
      { id: "munnar", name: "Munnar", popular: true, tag: "Tea Hill Station" },
      { id: "thodupuzha", name: "Thodupuzha", popular: true, tag: "Fast Developing Gateway" },
      { id: "kattappana", name: "Kattappana", popular: false, tag: "Cardamom Capital" },
      { id: "kumily", name: "Kumily (Thekkady)", popular: false, tag: "Tourism Hub" },
    ],
  },

  // 7. Ernakulam
  {
    id: "ernakulam",
    name: "Ernakulam",
    popularName: "Kochi / Ernakulam",
    malayalam: "എറണാകുളം",
    headquarters: "Kakkanad",
    region: "Central Kerala",
    description: "Kerala's commercial capital, Kochi metro, IT SmartCity, seaport, and luxury high-rises",
    cities: [
      {
        id: "kochi",
        name: "Kochi City",
        type: "Corporation",
        isPopular: true,
        tag: "Commercial & Waterfront Metro",
        localities: [
          { id: "marine-drive", name: "Marine Drive", tag: "Ultra-Luxury Promenade" },
          { id: "panampilly-nagar", name: "Panampilly Nagar", tag: "Boutique & Posh Residential" },
          { id: "kadavanthra", name: "Kadavanthra", tag: "Central Metro Hub" },
          { id: "fort-kochi", name: "Fort Kochi", tag: "Colonial Heritage Coast" },
          { id: "kaloor", name: "Kaloor", tag: "Stadium & City Center" },
          { id: "palarivattom", name: "Palarivattom", tag: "Bypass Junction & Metro" },
          { id: "mg-road", name: "MG Road & Ravipuram", tag: "Prime Commercial Core" },
          { id: "thevara", name: "Thevara", tag: "Waterfront Apartments" },
        ],
      },
      {
        id: "kakkanad",
        name: "Kakkanad",
        type: "Major Town",
        isPopular: true,
        tag: "Infopark & SmartCity IT Hub",
        localities: [
          { id: "infopark", name: "Infopark Phase 1 & 2", tag: "IT Corridor" },
          { id: "smartcity", name: "SmartCity Kochi", tag: "Global Business Parks" },
          { id: "chittethukara", name: "Chittethukara", tag: "Apartments & Gated Villas" },
          { id: "edachira", name: "Edachira", tag: "Techie Living Zone" },
          { id: "vazhakkala", name: "Vazhakkala", tag: "Residential Suburb" },
          { id: "kusumagiri", name: "Kusumagiri", tag: "Quiet Villa Enclaves" },
        ],
      },
      {
        id: "edappally",
        name: "Edappally",
        type: "Major Town",
        isPopular: true,
        tag: "Lulu Mall & Metro Junction",
        localities: [
          { id: "edappally-toll", name: "Toll Junction & Lulu Mall", tag: "Retail Center" },
          { id: "ponekkara", name: "Ponekkara", tag: "Amrita Hospital Vicinity" },
          { id: "unichira", name: "Unichira", tag: "Infopark Link Road" },
        ],
      },
      {
        id: "aluva",
        name: "Aluva",
        type: "Municipality",
        isPopular: true,
        tag: "Periyar Riverfront & Metro Terminal",
        localities: [
          { id: "bank-junction", name: "Bank Junction", tag: "Town Center" },
          { id: "periyar-frontage", name: "Periyar River Frontage", tag: "Scenic Waterfront Homes" },
          { id: "thottakkattukara", name: "Thottakkattukara", tag: "Residential" },
          { id: "choornikkara", name: "Choornikkara", tag: "Metro Corridor" },
        ],
      },
      {
        id: "vyttila",
        name: "Vyttila",
        type: "Major Town",
        isPopular: true,
        tag: "Kerala's Largest Mobility Hub",
        localities: [
          { id: "mobility-hub", name: "Mobility Hub & Metro", tag: "Transit Core" },
          { id: "ponnurunni", name: "Ponnurunni", tag: "Peaceful Residential" },
          { id: "chalikkavattom", name: "Chalikkavattom", tag: "Bypass Frontage" },
          { id: "toc-h", name: "TOC-H School Road", tag: "Family Living" },
        ],
      },
      {
        id: "kalamassery",
        name: "Kalamassery",
        type: "Municipality",
        isPopular: true,
        tag: "CUSAT University & Industrial Center",
        localities: [
          { id: "cusat", name: "CUSAT Campus Area", tag: "Student & Faculty Enclave" },
          { id: "premier-junction", name: "Premier Junction", tag: "Commercial" },
          { id: "container-road", name: "Container Terminal Road", tag: "High-Growth Corridors" },
        ],
      },
      {
        id: "thrippunithura",
        name: "Thrippunithura",
        type: "Municipality",
        isPopular: true,
        tag: "Royal Palace Town & Metro Link",
        localities: [
          { id: "statue-junction", name: "Statue Junction", tag: "Commercial Center" },
          { id: "hill-palace", name: "Hill Palace Area", tag: "Green Heritage Enclave" },
          { id: "karingachira", name: "Karingachira", tag: "Residential Hub" },
        ],
      },
      {
        id: "maradu",
        name: "Maradu",
        type: "Municipality",
        isPopular: true,
        tag: "NH Bypass, Luxury Hotels & Waterfront",
        localities: [
          { id: "kundannoor", name: "Kundannoor Junction", tag: "NH 66 Flyover Zone" },
          { id: "nettoor", name: "Nettoor", tag: "Lakeside Properties" },
          { id: "madavana", name: "Madavana Junction", tag: "Panangad Road" },
        ],
      },
      {
        id: "perumbavoor",
        name: "Perumbavoor",
        type: "Municipality",
        isPopular: false,
        tag: "Eastern Commercial & Timber Town",
        localities: [
          { id: "marampilly", name: "Marampilly", tag: "Riverview Plots" },
          { id: "kuruppampady", name: "Kuruppampady", tag: "Suburban Plots" },
        ],
      },
      {
        id: "angamaly",
        name: "Angamaly",
        type: "Municipality",
        isPopular: false,
        tag: "Cochin International Airport Gateway",
        localities: [
          { id: "airport-road", name: "Airport Road Enclave", tag: "NRI Preferred Villas" },
          { id: "telk", name: "TELK Industrial Zone", tag: "Commercial Plots" },
        ],
      },
    ],
    localities: [
      { id: "kakkanad", name: "Kakkanad", popular: true, tag: "IT & SmartCity Hub" },
      { id: "kochi", name: "Kochi City", popular: true, tag: "Commercial & Waterfront" },
      { id: "edappally", name: "Edappally", popular: true, tag: "Lulu Mall & Metro" },
      { id: "aluva", name: "Aluva", popular: true, tag: "Metro & Riverfront" },
      { id: "vyttila", name: "Vyttila", popular: true, tag: "Mobility Hub" },
      { id: "kalamassery", name: "Kalamassery", popular: true, tag: "CUSAT & Metro" },
      { id: "thrippunithura", name: "Thrippunithura", popular: true, tag: "Heritage & Metro" },
      { id: "maradu", name: "Maradu", popular: true, tag: "Bypass & Kundannoor" },
      { id: "marine-drive", name: "Marine Drive", popular: true, tag: "Luxury Promenade" },
      { id: "panampilly-nagar", name: "Panampilly Nagar", popular: true, tag: "Posh Residential" },
      { id: "palarivattom", name: "Palarivattom", popular: false, tag: "Bypass Junction" },
      { id: "perumbavoor", name: "Perumbavoor", popular: false, tag: "Suburban Plots" },
    ],
  },

  // 8. Thrissur
  {
    id: "thrissur",
    name: "Thrissur",
    popularName: "Thrissur (Cultural Capital)",
    malayalam: "തൃശ്ശൂർ",
    headquarters: "Thrissur",
    region: "Central Kerala",
    description: "Cultural capital, Pooram festival, gold jewelry market, and elite villas",
    cities: [
      {
        id: "thrissur-city",
        name: "Thrissur City",
        type: "Corporation",
        isPopular: true,
        tag: "Cultural & Financial Core",
        localities: [
          { id: "swaraj-round", name: "Swaraj Round", tag: "City Epicenter" },
          { id: "punkunnam", name: "Punkunnam", tag: "Posh Gated Villas & Apartments" },
          { id: "east-fort", name: "East Fort", tag: "Shopping & Residential" },
          { id: "ayyanthole", name: "Ayyanthole", tag: "Collectorate & Civil Station" },
          { id: "ollur", name: "Ollur", tag: "Industrial & Modern Villas" },
        ],
      },
      {
        id: "guruvayur",
        name: "Guruvayur",
        type: "Municipality",
        isPopular: true,
        tag: "Major Temple Town & Pilgrimage Homes",
        localities: [
          { id: "west-nada", name: "West Nada", tag: "Premium Hospitality & Apartments" },
          { id: "east-nada", name: "East Nada", tag: "Commercial & Lodges" },
          { id: "mammiyoor", name: "Mammiyoor", tag: "Quiet Residential Enclave" },
        ],
      },
      {
        id: "kunnamkulam",
        name: "Kunnamkulam",
        type: "Municipality",
        isPopular: true,
        tag: "Commercial Printing & Trade Hub",
        localities: [
          { id: "town-center", name: "Kunnamkulam Town Center", tag: "Retail Center" },
          { id: "kizhoor", name: "Kizhoor", tag: "Suburban Plots" },
          { id: "arthat", name: "Arthat", tag: "Heritage Church Belt" },
        ],
      },
      {
        id: "chalakudy",
        name: "Chalakudy",
        type: "Municipality",
        isPopular: false,
        tag: "Athirappilly Gateway & Highway Frontage",
        localities: [
          { id: "chalakudy-junction", name: "South Junction", tag: "NH 544 Commercial" },
          { id: "potta", name: "Potta", tag: "Spiritual Center & Plots" },
        ],
      },
      {
        id: "irinjalakuda",
        name: "Irinjalakuda",
        type: "Municipality",
        isPopular: false,
        tag: "Cultural Town & Educational Hub",
        localities: [
          { id: "koodalmanikyam", name: "Temple Road", tag: "Heritage Residential" },
          { id: "tana", name: "Tana Junction", tag: "Commercial Core" },
        ],
      },
    ],
    localities: [
      { id: "punkunnam", name: "Punkunnam", popular: true, tag: "Prime Villas & Flats" },
      { id: "guruvayur", name: "Guruvayur", popular: true, tag: "Temple Town Apartments" },
      { id: "kunnamkulam", name: "Kunnamkulam", popular: true, tag: "Commercial Hub" },
      { id: "east-fort", name: "East Fort", popular: true, tag: "Central Hub" },
      { id: "ayyanthole", name: "Ayyanthole", popular: true, tag: "Civil Station Area" },
      { id: "chalakudy", name: "Chalakudy", popular: false, tag: "Highway Frontage" },
      { id: "irinjalakuda", name: "Irinjalakuda", popular: false, tag: "Cultural Town" },
    ],
  },

  // 9. Palakkad
  {
    id: "palakkad",
    name: "Palakkad",
    popularName: "Palakkad (Gateway of Kerala)",
    malayalam: "പാലക്കാട്",
    headquarters: "Palakkad",
    region: "Central Kerala",
    description: "Palakkad gap gateway, windmill hills, historic agraharams, and industrial corridors",
    cities: [
      {
        id: "palakkad-town",
        name: "Palakkad Town",
        type: "Municipality",
        isPopular: true,
        tag: "Gateway Center & Fort Zone",
        localities: [
          { id: "chandranagar", name: "Chandranagar Colony", tag: "Most Posh Residential Enclave" },
          { id: "kalpathy", name: "Kalpathy Heritage Village", tag: "Historic Agraharam" },
          { id: "robinson-road", name: "Robinson Road & Sultanpet", tag: "Commercial Core" },
          { id: "kallekkad", name: "Kallekkad", tag: "Suburban Villas" },
        ],
      },
      {
        id: "ottapalam",
        name: "Ottapalam",
        type: "Municipality",
        isPopular: true,
        tag: "Bharathapuzha Riverside & Film Locations",
        localities: [
          { id: "kanniyampuram", name: "Kanniyampuram", tag: "Riverside Villas" },
          { id: "varode", name: "Varode", tag: "Green Farmlands" },
        ],
      },
      {
        id: "shoranur",
        name: "Shoranur",
        type: "Municipality",
        isPopular: false,
        tag: "Major Railway Junction & River Bank",
        localities: [
          { id: "kulappully", name: "Kulappully", tag: "High-Speed Bypass" },
          { id: "kalamandalam-zone", name: "Cheruthuruthy Border", tag: "Art Heritage" },
        ],
      },
    ],
    localities: [
      { id: "chandranagar", name: "Chandranagar", popular: true, tag: "Posh Colony" },
      { id: "kalpathy", name: "Kalpathy", popular: true, tag: "Heritage Agraharam" },
      { id: "ottapalam", name: "Ottapalam", popular: true, tag: "Riverside Town" },
      { id: "shoranur", name: "Shoranur", popular: false, tag: "Railway & Riverfront" },
    ],
  },

  // 10. Malappuram
  {
    id: "malappuram",
    name: "Malappuram",
    popularName: "Malappuram (Healthcare & NRI Hub)",
    malayalam: "മലപ്പുറം",
    headquarters: "Malappuram",
    region: "North-Central Kerala",
    description: "Rapidly growing urban centers, medical city Perinthalmanna, and Calicut airport belt",
    cities: [
      {
        id: "malappuram-city",
        name: "Malappuram City",
        type: "Municipality",
        isPopular: true,
        tag: "Civil Station & High Hill",
        localities: [
          { id: "up-hill", name: "Up Hill", tag: "Administrative & Commercial Center" },
          { id: "down-hill", name: "Down Hill", tag: "Bustling Residential" },
          { id: "kottakunnu", name: "Kottakunnu Park Zone", tag: "Scenic Elevated Living" },
        ],
      },
      {
        id: "manjeri",
        name: "Manjeri",
        type: "Municipality",
        isPopular: true,
        tag: "Commercial Powerhouse & Medical College",
        localities: [
          { id: "court-road", name: "Court Road", tag: "Legal & Commercial Core" },
          { id: "pandikkad-road", name: "Pandikkad Road", tag: "Residential Suburb" },
        ],
      },
      {
        id: "perinthalmanna",
        name: "Perinthalmanna",
        type: "Municipality",
        isPopular: true,
        tag: "Kerala's Renowned Hospital City",
        localities: [
          { id: "bypass-junction", name: "Hospital Bypass Corridor", tag: "Super-Specialty Zone" },
          { id: "ooty-road", name: "Ooty Road", tag: "High-Value Commercial" },
        ],
      },
      {
        id: "tirur",
        name: "Tirur",
        type: "Municipality",
        isPopular: false,
        tag: "Railway Hub & Thunchan Parambu",
        localities: [
          { id: "tirur-town", name: "Town Center & Station", tag: "Commercial Transit" },
          { id: "chembra", name: "Chembra", tag: "Villas" },
        ],
      },
      {
        id: "kottakkal",
        name: "Kottakkal",
        type: "Municipality",
        isPopular: false,
        tag: "World Famous Ayurveda Capital",
        localities: [
          { id: "changuvetty", name: "Changuvetty Junction", tag: "NH 66 Frontage" },
          { id: "avs-campus", name: "Arya Vaidya Sala Zone", tag: "Heritage & Health" },
        ],
      },
    ],
    localities: [
      { id: "manjeri", name: "Manjeri", popular: true, tag: "Commercial Hub" },
      { id: "perinthalmanna", name: "Perinthalmanna", popular: true, tag: "Hospital City" },
      { id: "tirur", name: "Tirur", popular: true, tag: "Coastal Railway Hub" },
      { id: "kottakkal", name: "Kottakkal", popular: true, tag: "Arya Vaidya Sala Town" },
    ],
  },

  // 11. Kozhikode
  {
    id: "kozhikode",
    name: "Kozhikode",
    popularName: "Calicut",
    malayalam: "കോഴിക്കോട്",
    headquarters: "Kozhikode",
    region: "North Kerala",
    description: "Cyberpark IT hub, historic beach promenade, Malabar culinary & trade capital",
    cities: [
      {
        id: "kozhikode-city",
        name: "Kozhikode City",
        type: "Corporation",
        isPopular: true,
        tag: "Historic Port & Modern IT Hub",
        localities: [
          { id: "beach-road", name: "Beach Road & Promenade", tag: "Waterfront Luxury Flats" },
          { id: "nadakkavu", name: "Nadakkavu", tag: "Elite Residential Enclave" },
          { id: "mavoor-road", name: "Mavoor Road", tag: "Commercial Heart & Bus Terminal" },
          { id: "chevayur", name: "Chevayur", tag: "Peaceful Gated Villas" },
          { id: "pottammal", name: "Pottammal", tag: "Hospital & Residential Hub" },
          { id: "west-hill", name: "West Hill", tag: "Green Heritage Belt" },
        ],
      },
      {
        id: "thondayad",
        name: "Thondayad",
        type: "Major Town",
        isPopular: true,
        tag: "NH Bypass Flyover & Cyberpark Link",
        localities: [
          { id: "thondayad-flyover", name: "Flyover Junction", tag: "Major Commercial Hub" },
          { id: "nellikkode", name: "Nellikkode", tag: "High-End Residential" },
          { id: "cyberpark-road", name: "Cyberpark Access Corridor", tag: "Techie Living" },
        ],
      },
      {
        id: "palazhi",
        name: "Palazhi",
        type: "Major Town",
        isPopular: true,
        tag: "UL Cyberpark & HiLITE City",
        localities: [
          { id: "hilite-city", name: "HiLITE Mall & Township", tag: "Integrated Living" },
          { id: "ul-cyberpark", name: "UL Cyberpark Frontage", tag: "IT SEZ Corridor" },
        ],
      },
      {
        id: "ramanattukara",
        name: "Ramanattukara",
        type: "Municipality",
        isPopular: true,
        tag: "Calicut Airport Gateway & NH 66",
        localities: [
          { id: "ramanattukara-junction", name: "Airport Road Junction", tag: "Commercial Logistics" },
          { id: "feroke", name: "Feroke (Chaliyar Riverfront)", tag: "Riverside Villas" },
        ],
      },
    ],
    localities: [
      { id: "beach-road", name: "Beach Road", popular: true, tag: "Waterfront Luxury" },
      { id: "nadakkavu", name: "Nadakkavu", popular: true, tag: "Elite Residential" },
      { id: "thondayad", name: "Thondayad", popular: true, tag: "Bypass & Cyberpark Link" },
      { id: "ramanattukara", name: "Ramanattukara", popular: true, tag: "Airport Corridor" },
      { id: "palazhi", name: "Palazhi", popular: true, tag: "HiLITE City & Cyberpark" },
      { id: "mavoor-road", name: "Mavoor Road", popular: true, tag: "Commercial Core" },
      { id: "chevayur", name: "Chevayur", popular: false, tag: "Peaceful Villas" },
    ],
  },

  // 12. Wayanad
  {
    id: "wayanad",
    name: "Wayanad",
    popularName: "Wayanad (Mist Hills & Plantations)",
    malayalam: "വയനാട്",
    headquarters: "Kalpetta",
    region: "Highlands",
    description: "Misty mountain peaks, coffee and tea plantations, waterfalls, and eco-resort retreats",
    cities: [
      {
        id: "kalpetta",
        name: "Kalpetta",
        type: "Municipality",
        isPopular: true,
        tag: "District Capital & Central Trade",
        localities: [
          { id: "civil-station", name: "Civil Station Area", tag: "Administrative Core" },
          { id: "pinangode-road", name: "Pinangode Road", tag: "Scenic View Villas" },
          { id: "kainatty", name: "Kainatty Bypass", tag: "Commercial Corridor" },
        ],
      },
      {
        id: "vythiri",
        name: "Vythiri",
        type: "Major Town",
        isPopular: true,
        tag: "Lakkidi Mist Gap & Luxury Resorts",
        localities: [
          { id: "lakkidi", name: "Lakkidi Rainforest Gap", tag: "Coolest Valley in Kerala" },
          { id: "pookode", name: "Pookode Lake Belt", tag: "Eco Tourism & Cottages" },
          { id: "chundale", name: "Chundale Tea Gardens", tag: "Tea Plantation Acreage" },
        ],
      },
      {
        id: "sulthan-bathery",
        name: "Sulthan Bathery",
        type: "Municipality",
        isPopular: true,
        tag: "Interstate Trade Hub (KA & TN Borders)",
        localities: [
          { id: "assumption-junction", name: "Town Center", tag: "Thriving Commercial" },
          { id: "kolagappara", name: "Kolagappara", tag: "Farm Plots" },
        ],
      },
      {
        id: "meppadi",
        name: "Meppadi",
        type: "Town",
        isPopular: false,
        tag: "Chembra Peak Foothills",
        localities: [
          { id: "chembra-foothills", name: "Chembra View", tag: "Mountain Homestays" },
          { id: "vaduvanchal", name: "Vaduvanchal", tag: "Spices & Countryside Land" },
        ],
      },
      {
        id: "mananthavady",
        name: "Mananthavady",
        type: "Municipality",
        isPopular: false,
        tag: "Tea Heritage & Wildlife Gateway",
        localities: [
          { id: "valliyoorkavu", name: "Valliyoorkavu Area", tag: "Heritage Riverfront" },
          { id: "payyampally", name: "Payyampally", tag: "Coffee Estates" },
        ],
      },
    ],
    localities: [
      { id: "vythiri", name: "Vythiri", popular: true, tag: "Mist Valley & Eco Resorts" },
      { id: "kalpetta", name: "Kalpetta", popular: true, tag: "District Capital" },
      { id: "sulthan-bathery", name: "Sulthan Bathery", popular: true, tag: "Border Trade Hub" },
      { id: "meppadi", name: "Meppadi", popular: false, tag: "Chembra Peak Foothills" },
      { id: "mananthavady", name: "Mananthavady", popular: false, tag: "Coffee & Tea Estates" },
    ],
  },

  // 13. Kannur
  {
    id: "kannur",
    name: "Kannur",
    popularName: "Kannur (Land of Looms & Lores)",
    malayalam: "കണ്ണൂർ",
    headquarters: "Kannur",
    region: "North Kerala",
    description: "International airport, pristine drive-in beaches, handloom heritage, and coastal villas",
    cities: [
      {
        id: "kannur-city",
        name: "Kannur City",
        type: "Corporation",
        isPopular: true,
        tag: "Commercial & Port Capital",
        localities: [
          { id: "payyambalam", name: "Payyambalam Beach Road", tag: "Sea View Properties & Apartments" },
          { id: "thavakkara", name: "Thavakkara", tag: "Central Transit & Retail" },
          { id: "south-bazaar", name: "South Bazaar", tag: "Commercial Core" },
          { id: "mele-chovva", name: "Mele Chovva", tag: "Airport Corridor Junction" },
          { id: "talap", name: "Talap", tag: "Peaceful Residential Enclave" },
        ],
      },
      {
        id: "thalassery",
        name: "Thalassery",
        type: "Municipality",
        isPopular: true,
        tag: "Historic Heritage Town & Drive-in Beach",
        localities: [
          { id: "overburys-folly", name: "Overbury's Folly Area", tag: "Seafront Promenade" },
          { id: "logans-road", name: "Logan's Road", tag: "Commercial Hub" },
          { id: "muzhappilangad", name: "Muzhappilangad Beach Zone", tag: "Drive-in Beach Resorts" },
        ],
      },
      {
        id: "payyanur",
        name: "Payyanur",
        type: "Municipality",
        isPopular: false,
        tag: "Khadi Center & Perumba Riverfront",
        localities: [
          { id: "perumba", name: "Perumba Junction", tag: "Transit Hub" },
          { id: "payyanur-temple", name: "Subramanya Swamy Temple Zone", tag: "Residential" },
        ],
      },
      {
        id: "mattannur",
        name: "Mattannur",
        type: "Municipality",
        isPopular: false,
        tag: "Kannur International Airport (CNN) City",
        localities: [
          { id: "airport-entrance", name: "Airport Road Enclave", tag: "Commercial Aerotropolis" },
          { id: "iruTTY", name: "Iritty Gateway", tag: "High-Growth Plots" },
        ],
      },
    ],
    localities: [
      { id: "thavakkara", name: "Thavakkara", popular: true, tag: "City Center" },
      { id: "payyambalam", name: "Payyambalam", popular: true, tag: "Sea View Properties" },
      { id: "thalassery", name: "Thalassery", popular: true, tag: "Heritage Coastal Town" },
      { id: "mattannur", name: "Mattannur", popular: false, tag: "Airport Zone" },
      { id: "payyanur", name: "Payyanur", popular: false, tag: "Northern Hub" },
    ],
  },

  // 14. Kasaragod
  {
    id: "kasaragod",
    name: "Kasaragod",
    popularName: "Kasaragod (Land of Forts & Rivers)",
    malayalam: "കാസർഗോഡ്",
    headquarters: "Kasaragod",
    region: "North Kerala",
    description: "Bekal luxury beach tourism, historic forts, 12 rivers, and coastal lands",
    cities: [
      {
        id: "kasaragod-town",
        name: "Kasaragod Town",
        type: "Municipality",
        isPopular: true,
        tag: "District Capital & Port Riverfront",
        localities: [
          { id: "vidyanagar", name: "Vidyanagar (Collectorate)", tag: "Civil Station Hub" },
          { id: "nullippady", name: "Nullippady", tag: "Commercial Center" },
          { id: "chandragiri", name: "Chandragiri Fort Road", tag: "Riverview Land" },
        ],
      },
      {
        id: "kanhangad",
        name: "Kanhangad",
        type: "Municipality",
        isPopular: true,
        tag: "Commercial & Business Capital of District",
        localities: [
          { id: "new-bus-stand", name: "New Bus Stand Commercial", tag: "Shopping Core" },
          { id: "mavungal", name: "Mavungal Junction", tag: "Highway & Medical City" },
          { id: "kottacherry", name: "Kottacherry", tag: "Prime Residential" },
        ],
      },
      {
        id: "nileshwaram",
        name: "Nileshwaram",
        type: "Municipality",
        isPopular: true,
        tag: "Cultural Capital & Backwater Gateway",
        localities: [
          { id: "nileshwar-palace", name: "Palace Zone", tag: "Traditional Tharavads" },
          { id: "thekkepuram", name: "Thekkepuram", tag: "Tejaswini Riverfront" },
        ],
      },
      {
        id: "bekal",
        name: "Bekal",
        type: "Special Zone",
        isPopular: true,
        tag: "Bekal Fort & Luxury Five-Star Tourism Belt",
        localities: [
          { id: "bekal-fort-view", name: "Bekal Fort Beachfront", tag: "High-End Tourism Frontage" },
          { id: "pallikkere", name: "Pallikkere", tag: "Coastal Plots" },
          { id: "udma", name: "Udma", tag: "NH 66 Bypass Corridor" },
        ],
      },
    ],
    localities: [
      { id: "kanhangad", name: "Kanhangad", popular: true, tag: "Commercial City" },
      { id: "kasaragod-town", name: "Kasaragod Town", popular: true, tag: "District Capital" },
      { id: "nileshwaram", name: "Nileshwaram", popular: true, tag: "Cultural Capital" },
      { id: "bekal", name: "Bekal", popular: true, tag: "Fort & Luxury Tourism" },
    ],
  },
];

/**
 * Highly configurable Popular Cities across Kerala as requested by user
 */
export const POPULAR_KERALA_CITIES = [
  // Ernakulam Hotspots
  {
    id: "kochi",
    name: "Kochi City",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Metro & Waterfront Capital",
    propertiesCount: "3,120+ Listings",
  },
  {
    id: "kakkanad",
    name: "Kakkanad",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Infopark IT & SmartCity",
    propertiesCount: "1,840+ Listings",
  },
  {
    id: "edappally",
    name: "Edappally",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Lulu Mall & Metro Hub",
    propertiesCount: "920+ Listings",
  },
  {
    id: "aluva",
    name: "Aluva",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Periyar Riverfront & Metro",
    propertiesCount: "740+ Listings",
  },
  {
    id: "vyttila",
    name: "Vyttila",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Mobility Hub & NH Bypass",
    propertiesCount: "810+ Listings",
  },
  {
    id: "kalamassery",
    name: "Kalamassery",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "CUSAT University & Metro",
    propertiesCount: "630+ Listings",
  },
  {
    id: "thrippunithura",
    name: "Thrippunithura",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Royal Palace Town & Metro",
    propertiesCount: "580+ Listings",
  },
  {
    id: "maradu",
    name: "Maradu",
    district: "Ernakulam",
    districtId: "ernakulam",
    tag: "Kundannoor Bypass & Hotels",
    propertiesCount: "490+ Listings",
  },

  // Thiruvananthapuram
  {
    id: "trivandrum",
    name: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    districtId: "thiruvananthapuram",
    tag: "Capital City & Kowdiar Posh",
    propertiesCount: "2,250+ Listings",
  },
  {
    id: "kazhakkoottam",
    name: "Kazhakkoottam",
    district: "Thiruvananthapuram",
    districtId: "thiruvananthapuram",
    tag: "Technopark Phase 1-3",
    propertiesCount: "1,150+ Listings",
  },
  {
    id: "pattom",
    name: "Pattom",
    district: "Thiruvananthapuram",
    districtId: "thiruvananthapuram",
    tag: "Commercial Core & Schools",
    propertiesCount: "620+ Listings",
  },
  {
    id: "sreekaryam",
    name: "Sreekaryam",
    district: "Thiruvananthapuram",
    districtId: "thiruvananthapuram",
    tag: "CET College & NH Bypass",
    propertiesCount: "430+ Listings",
  },

  // Kozhikode
  {
    id: "kozhikode-city",
    name: "Kozhikode",
    district: "Kozhikode",
    districtId: "kozhikode",
    tag: "Cyberpark & Beach Coast",
    propertiesCount: "1,890+ Listings",
  },
  {
    id: "thondayad",
    name: "Thondayad",
    district: "Kozhikode",
    districtId: "kozhikode",
    tag: "NH Bypass Flyover Hub",
    propertiesCount: "540+ Listings",
  },
  {
    id: "ramanattukara",
    name: "Ramanattukara",
    district: "Kozhikode",
    districtId: "kozhikode",
    tag: "Airport Road Corridor",
    propertiesCount: "480+ Listings",
  },

  // Thrissur
  {
    id: "thrissur-town",
    name: "Thrissur",
    district: "Thrissur",
    districtId: "thrissur",
    tag: "Cultural Capital & Punkunnam",
    propertiesCount: "1,620+ Listings",
  },
  {
    id: "guruvayur",
    name: "Guruvayur",
    district: "Thrissur",
    districtId: "thrissur",
    tag: "Temple Town Apartments",
    propertiesCount: "510+ Listings",
  },
  {
    id: "kunnamkulam",
    name: "Kunnamkulam",
    district: "Thrissur",
    districtId: "thrissur",
    tag: "Trade & Commercial Town",
    propertiesCount: "390+ Listings",
  },

  // Central & South Kerala
  {
    id: "kottayam",
    name: "Kottayam",
    district: "Kottayam",
    districtId: "kottayam",
    tag: "Kanjikuzhy & Rubber Estates",
    propertiesCount: "940+ Listings",
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    district: "Alappuzha",
    districtId: "alappuzha",
    tag: "Punnamada Backwaters & Lake",
    propertiesCount: "820+ Listings",
  },
  {
    id: "kollam",
    name: "Kollam",
    district: "Kollam",
    districtId: "kollam",
    tag: "Ashtamudi Lakefront",
    propertiesCount: "710+ Listings",
  },
  {
    id: "palakkad",
    name: "Palakkad",
    district: "Palakkad",
    districtId: "palakkad",
    tag: "Chandranagar Colony & Gap",
    propertiesCount: "680+ Listings",
  },
  {
    id: "malappuram",
    name: "Malappuram",
    district: "Malappuram",
    districtId: "malappuram",
    tag: "Manjeri & Perinthalmanna",
    propertiesCount: "760+ Listings",
  },
  {
    id: "kannur",
    name: "Kannur",
    district: "Kannur",
    districtId: "kannur",
    tag: "Payyambalam & Airport Zone",
    propertiesCount: "630+ Listings",
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    district: "Kasaragod",
    districtId: "kasaragod",
    tag: "Bekal Luxury Beach Tourism",
    propertiesCount: "420+ Listings",
  },

  // Countryside & Highlands
  {
    id: "munnar",
    name: "Munnar",
    district: "Idukki",
    districtId: "idukki",
    tag: "Misty Tea Estates & Resorts",
    propertiesCount: "380+ Listings",
  },
  {
    id: "thodupuzha",
    name: "Thodupuzha",
    district: "Idukki",
    districtId: "idukki",
    tag: "Commercial Gateway Town",
    propertiesCount: "490+ Listings",
  },
  {
    id: "vythiri",
    name: "Vythiri",
    district: "Wayanad",
    districtId: "wayanad",
    tag: "Lakkidi Rainforest Retreats",
    propertiesCount: "340+ Listings",
  },
  {
    id: "kalpetta",
    name: "Kalpetta",
    district: "Wayanad",
    districtId: "wayanad",
    tag: "Wayanad District Capital",
    propertiesCount: "410+ Listings",
  },
  {
    id: "thiruvalla",
    name: "Thiruvalla",
    district: "Pathanamthitta",
    districtId: "pathanamthitta",
    tag: "NRI Residential Capital",
    propertiesCount: "590+ Listings",
  },
  {
    id: "adoor",
    name: "Adoor",
    district: "Pathanamthitta",
    districtId: "pathanamthitta",
    tag: "MC Road Growth Junction",
    propertiesCount: "320+ Listings",
  },
];

/**
 * Flattens all locations for instant autocomplete, global search, and multi-tier filtering
 */
export const getAllSearchableLocations = () => {
  const list = [
    {
      type: "state",
      id: "all-kerala",
      name: "All Kerala",
      label: "All Kerala (Search Across Kerala)",
      district: "All Kerala",
      tag: "All 14 Districts",
    },
  ];

  KERALA_DISTRICTS.forEach((d) => {
    // 1. District itself
    list.push({
      type: "district",
      id: d.id,
      name: d.name,
      label: `${d.name} (${d.malayalam})`,
      district: d.name,
      districtId: d.id,
      region: d.region,
      tag: `${d.region} • ${d.headquarters}`,
    });

    // 2. Cities / Towns within district
    if (d.cities) {
      d.cities.forEach((c) => {
        list.push({
          type: "city",
          id: c.id,
          name: c.name,
          label: `${c.name}, ${d.name}`,
          city: c.name,
          district: d.name,
          districtId: d.id,
          tag: `${c.type} • ${c.tag}`,
        });

        // 3. Localities within city
        if (c.localities) {
          c.localities.forEach((loc) => {
            list.push({
              type: "locality",
              id: loc.id,
              name: loc.name,
              label: `${loc.name}, ${c.name}, ${d.name}`,
              locality: loc.name,
              city: c.name,
              district: d.name,
              districtId: d.id,
              tag: loc.tag,
            });
          });
        }
      });
    }
  });

  return list;
};

/**
 * Get district object by name or ID
 */
export const getDistrictByNameOrId = (identifier) => {
  if (!identifier || identifier === "All Kerala") return null;
  const clean = identifier.toLowerCase().trim();
  return (
    KERALA_DISTRICTS.find(
      (d) => d.id.toLowerCase() === clean || d.name.toLowerCase() === clean
    ) || null
  );
};

/**
 * Get cities in a given district
 */
export const getCitiesByDistrict = (districtNameOrId) => {
  const district = getDistrictByNameOrId(districtNameOrId);
  return district ? district.cities || [] : [];
};

/**
 * Get localities in a given city within a district
 */
export const getLocalitiesByCity = (districtNameOrId, cityNameOrId) => {
  const district = getDistrictByNameOrId(districtNameOrId);
  if (!district || !district.cities) return [];

  const city = district.cities.find(
    (c) =>
      c.id.toLowerCase() === (cityNameOrId || "").toLowerCase().trim() ||
      c.name.toLowerCase() === (cityNameOrId || "").toLowerCase().trim()
  );

  return city ? city.localities || [] : [];
};

/**
 * Extensible helper for registering custom dynamic locations in future
 */
export const registerNewLocation = (districtName, cityData) => {
  const district = KERALA_DISTRICTS.find(
    (d) => d.name.toLowerCase() === districtName.toLowerCase()
  );
  if (district) {
    if (!district.cities) district.cities = [];
    district.cities.push(cityData);
    return true;
  }
  return false;
};
