export const headerLinks = [
  {
    id: 2,
    name: "Търсене",
    url: "/search",
  },
  {
    id: 3,
    name: "Средна цена",
    url: "/average-price",
  },
  {
    id: 1,
    name: "",
    url: "/",
    src: "/mobileLogo.svg",
  },
  {
    id: 4,
    name: "Дилъри",
    url: "/dealers",
  },
];

export const headerLinksMobile = [
  {
    id: 1,
    name: "Добави обява",
    url: "/listings/publish",
  },
  {
    id: 2,
    name: "Търсене",
    url: "/search",
  },
  {
    id: 3,
    name: "Средна цена",
    url: "/average-price",
  },
  {
    id: 4,
    name: "Дилъри",
    url: "/dealers",
  },
];

export const searchIcons = [
  {
    id: 1,
    name: "kola",
    link: "/searchIcons/kola.svg",
    linkActive: "/searchIcons/kolaWhite.svg",
    category: "Автомобили и Джипове",
  },
  {
    id: 2,
    name: "bus",
    link: "/searchIcons/bus.svg",
    linkActive: "/searchIcons/busWhite.svg",
    category: "Бусове",
  },
  {
    id: 3,
    name: "motor",
    link: "/searchIcons/motor.svg",
    linkActive: "/searchIcons/motorWhite.svg",
    category: "Мотори",
  },
  {
    id: 4,
    name: "kamion",
    link: "/searchIcons/kamion.svg",
    linkActive: "/searchIcons/kamionWhite.svg",
    category: "Камиони",
  },
  {
    id: 5,
    name: "kolelo",
    link: "/searchIcons/kolelo.svg",
    linkActive: "/searchIcons/koleloWhite.svg",
    category: "Велосипеди",
  },
  {
    id: 6,
    name: "lodka",
    link: "/searchIcons/lodka.svg",
    linkActive: "/searchIcons/lodkaWhite.svg",
    category: "Лодки",
  },
  {
    id: 7,
    name: "industrialni",
    link: "/searchIcons/industrialni.svg",
    linkActive: "/searchIcons/industrialniWhite.svg",
    category: "Индустриални",
  },
];

export const featuredCategories = [
  {
    id: 1,
    url: "/browse/listings?category=Автомобили+и+Джипове&yearMin=2022&yearMax=2025",
    src: "/vehicles/newCars.png",
    name: "Нови Автомобили",
    offers: 11300,
  },
  {
    id: 2,
    url: "/browse/listings?category=Автомобили+и+Джипове&engine=Електрически",
    src: "/vehicles/electricCars.png",
    name: "Е-Автомобили",
    offers: 68300,
  },
  {
    id: 3,
    url: "/browse/listings?category=Автомобили+и+Джипове&additional=Лизинг",
    src: "/vehicles/leasing.png",
    name: "Лизингови",
    offers: 13300,
  },
  {
    id: 4,
    url: "/browse/listings?category=Автомобили+и+Джипове&yearMin=2012&yearMax=2020",
    src: "/vehicles/usedCars.png",
    name: "Втора Употреба",
    offers: 23300,
  },
];

export const popularCategories = [
  {
    id: 1,
    url: "/browse/listings?category=Автомобили+и+Джипове&coupe=Комби",
    src: "/vehicles/familyCars.png",
    name: "Семейни",
    offers: 11300,
  },
  {
    id: 2,
    url: "/browse/listings?category=Автомобили+и+Джипове&priceMax=6000",
    src: "/vehicles/firstCars.png",
    name: "Първа кола",
    offers: 68300,
  },
  {
    id: 3,
    url: "/browse/listings?category=Автомобили+и+Джипове&hpMin=400",
    src: "/vehicles/luxuryCars.png",
    name: "Спортни",
    offers: 44300,
  },
  {
    id: 4,
    url: "/browse/listings?category=Автомобили+и+Джипове&engine=Хибрид",
    src: "/vehicles/ecoFriendly.png",
    name: "Екологични",
    offers: 13300,
  },
];

