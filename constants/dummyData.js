const myProfile = {
  name: "ByProgrammers",
  profile_image: require("../assets/images/profile.png"),
  address: "No. 88, Jln Padungan, Kuching",
};

const categories = [
  {
    id: 1,
    name: "General Service",
    icon: require("../assets/icons/car-repair.png"),
  },
  {
    id: 2,
    name: "Tyre & Puncture",
    icon: require("../assets/icons/tyre.png"),
  },
  {
    id: 3,
    name: "Not sure whats wrong",
    icon: require("../assets/icons/car-lift.png"),
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "A popular spice and prepared by layering.",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
    card_no: "1234",
  },
  {
    id: 2,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
    card_no: "1234",
  },
];

const allCards = [
  {
    id: 1,
    name: "Apple Pay",
    icon: require("../assets/icons/apple.png"),
  },
  {
    id: 2,
    name: "Visa",
    icon: require("../assets/icons/visa.png"),
  },
  {
    id: 3,
    name: "PayPal",
    icon: require("../assets/icons/paypal.png"),
  },
  {
    id: 4,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
  },
  {
    id: 5,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
  },
];

const mechanics = [
  {
    id: 1,
    name: "Steve Lee",
    rating: 4,
    area: "Nakawa",
    center: "City Oil",
    img: "../assets/images/mech.png",
    phone: "256704316526",
  },
  {
    id: 2,
    name: "Bronx Woz",
    rating: 3,
    area: "Bugolobi",
    center: "Tomz Garage",
    img: "../assets/images/mech.png",
    phone: "256704316526",
  },
  {
    id: 3,
    name: "Tom Miky",
    rating: 5,
    area: "Nakasero",
    center: "Shell Nakasero",
    img: "../assets/images/mech.png",
    phone: "256704316526",
  },
  {
    id: 4,
    name: "Kith Lee",
    rating: 5,
    area: "Nakawa",
    center: "Spear Motos",
    img: "../assets/images/mech.png",
    phone: "256704316526",
  },
  {
    id: 5,
    name: "Alex Lee",
    rating: 5,
    area: "Nakawa",
    center: "Spear Motos",
    img: "../assets/images/mech.png",
    phone: "256704316526",
  },
];

const centers = [
  {
    id: 1,
    name: "Go Car Motors",
    rating: 4,
    area: "Nakawa",
    img: "../assets/images/center.png",
    services: ["Painting", "Denting", "Service", "Car Washing"],
    experience: "5+ years",
  },
  {
    id: 2,
    name: "City Oli",
    rating: 3,
    area: "Bugolobi",
    img: "../assets/images/center.png",
    services: ["Painting", "Denting", "Service", "Car Washing"],
    experience: "5+ years",
  },
  {
    id: 3,
    name: "Spear Motors",
    rating: 5,
    area: "Nakawa",
    img: "../assets/images/center.png",
    services: ["Painting", "Denting", "Service", "Car Washing"],
    experience: "5+ years",
  },
  {
    id: 4,
    name: "Kovia Motors",
    rating: 5,
    area: "Nakawa",
    img: "../assets/images/center.png",
    services: ["Painting", "Denting", "Service", "Car Washing"],
    experience: "5+ years",
  },
  {
    id: 5,
    name: "Matuti Garage",
    rating: 5,
    area: "Nakawa",
    img: "../assets/images/center.png",
    services: ["Painting", "Denting", "Service", "Car Washing"],
    experience: "5+ years",
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

export default {
  vegBiryani,
  mechanics,
  centers,
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  fromLocs,
};
