const menu = [
  {
    id: 1,
    title: "E-book 1",
    category: "Agriculture E-Book",
    price: 15.99,
    quantity: 0,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fmango-plant-and-fruit&psig=AOvVaw0rvgb-7NFfOkoS9AS3_Dps&ust=1668732970823000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDujfKAtPsCFQAAAAAdAAAAABAI",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "E-Book 2",
    category: "Agriculture E-Book",
    price: 13.99,
    quantity: 0,
    img: "./images/slaess.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "E-Book 3",
    category: "Agriculture E-Book",
    price: 6.99,
    quantity: 0,
    img: "./images/small incubator.jpg ",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "E-book 4",
    category: "Agriculture E-Book",
    price: 20.99,
    quantity: 0,
    img: "./images/solar sprayer.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Irrigation",
    price: 22.99,
    quantity: 0,
    img: "./images/fruit1.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Irrigation",
    price: 18.99,
    quantity: 0,
    img: "./images/fruit2.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Irrigation",
    price: 8.99,
    quantity: 0,
    img: "./images/fruit1.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Irrigation",
    price: 12.99,
    quantity: 0,
    img: "./images/fruit2.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Dog",
    category: "Animal feeds",
    price: 16.99,
    quantity: 0,
    img: "./images/mango.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Ram",
    category: "Animal feeds",
    price: 16.99,
    quantity: 0,
    img: "./images/mango.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Goat",
    category: "Animal feeds",
    price: 16.99,
    quantity: 0,
    img: "./images/pepper.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Cow",
    category: "Animal feeds",
    price: 16.99,
    quantity: 0,
    img: "./images/pepper.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "hen",
    category: "Chicken",
    price: 16.99,
    quantity: 0,
    img: "./images/apple.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Turkey",
    category: "Chicken",
    price: 16.99,
    quantity: 0,
    img: "./images/apple.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Pigeon",
    category: "Chicken",
    price: 16.99,
    quantity: 0,
    img: "./images/tomatoes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "Bird",
    category: "Chicken",
    price: 16.99,
    quantity: 0,
    img: "./images/tomatoes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "Tractor",
    category: "Farm tools",
    price: 16.99,
    quantity: 0,
    img: "./images/sprayer.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: "hoe",
    category: "Farm tools",
    price: 16.99,
    quantity: 0,
    img: "./images/sprinkler.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "Digger",
    category: "Farm tools",
    price: 16.99,
    quantity: 0,
    img: "./images/sprinkler.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "Cutlass",
    category: "Farm tools",
    price: 16.99,
    quantity: 0,
    img: "./images/sprinkler.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: "Mango",
    category: "Fruit",
    price: 16.99,
    quantity: 0,
    img: "./images/mango.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 23,
    title: "Apple",
    category: "Fruit",
    price: 16.99,
    quantity: 0,
    img: "./images/apple.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 24,
    title: "Grape",
    category: "Fruit",
    price: 16.99,
    quantity: 0,
    img: "./images/fruit1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 25,
    title: "Orange",
    category: "Fruit",
    price: 16.99,
    quantity: 0,
    img: "./images/fruit2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 26,
    title: "Beans",
    category: "Food stuff",
    price: 16.99,
    quantity: 0,
    img: "./images/fruit2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 27,
    title: "Rice",
    category: "Food stuff",
    price: 16.99,
    quantity: 0,
    img: "./images/mango.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 28,
    title: "Casava",
    category: "Food stuff",
    price: 16.99,
    quantity: 0,
    img: "./images/tomatoes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 29,
    title: "Spagetti",
    category: "Food stuff",
    price: 16.99,
    quantity: 0,
    img: "./images/apple.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 30,
    title: "Yam",
    category: "Food stuff",
    price: 16.99,
    quantity: 0,
    img: "./images/mango.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;