export const vehicleTypes = [
  {
    id: 1,
    url: "/browse/listings?category=Автомобили+и+Джипове&coupe=Комби",
    src: "/vehicleIcons/wagon.png",
    name: "Комби",
    offers: 11300,
  },
  {
    id: 2,
    url: "/browse/listings?category=Автомобили+и+Джипове&coupe=Седан",
    src: "/vehicleIcons/saloon.png",
    name: "Седан",
    offers: 68300,
  },
  {
    id: 3,
    url: "/browse/listings?category=Автомобили+и+Джипове&coupe=Кабриолет",
    src: "/vehicleIcons/convertible.png",
    name: "Кабриолет",
    offers: 44300,
  },
  {
    id: 4,
    url: "/browse/listings?category=Автомобили+и+Джипове&coupe=Джип",
    src: "/vehicleIcons/suv.png",
    name: "Джип",
    offers: 13300,
  },
];

export const newestListings = [
  {
    id: 1,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: true,
    isTop: false,
  },
  {
    id: 2,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: true,
    isTop: false,
  },
  {
    id: 3,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: false,
    isTop: true,
  },
  {
    id: 4,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: false,
    isTop: true,
  },
  {
    id: 5,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: false,
    isTop: false,
  },
  {
    id: 6,
    title: "BMW X3 3.0d xDrive M-Sport",
    kilometers: "190.500km",
    price: "58 000лв.",
    listingImg: "/car1.png",
    region: "обл. София-град",
    datePosted: "16:30PM, 03.12",
    isVip: false,
    isTop: true,
  },
];

export const perks = [
  {
    id: 1,
    title:
      "Голямо разнообразие от обяви за нови или употребявани автомобили от различни марки и модели",
    icon: "/perk1.svg",
  },
  {
    id: 2,
    title:
      "Лесно и бързо търсене: Използвайте разширеното ни търсене, за да намерите точно това, което искате.",
    icon: "/perk2.png",
  },
  {
    id: 3,
    title:
      "Проверка на актуална цена: Ние предлагаме информация за актуалност на цената на Вашия автомобил",
    icon: "/perk3x.png",
  },
  {
    id: 4,
    title: "Работим с всички авторизирани и доказани дилъри в страната.",
    icon: "/perk4.png",
  },
];

export const sellCarSteps = [
  {
    id: 1,
    title: "Безплатна регистрация",
    subTitle: "Регистрирайте се и публикувайте обявата си безплатно.",
    url: "/register",
  },
  {
    id: 2,
    title: "Детайлна обява",
    subTitle:
      "Добавете снимки и подробна информация за автомобила си, за да привлечете повече интерес.",
    url: "/listings/publish",
  },
  {
    id: 3,
    title: "Активиране на обявата",
    subTitle: "Вашата обява ще бъде видяна от хиляди посетители всеки ден.",
    url: "",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Информация",
    sublinks: [
      {
        id: 1,
        title: "За нас",
        link: "/about-us",
      },
      {
        id: 2,
        title: "Кариери",
        link: "/careers",
      },
      {
        id: 3,
        title: "Дилъри",
        link: "/dealers",
      },
      {
        id: 4,
        title: "Контакт",
        link: "/contact",
      },
    ],
  },
  {
    id: 2,
    title: "Легални",
    sublinks: [
      {
        id: 1,
        title: "GDPR",
        link: "/gdpr",
      },
      {
        id: 2,
        title: "Общи условия",
        link: "/general-conditions",
      },
      {
        id: 3,
        title: "Бисквитки",
        link: "/cookies",
      },
      {
        id: 4,
        title: "Помощ",
        link: "/help",
      },
    ],
  },
  {
    id: 3,
    title: "Бързи страници",
    sublinks: [
      {
        id: 1,
        title: "Автомобили и джипове",
        link: "/cars",
      },
      {
        id: 2,
        title: "Търсене",
        link: "/search",
      },
      {
        id: 3,
        title: "Моите обяви",
        link: "/listings",
      },
      {
        id: 4,
        title: "Добави обява",
        link: "/listings/publish",
      },
    ],
  },
  {
    id: 4,
    title: "Дилъри",
    sublinks: [
      {
        id: 1,
        title: "Всички дилъри",
        link: "/dealers",
      },
      {
        id: 2,
        title: "Стани дилър",
        link: "/apply",
      },
      {
        id: 3,
        title: "ЧЗВ",
        link: "/faq",
      },
    ],
  },
];

