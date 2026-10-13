/**
 * Kerala Location Hierarchy & Search System for VeeduX
 * Supports easy extension for any Kerala village, municipality, or landmark.
 */

export const KERALA_DISTRICTS = [
  {
    id: "ernakulam",
    name: "Ernakulam",
    popularName: "Kochi / Ernakulam",
    malayalam: "എറണാകുളം",
    headquarters: "Kakkanad",
    region: "Central Kerala",
    localities: [
      { id: "kakkanad", name: "Kakkanad", popular: true, tag: "IT & SmartCity Hub" },
      { id: "kochi", name: "Kochi City", popular: true, tag: "Commercial & Waterfront" },
      { id: "aluva", name: "Aluva", popular: true, tag: "Metro & Riverfront" },
      { id: "edappally", name: "Edappally", popular: true, tag: "Lulu Mall & Metro" },
      { id: "thrippunithura", name: "Thrippunithura", popular: true, tag: "Heritage & Metro" },
      { id: "marine-drive", name: "Marine Drive", popular: true, tag: "Luxury Promenade" },
      { id: "panampilly-nagar", name: "Panampilly Nagar", popular: true, tag: "Posh Residential" },
      { id: "palarivattom", name: "Palarivattom", popular: false, tag: "Bypass Junction" },
      { id: "vyttila", name: "Vyttila", popular: true, tag: "Mobility Hub" },
      { id: "fort-kochi", name: "Fort Kochi", popular: true, tag: "Heritage & Coastal" },
      { id: "kaloor", name: "Kaloor", popular: false, tag: "Stadium & City Center" },
      { id: "perumbavoor", name: "Perumbavoor", popular: false, tag: "Suburban Plots" },
    ],
  },
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    popularName: "Trivandrum",
    malayalam: "തിരുവനന്തപുരം",
    headquarters: "Thiruvananthapuram",
    region: "South Kerala",
    localities: [
      { id: "kazhakoottam", name: "Kazhakoottam", popular: true, tag: "Technopark Phase 1-3" },
      { id: "kowdiar", name: "Kowdiar", popular: true, tag: "Royal & Luxury Residential" },
      { id: "sasthamangalam", name: "Sasthamangalam", popular: true, tag: "Prime Residential" },
      { id: "pattom", name: "Pattom", popular: true, tag: "Commercial Center" },
      { id: "vellayambalam", name: "Vellayambalam", popular: false, tag: "City Center" },
      { id: "sreekaryam", name: "Sreekaryam", popular: false, tag: "CET & NH Bypass" },
      { id: "kovalam", name: "Kovalam", popular: true, tag: "Coastal Resort Zone" },
    ],
  },
  {
    id: "thrissur",
    name: "Thrissur",
    popularName: "Thrissur (Cultural Capital)",
    malayalam: "തൃശ്ശൂർ",
    headquarters: "Thrissur",
    region: "Central Kerala",
    localities: [
      { id: "punkunnam", name: "Punkunnam", popular: true, tag: "Prime Villas & Flats" },
      { id: "east-fort", name: "East Fort", popular: true, tag: "Central Hub" },
      { id: "ayyanthole", name: "Ayyanthole", popular: true, tag: "Civil Station Area" },
      { id: "ollur", name: "Ollur", popular: false, tag: "Industrial & Plots" },
      { id: "chalakudy", name: "Chalakudy", popular: true, tag: "Highway Frontage" },
      { id: "irinjalakuda", name: "Irinjalakuda", popular: false, tag: "Cultural Town" },
      { id: "guruvayur", name: "Guruvayur", popular: true, tag: "Temple Town Apartments" },
    ],
  },
  {
    id: "kozhikode",
    name: "Kozhikode",
    popularName: "Calicut",
    malayalam: "കോഴിക്കോട്",
    headquarters: "Kozhikode",
    region: "North Kerala",
    localities: [
      { id: "beach-road", name: "Beach Road", popular: true, tag: "Waterfront Luxury" },
      { id: "nadakkavu", name: "Nadakkavu", popular: true, tag: "Elite Residential" },
      { id: "palazhi", name: "Palazhi (Cyberpark)", popular: true, tag: "Tech Corridors & Bypass" },
      { id: "mavoor-road", name: "Mavoor Road", popular: true, tag: "Commercial Core" },
      { id: "chevayur", name: "Chevayur", popular: false, tag: "Peaceful Villas" },
      { id: "pottammal", name: "Pottammal", popular: false, tag: "Hospital & Residential" },
    ],
  },
  {
    id: "kottayam",
    name: "Kottayam",
    popularName: "Kottayam (Land of Letters)",
    malayalam: "കോട്ടയം",
    headquarters: "Kottayam",
    region: "Central Kerala",
    localities: [
      { id: "kanjikuzhy", name: "Kanjikuzhy", popular: true, tag: "High-End Residential" },
      { id: "kumarakom", name: "Kumarakom", popular: true, tag: "Vembanad Lakefront" },
      { id: "changanassery", name: "Changanassery", popular: true, tag: "Bustling Town" },
      { id: "pala", name: "Pala", popular: true, tag: "Estate & Residential Plots" },
      { id: "ettumanoor", name: "Ettumanoor", popular: false, tag: "Temple Town & Bypass" },
    ],
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    popularName: "Alleppey (Venice of the East)",
    malayalam: "ആലപ്പുഴ",
    headquarters: "Alappuzha",
    region: "South-Central Kerala",
    localities: [
      { id: "punnamada", name: "Punnamada", popular: true, tag: "Backwater Frontage" },
      { id: "thiruvampady", name: "Thiruvampady", popular: false, tag: "Town Center" },
      { id: "cherthala", name: "Cherthala", popular: true, tag: "NH 66 & Infopark" },
      { id: "kayamkulam", name: "Kayamkulam", popular: false, tag: "Highway Junction" },
      { id: "ambalapuzha", name: "Ambalapuzha", popular: false, tag: "Heritage Coastal" },
    ],
  },
  {
    id: "kannur",
    name: "Kannur",
    popularName: "Kannur (Land of Looms & Lores)",
    malayalam: "കണ്ണൂർ",
    headquarters: "Kannur",
    region: "North Kerala",
    localities: [
      { id: "thavakkara", name: "Thavakkara", popular: true, tag: "City Center" },
      { id: "payyambalam", name: "Payyambalam", popular: true, tag: "Sea View Properties" },
      { id: "thalassery", name: "Thalassery", popular: true, tag: "Heritage Coastal Town" },
      { id: "taliparamba", name: "Taliparamba", popular: false, tag: "Highway Plots" },
    ],
  },
  {
    id: "wayanad",
    name: "Wayanad",
    popularName: "Wayanad (Mist Hills & Plantations)",
    malayalam: "വയനാട്",
    headquarters: "Kalpetta",
    region: "Highlands",
    localities: [
      { id: "vythiri", name: "Vythiri", popular: true, tag: "Mist Valley & Eco Resorts" },
      { id: "kalpetta", name: "Kalpetta", popular: true, tag: "District Capital" },
      { id: "sulthan-bathery", name: "Sulthan Bathery", popular: true, tag: "Border Trade Hub" },
      { id: "mananthavady", name: "Mananthavady", popular: false, tag: "Coffee & Tea Estates" },
      { id: "meppadi", name: "Meppadi", popular: true, tag: "Chembra Peak Foothills" },
    ],
  },
  {
    id: "palakkad",
    name: "Palakkad",
    popularName: "Palakkad (Gateway of Kerala)",
    malayalam: "പാലക്കാട്",
    headquarters: "Palakkad",
    region: "Central Kerala",
    localities: [
      { id: "chandranagar", name: "Chandranagar", popular: true, tag: "Posh Colony" },
      { id: "kalpathy", name: "Kalpathy", popular: true, tag: "Heritage Agraharam" },
      { id: "ottapalam", name: "Ottapalam", popular: true, tag: "Riverside Town" },
      { id: "shoranur", name: "Shoranur", popular: false, tag: "Railway & Riverfront" },
    ],
  },
  {
    id: "kollam",
    name: "Kollam",
    popularName: "Quilon (Cashew City)",
    malayalam: "കൊല്ലം",
    headquarters: "Kollam",
    region: "South Kerala",
    localities: [
      { id: "ashtamudi", name: "Ashtamudi", popular: true, tag: "Lakefront Luxury" },
      { id: "chinnakada", name: "Chinnakada", popular: true, tag: "Commercial Clock Tower" },
      { id: "kavanad", name: "Kavanad", popular: false, tag: "Highway Bypass" },
      { id: "kadakkal", name: "Kadakkal", popular: false, tag: "Estate Land" },
    ],
  },
  {
    id: "malappuram",
    name: "Malappuram",
    popularName: "Malappuram",
    malayalam: "മലപ്പുറം",
    headquarters: "Malappuram",
    region: "North-Central Kerala",
    localities: [
      { id: "manjeri", name: "Manjeri", popular: true, tag: "Commercial Hub" },
      { id: "perinthalmanna", name: "Perinthalmanna", popular: true, tag: "Hospital City" },
      { id: "tirur", name: "Tirur", popular: true, tag: "Coastal Railway Hub" },
      { id: "kottakkal", name: "Kottakkal", popular: true, tag: "Arya Vaidya Sala Town" },
    ],
  },
  {
    id: "idukki",
    name: "Idukki",
    popularName: "Idukki (Spice Hills)",
    malayalam: "ഇടുക്കി",
    headquarters: "Painavu",
    region: "Highlands",
    localities: [
      { id: "munnar", name: "Munnar", popular: true, tag: "Tea Hill Station" },
      { id: "thodupuzha", name: "Thodupuzha", popular: true, tag: "Fast Developing Gateway" },
      { id: "kattappana", name: "Kattappana", popular: true, tag: "Cardamom Capital" },
      { id: "kumily", name: "Kumily (Thekkady)", popular: true, tag: "Tourism Hub" },
    ],
  },
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    popularName: "Pathanamthitta (Pilgrim Hub)",
    malayalam: "പത്തനംതിട്ട",
    headquarters: "Pathanamthitta",
    region: "South Kerala",
    localities: [
      { id: "thiruvalla", name: "Thiruvalla", popular: true, tag: "NRI Hub & Medical City" },
      { id: "adoor", name: "Adoor", popular: true, tag: "MC Road Junction" },
      { id: "kozhencherry", name: "Kozhencherry", popular: false, tag: "Pamba Riverside" },
      { id: "ranni", name: "Ranni", popular: false, tag: "Rubber Plantation Land" },
    ],
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    popularName: "Kasaragod (Land of Forts & Rivers)",
    malayalam: "കാസർഗോഡ്",
    headquarters: "Kasaragod",
    region: "North Kerala",
    localities: [
      { id: "kanhangad", name: "Kanhangad", popular: true, tag: "Commercial City" },
      { id: "kasaragod-town", name: "Kasaragod Town", popular: true, tag: "District Capital" },
      { id: "nileshwaram", name: "Nileshwaram", popular: true, tag: "Cultural Capital" },
      { id: "bekal", name: "Bekal", popular: true, tag: "Fort & Luxury Tourism" },
    ],
  },
];

/**
 * Flattens all locations for quick autocomplete and global searches
 */
export const getAllSearchableLocations = () => {
  const list = [];
  KERALA_DISTRICTS.forEach((d) => {
    // Add district itself
    list.push({
      type: "district",
      name: d.name,
      label: `${d.name} (District)`,
      district: d.name,
    });
    // Add localities
    d.localities.forEach((loc) => {
      list.push({
        type: "locality",
        name: loc.name,
        label: `${loc.name}, ${d.name}`,
        district: d.name,
        tag: loc.tag,
      });
    });
  });
  return list;
};

/**
 * Helper to dynamically register new locations in future
 */
export const registerNewLocation = (districtName, localityData) => {
  const district = KERALA_DISTRICTS.find(
    (d) => d.name.toLowerCase() === districtName.toLowerCase()
  );
  if (district) {
    district.localities.push(localityData);
    return true;
  }
  return false;
};
