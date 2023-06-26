// For a real auction, set this to false
export const isDemo = false;

// Specify item details
let items = [
  {
    primaryImage: "/auction-website/img/coins.png",
    primaryImage: "./img/bike.png",
    title: "Antique Coins",
    subtitle: "Exploring the Rarity, History, and Value of Antique Coins",
    detail: "These are at least 100 years old and considered collectible due to their rarity, historical significance, or beauty. Their value is determined by their rarity, condition, historical significance, and demand from collectors. Collectors often focus on specific countries, time periods, or types of coins.",
    secondaryImage: "/auction-website/img/coins.png",
    amount: 51000,
    endTime: "2023-04-29T03:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/car.png",
    title: "Mercedes First Car",
    subtitle: "The Benz Patent-Motorwagen: The First Gasoline-Powered Automobile in History",
    detail: "The first car produced by Mercedes-Benz was the Benz Patent-Motorwagen in 1904. It was a four-wheeled vehicle powered by a single-cylinder internal combustion engine and had a top speed of around 10 miles per hour. The Patent-Motorwagen is considered the first gasoline-powered automobile and is now a prized collector's item.",
    secondaryImage: "/auction-website/img/car.png",
    amount: 60000000,
    endTime: "2023-04-30T04:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/shoes.png",
    title: "Nike Sneakers",
    subtitle: "Exploring the Timeless Style and Value of Vintage Nike Sneakers",
    detail: "Old Nike sneakers, also known as vintage Nike sneakers, are classic designs from past decades that are highly sought after by collectors and fashion enthusiasts. These sneakers often feature retro designs, unique colorways, and rare materials, making them valuable and rare finds. While they may not have the latest technologies, their timeless style and history make them a prized addition to any sneaker collection.",
    secondaryImage: "/auction-website/img/shoes.png",
    amount: 20000,
    endTime: "2023-05-01T05:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/painting.png",
    title: "Pablo Picasso's Painting",
    subtitle: "Exploring the Bold Style and Emotional Depth of Picasso's Paintings",
    detail: "Pablo Picasso's paintings are known for their bold colors, distorted forms, and avant-garde style. He often used abstract shapes and fragmented forms to convey emotion and meaning, as seen in his famous works such as Les Demoiselles d'Avignon and Guernica. His unique style and innovative approach to art continue to influence and inspire artists today.",
    secondaryImage: "/auction-website/img/painting.png",
    amount: 500000,
    endTime: "2023-05-02T06:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/watch.png",
    title: "Antique Watch",
    subtitle: "Exploring the Beauty, History, and Mechanical Complexity of Antique Watches",
    detail: "It is a timepiece that is at least 100 years old and is considered a valuable collectible due to its rarity, history, and craftsmanship. These watches often feature intricate details, such as hand-crafted movements and enamel dials, and can be made of precious materials like gold or platinum. Collectors of antique watches value them for their beauty, historical significance, and mechanical complexity.",
    secondaryImage: "/auction-website/img/watch.png",
    amount: 400000,
    endTime: "2023-04-29T07:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/notes.png",
    title: "Historical Currency Notes",
    subtitle: "Exploring the Beauty and Historical Significance of Old Currency Notes",
    detail: "Historical currency notes are paper banknotes that were used as a form of currency in the past. These notes often feature intricate designs, important historical figures, and significant events. Collectors value historical currency notes for their rarity, beauty, and historical significance, as they provide a glimpse into the economic and political history of a country.",
    secondaryImage: "/auction-website/img/notes.png",
    amount: 15000,
    endTime: "2023-04-30T08:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/wine.jpeg",
    title: "86 years old Wine",
    subtitle: "Unveiling the Rare and Rich Flavors of an 86-Year-Old Vintage Wine",
    detail: "It is a rare and valuable vintage that has been aged for decades, allowing its flavors and aromas to develop and mature. These wines often have complex and rich flavors, with notes of fruit, oak, and earth. Collectors and wine enthusiasts value old wines for their rarity, history, and the unique experience of tasting a piece of the past.",
    secondaryImage: "/auction-website/img/wine.jpeg",
    amount: 25000,
    endTime: "2023-05-03T09:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/football.png",
    title: "Football Signed By Ronaldo",
    subtitle: "The Legacy of a Football Legend: Exploring the Value of a Ball Signed by Ronaldo",
    detail: "It is a prized possession for fans of the legendary footballer. It is a physical representation of his legacy and skill on the pitch. Collectors and fans alike value these signed balls for their rarity, personal connection, and the excitement of owning a piece of sporting history.",
    secondaryImage: "/auction-website/img/football.png",
    amount: 100000,
    endTime: "2023-04-28T10:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/jwel.png",
    title: "Antique Necklace",
    subtitle: "Adorning Elegance: The Beauty and History of an Antique Necklace",
    detail: "It  is a piece of jewelry that is at least 100 years old and is considered a valuable collectible due to its rarity, beauty, and historical significance. These necklaces often feature unique designs, rare gemstones, and intricate craftsmanship, and are highly sought after by collectors and jewelry enthusiasts. Antique necklaces are prized for their beauty, history, and the opportunity to wear a piece of the past.",
    secondaryImage: "/auction-website/img/jwel.png",
    amount: 520000,
    endTime: "2023-04-30T11:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/stamp.png",
    title: "Old Stamps",
    subtitle: "A Journey Through Time: The Fascinating World of Old Stamps",
    detail: "Old stamps are postage stamps that were issued in the past and are now considered valuable collectibles. These stamps often feature unique designs, rare printing errors, and important historical figures or events. Collectors of old stamps value them for their rarity, beauty, and historical significance, as they provide a glimpse into the postal history of a country.",
    secondaryImage: "/auction-website/img/stamp.png",
    amount: 8000,
    endTime: "2023-05-01T12:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/bike.png",
    title: "Honda's First Bike",
    subtitle: "Revolutionizing Transportation: The Legacy of Honda's First Motorcycle",
    detail: "Honda Model D, introduced in 1949. It was a lightweight bike designed for practicality and fuel efficiency, with a 98cc engine and a top speed of 50 miles per hour. The Honda Model D revolutionized the motorcycle industry and paved the way for Honda's success as a leading manufacturer of motorcycles and other vehicles.",
    secondaryImage: "/auction-website/img/bike.png",
    amount: 600000,
    endTime: "2023-04-29T01:30:00+05:30",
  },
  {
    primaryImage: "/auction-website/img/iphone.jpeg",
    title: "iPhone (1st Generation)",
    subtitle: "Changing the Game: The Impact and Innovation of the Original iPhone",
    detail: "The original iPhone, introduced in 2007, was a game-changing device that revolutionized the smartphone industry. It featured a sleek design, a multi-touch screen, and a user-friendly interface that made it easy to use. The iPhone 1 also introduced new technologies such as visual voicemail, mobile web browsing, and the ability to play music and video. Its impact on the tech industry and popular culture continues to be felt today.",
    secondaryImage: "/auction-website/img/iphone.jpeg",
    amount: 40000,
    endTime: "2023-05-05T02:30:00+05:30",
  },
];

// Fill missing fields with random information
async function generateRandomItemData(items) {
  // Random cat names
  await $.getJSON(
    "https://random-data-api.com/api/name/random_name",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].title ||= elem.name;
      });
    }
  );
  // Random lorem ipsum cat descriptions
  await $.getJSON(
    "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].subtitle ||= elem.short_sentence;
        items[i].detail ||= elem.very_long_sentence;
      });
    }
  );
  // Random cat images
  for (let i = 0; i < items.length; i++) {
    items[i].primaryImage ||= "https://cataas.com/cat/cute?random=" + i;
    items[i].secondaryImage ||= "https://cataas.com/cat/cute?random=" + i;
  }
  return items;
}

export async function getItems() {
  items = isDemo ? await generateRandomItemData(items) : items;
  // Insert the index from the unsorted array as the item ID
  items.forEach((item, idx) => (item.id = idx));
  // Parse endTime from ISO 8601 string
  items.forEach((item) => (item.endTime = new Date(item.endTime)));
  // Sort items in ascending end time
  items.sort((a, b) => a["endTime"] - b["endTime"]);
  return items;
}