export const popularBrands = [
  {
    id: 1,
    title: "Wolkswagen",
    logo: "/vw.webp",
  },
  {
    id: 2,
    title: "Mercedes",
    logo: "/mb.webp",
  },
  {
    id: 3,
    title: "BMW",
    logo: "/bmw.webp",
  },
  {
    id: 4,
    title: "Audi",
    logo: "/audi.webp",
  },
  {
    id: 5,
    title: "Ford",
    logo: "/ford.webp",
  },
  {
    id: 6,
    title: "Opel",
    logo: "/opel.webp",
  },
];

export const brandsModelMapping: Record<string, string[]> = {
  Mercedes: [
    "A-Class",
    "B-Class",
    "C-Class",
    "E-class",
    "S-Class",
    "CLS-Class",
    "ML-Class",
    "GLE-Class",
  ],
  BMW: [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "6 Series",
    "7 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
  ],
  Toyota: ["Corolla", "Camry", "RAV4", "Hilux"],
  Wolkswagen: ["Golf", "Polo", "Touareg", "Arteon"],
  Audi: ["A3", "A4", "A5", "A6", "A7", "Q3", "Q5", "Q7", "Q8"],
  Ford: ["Mondeo", "Focus", "Puma", "Kuga", "Fiesta"],
  Opel: ["Astra", "Omega", "Insignia", "Corsa", "Meriva", "Zafira"],
};

export const categoriesModelMapping: Record<string, string[]> = {
  "Автомобили и Джипове": [
    "Mercedes",
    "BMW",
    "Toyota",
    "Wolkswagen",
    "Audi",
    "Ford",
    "Opel",
  ],
  Бусове: ["Mercedes", "Peugeot", "Iveco", "Fiat", "Citroen"],
  Мотори: ["Honda", "Yamaha", "Suzuki", "Kawasaki", "BMW", "Ktm"],
  Камиони: ["Mercedes", "MAN", "Scania", "Volvo", "Daf", "Iveco"],
};

export const exteriorColors = [
  {
    id: 1,
    name: "Бял",
    color: "#FFFFFF",
    title: "whiteCar",
  },
  {
    id: 2,
    name: "Черен",
    color: "#202020",
    title: "blackCar",
  },
  {
    id: 3,
    name: "Жълт",
    color: "#ECD20E",
    title: "yellowCar",
  },
  {
    id: 4,
    name: "Сив",
    color: "#DFDFDF",
    title: "grayCar",
  },
  {
    id: 5,
    name: "Червен",
    color: "#FC0707",
    title: "redCar",
  },
  {
    id: 6,
    name: "Оранжев",
    color: "#E78F03",
    title: "orangeCar",
  },
  {
    id: 7,
    name: "Тъмно сив",
    color: "#999999",
    title: "darkGrayCar",
  },
  {
    id: 8,
    name: "Зелен",
    color: "#50A856",
    title: "greenCar",
  },
  {
    id: 9,
    name: "Лилав",
    color: "#730ACF",
    title: "purpleCar",
  },
  {
    id: 10,
    name: "Бежов",
    color: "#DAC792",
    title: "beigeCar",
  },
  {
    id: 11,
    name: "Син",
    color: "#0655FF",
    title: "blueCar",
  },
  {
    id: 12,
    name: "Розов",
    color: "#D81FBF",
    title: "pinkCar",
  },
  {
    id: 13,
    name: "Златен",
    color: "#E1A910",
    title: "goldCar",
  },
];

export const interiorColors = [
  {
    name: "Черен",
    color: "#202020",
    title: "black",
  },
  {
    name: "Бежов",
    color: "#DAC792",
    title: "beige",
  },
  {
    name: "Сив",
    color: "#DFDFDF",
    title: "gray",
  },
  {
    name: "Червен",
    color: "#FC0707",
    title: "red",
  },
  {
    name: "Друг",
    color: "#FFFFFF",
    title: "other",
  },
  {
    name: "Син",
    color: "#0655FF",
    title: "blue",
  },
];

export const interiorMaterial = [
  "Алкантара",
  "Текстил",
  "Изкуствена Кожа",
  "Велур",
  "Полу-кожа",
  "Естествена кожа",
  "Друг",
];

export const interiorMaterials = [
  {
    id: 1,
    name: "Материал",
    materials: [
      "Алкантара",
      "Текстил",
      "Изкуствена Кожа",
      "Велур",
      "Полу-кожа",
      "Естествена кожа",
      "Друг",
    ],
  },
];

export const interiorColorsArr = [
  {
    id: 1,
    name: "Цвят на интериор",
    colors: ["Черен", "Бежов", "Сив", "Червен", "Син", "Друг"],
  },
];

export const safetyExtras = [
  {
    id: 1,
    name: "Пътни асистенти",
    extras: [
      "Система за динамична устойчивост",
      "Система за защита от пробуксуване",
      "Система за контрол на дистанцията",
      "Система за контрол на спускането",
      "Антиблокираща система",
      "Контрол на налягането на гумите",
      "Система за подпомагане на спирането",
      "Ел.разпределяне на спирачното усилие",
      "Електронна програма за стабилизиране",
    ],
  },
  {
    id: 2,
    name: "Предпазни функции",
    extras: [
      "Система ISOFIX",
      "Въздушни възглавници - Задни",
      "Въздушни възглавници - Предни",
      "Въздушни възглавници - Странични",
      "Автоматичен контрол на стабилността",
    ],
  },
  {
    id: 3,
    name: "Светлини и видимост",
    extras: [
      "LED фарове",
      "Халогенни фарове",
      "Ксенонови фарове",
      "Адаптивни предни светлини",
    ],
  },
  {
    id: 4,
    name: "Защита против кражби",
    extras: [
      "Аларма",
      "Автокаско",
      "Имобилайзер",
      "Централно заключване",
      "GPS система за проследяване",
    ],
  },
];

export const comfortExtras = [
  {
    id: 1,
    name: "Климатична система",
    extras: [
      "Печка",
      "Климатик",
      "Климатроник",
      "Отопление на волана",
      "Подгряване на предното стъкло",
    ],
  },
  {
    id: 2,
    name: "Паркинг асистенти",
    extras: [
      "Парктроник",
      "Дистроник",
      "Камера за задно виждане",
      "Система за самопаркиране",
      "Радар сензори",
    ],
  },
  {
    id: 3,
    name: "Седалки",
    extras: [
      "Подгряване на седалките",
      "Обдухване на седалките",
      "Ел. регулиране на седалките",
      "Масаж и/или лумбална опора",
    ],
  },
  {
    id: 4,
    name: "Допълнителни екстри",
    extras: [
      "Auto Start Stop function",
      "Bluetooth  handsfree система",
      "DVD, TV",
      "Steptronic, Tiptronic",
      "USB, AUX audio video изводи",
      "Безключово палене",
      "Ел. регулиране на окачването",
      "Сензор за дъжд",
    ],
  },
];

export const multimediaExtras = [
  {
    id: 1,
    name: "Мултимедия",
    extras: [
      "Навигация",
      "Стерео уредба",
      "Тъчскрийн дисплей",
      "Harman Kardon",
      "Bang&Olufsen",
      "BOSE",
    ],
  },
  {
    id: 2,
    name: "Контролиране",
    extras: [
      "Парктроник",
      "Дистроник",
      "Камера за задно виждане",
      "Система за самопаркиране",
      "Радар сензори",
    ],
  },
  {
    id: 3,
    name: "Свързаност и интерфейси",
    extras: [
      "Bluetooth",
      "MP3 Audio/DVD TV",
      "Carplay/Android auto",
      "Wi-Fi/3G/4G",
    ],
  },
  {
    id: 4,
    name: "Функции на дисплея",
    extras: ["3D дисплей", "Head-up Display - HUD", "Virtual Cockpit"],
  },
];

export const additionalExtras = [
  {
    id: 1,
    name: "Гуми и джанти",
    extras: [
      "Лети джанти",
      "Спорт пакет гуми",
      "Рънфлат гуми",
      "Желязни джанти",
      "Тасове",
    ],
  },
  {
    id: 2,
    name: "Специално оборудване",
    extras: [
      "TAXI",
      "За хора с увреждания",
      "Катафалка",
      "Линейка",
      "Учебен",
      "Хладилен",
      "Хомологация N1",
    ],
  },
  {
    id: 3,
    name: "Други",
    extras: ["Термопомпа", "Лебедка", "Брониран", "OFFROAD пакет", "Лизинг"],
  },
];

export const steps = [
  "Информация за автомобила",
  "Добавяне на снимки и видео",
  "Финализиране и публикуване",
];

export const listingOptions = [
  {
    id: 1,
    name: "BASIC",
    price: "за 35 дни (безплатно)",
    pricing: 0.0,
    color: "#4A4A4A",
    perks: [
      "Публикуване в категорията на сайта",
      "Възможност за добавяне на снимки и детайли",
    ],
  },
  {
    id: 2,
    name: "VIP",
    price: "за 7 дни (4.99лв. с ДДС)",
    pricing: 4.99,
    color: "#FF9807",
    perks: [
      "Приоритетно показване над BASIC обявите",
      "Маркировка 'VIP' за по-голяма разпознаваемост",
      "Повишен лимит на снимките (повече кадри на автомобила)",
      "Подобрено позициониране в търсенето",
    ],
  },
  {
    id: 3,
    name: "TOP",
    price: "за 7 дни (9.99лв. с ДДС)",
    pricing: 9.99,
    color: "#0099FF",
    perks: [
      "ТОП позиция на началната страница за максимална видимост",
      "Приоритетно показване над VIP и BASIC обявите",
      "Маркировка 'TOP' за допълнително внимание",
      "Разширена статистика + известия при интерес от купувачи",
      "Опция за автоматично подновяване след изтичане",
    ],
  },
];

export const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
];

export const months = [
  "Януари",
  "Февруари",
  "Март",
  "Април",
  "Май",
  "Юни",
  "Юли",
  "Август",
  "Септември",
  "Октомври",
  "Ноември",
  "Декември",
];

export const authorizedDealers = [
  {
    id: 1,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
  {
    id: 2,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
  {
    id: 3,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
  {
    id: 4,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
  {
    id: 5,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
  {
    id: 6,
    name: "WINCARS ОФИС ЮГ",
    dateJoined: "09.11.2020",
    location: "гр. София, бул. България 101",
    phone: "0877222333",
  },
];

// DETAILED SEARCH FORM FIELDS:

type FieldConfig = {
  type: "dropdown" | "input" | "checkbox";
  label: string;
  key: keyof FormData;
  options?: string[];
};

type FormData = {
  priceMin: string;
  priceMax: string;
  region: string;
  yearMin: string;
  yearMax: string;
  hpMin: string;
  hpMax: string;
  location: string;
  coupe: string;
  euro: string;
  engine: string;
  gearbox: string;
  color: string;
  maxMileage: string;
  safety: string[];
  comfort: string[];
  exterior: string[];
  interior: string[];
  security: string[];
  others: string[];
  filter: string;
};

export const formFields: FieldConfig[] = [
  {
    type: "dropdown",
    label: "Регион",
    key: "region",
    options: ["София", "Пловдив", "Варна"],
  },
  { type: "input", label: "Цена от", key: "priceMin" },
  { type: "input", label: "Цена до", key: "priceMax" },
  {
    type: "dropdown",
    label: "Година от",
    key: "yearMin",
    options: [
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
    ],
  },
  {
    type: "dropdown",
    label: "Година до",
    key: "yearMax",
    options: [
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
    ],
  },
  { type: "input", label: "Мощност (к.с.) от", key: "hpMin" },
  { type: "input", label: "Мощност (к.с.) до", key: "hpMax" },
  {
    type: "dropdown",
    label: "Евростандарт",
    key: "euro",
    options: ["Евро 1", "Евро 2", "Евро 3", "Евро 4", "Евро 5", "Евро 6"],
  },
  {
    type: "dropdown",
    label: "Двигател",
    key: "engine",
    options: ["Бензинов", "Дизелов", "Електрически", "Хибрид"],
  },
  {
    type: "dropdown",
    label: "Скоростна кутия",
    key: "gearbox",
    options: ["Ръчна", "Автоматична"],
  },
  {
    type: "dropdown",
    label: "Цвят",
    key: "color",
    options: [
      "Бял",
      "Черен",
      "Жълт",
      "Сив",
      "Червен",
      "Оранжев",
      "Тъмно сив",
      "Зелен",
      "Лилав",
      "Бежов",
      "Син",
      "Розов",
      "Златен",
    ],
  },
  {
    type: "dropdown",
    label: "Макс пробег (км)",
    key: "maxMileage",
    options: [
      "Без значение",
      "До 10 000км",
      "До 20 000км",
      "До 30 000км",
      "До 40 000км",
      "До 50 000км",
      "До 100 000км",
      "До 200 000км",
      "Над 300 000км",
    ],
  },
  {
    type: "dropdown",
    label: "Купе",
    key: "coupe",
    options: [
      "Хечбек",
      "Седан",
      "Комби",
      "Джип",
      "Кабриолет",
      "Лимузина",
      "Стреч-лимузина",
    ],
  },
];

export type Listing = {
  id: string | number;
  category: string;
  brand: string;
  model: string;
  modification: string;
  tuning: string;
  engine: string;
  gearbox: string;
  vin: string;
  price: number;
  currency: string;
  mileage: number;
  location: string;
  date_year: number;
  date_month: string;
  litres: string;
  euro: string;
  horsePower: string;
  phoneNumber: string;
  exterior_color: string;
  interior_material: string;
  interior_color: string;
  multimedia_extras: [];
  safety_extras: [];
  comfort_extras: [];
  additionalExtras: [];
  description: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  imageUrls: string;
  sellerEmail: string;
  isPromoted: string;
};

export type SearchCriteria = {
  category: string;
  brand: string;
  model: string;
  priceMin: string;
  priceMax: string;
  region: string;
  yearMin: string;
  yearMax: string;
  hpMin: string;
  hpMax: string;
  coupe: string;
  euro: string;
  engine: string;
  gearbox: string;
  color: string;
  maxMileage: string;
  materials: string;
  intColor: string;
  sort: string;
  safety: string[];
  location: string;
  comfort: string[];
  multimedia: string[];
  additional: string[];
  exterior: string[];
  interior: string[];
  security: string[];
  others: string[];
  filter: string;
};

// USER INFO TYPE

export type UserInfoData = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
};
