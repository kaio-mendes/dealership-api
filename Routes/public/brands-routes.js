import express from "express";

const routes = express.Router();
const mockImg =
  "https://t3.ftcdn.net/jpg/02/50/16/42/360_F_250164295_HKK2v7h0PuupnNo2Oaj0Y248MARyAslI.jpg";
const allCars = [
  {
    id: 1,
    name: "Onix LT",
    year: 2020,
    price: 55000,
    brand: "chevrolet",
    img: mockImg,
  },
  {
    id: 2,
    name: "Tracker Premier",
    year: 2021,
    price: 87000,
    brand: "chevrolet",
    img: mockImg,
  },

  {
    id: 3,
    name: "Fiat Argo Drive",
    year: 2019,
    price: 46000,
    brand: "fiat",
    img: mockImg,
  },
  {
    id: 4,
    name: "Fiat Pulse Audace",
    year: 2022,
    price: 92000,
    brand: "fiat",
    img: mockImg,
  },

  {
    id: 5,
    name: "Ford Ka SE",
    year: 2018,
    price: 39000,
    brand: "ford",
    img: mockImg,
  },
  {
    id: 6,
    name: "EcoSport Titanium",
    year: 2020,
    price: 73000,
    brand: "ford",
    img: mockImg,
  },

  {
    id: 7,
    name: "HB20 Comfort",
    year: 2021,
    price: 69000,
    brand: "hyundai",
    img: mockImg,
  },
  {
    id: 8,
    name: "Creta Prestige",
    year: 2022,
    price: 102000,
    brand: "hyundai",
    img: mockImg,
  },

  {
    id: 9,
    name: "Versa Unique",
    year: 2019,
    price: 58000,
    brand: "nissan",
    img: mockImg,
  },
  {
    id: 10,
    name: "Kicks SV",
    year: 2021,
    price: 88000,
    brand: "nissan",
    img: mockImg,
  },

  {
    id: 11,
    name: "Gol 1.6",
    year: 2018,
    price: 43000,
    brand: "volks",
    img: mockImg,
  },
  {
    id: 12,
    name: "T-Cross Highline",
    year: 2022,
    price: 112000,
    brand: "volks",
    img: mockImg,
  },

  {
    id: 13,
    name: "Tiggo 5X",
    year: 2021,
    price: 91000,
    brand: "chery",
    img: mockImg,
  },
  {
    id: 14,
    name: "Arrizo 6",
    year: 2020,
    price: 73000,
    brand: "chery",
    img: mockImg,
  },

  {
    id: 15,
    name: "Jeep Renegade",
    year: 2022,
    price: 110000,
    brand: "jeep",
    img: mockImg,
  },
  {
    id: 16,
    name: "Jeep Compass",
    year: 2023,
    price: 146000,
    brand: "jeep",
    img: mockImg,
  },

  {
    id: 17,
    name: "Citroen C3",
    year: 2021,
    price: 64000,
    brand: "citroen",
    img: mockImg,
  },
  {
    id: 18,
    name: "Citroen C4 Cactus",
    year: 2022,
    price: 85000,
    brand: "citroen",
    img: mockImg,
  },

  {
    id: 19,
    name: "Peugeot 208 Allure",
    year: 2022,
    price: 83000,
    brand: "peugeot",
    img: mockImg,
  },
  {
    id: 20,
    name: "Peugeot 2008 Griffe",
    year: 2021,
    price: 91000,
    brand: "peugeot",
    img: mockImg,
  },

  {
    id: 21,
    name: "Honda Civic EX",
    year: 2019,
    price: 98000,
    brand: "honda",
    img: mockImg,
  },
  {
    id: 22,
    name: "Honda Fit LX",
    year: 2020,
    price: 69000,
    brand: "honda",
    img: mockImg,
  },

  {
    id: 23,
    name: "Toyota Corolla XEi",
    year: 2022,
    price: 118000,
    brand: "toyota",
    img: mockImg,
  },
  {
    id: 24,
    name: "Toyota Yaris XL",
    year: 2021,
    price: 78000,
    brand: "toyota",
    img: mockImg,
  },

  {
    id: 25,
    name: "Renault Kwid Zen",
    year: 2021,
    price: 47000,
    brand: "renault",
    img: mockImg,
  },
  {
    id: 26,
    name: "Renault Duster Intense",
    year: 2022,
    price: 95000,
    brand: "renault",
    img: mockImg,
  },
];

routes.get("/cars", (req, res) => {
  const brand = req.query.brand;

  if (brand) {
    const filtrado = allCars.filter(
      (car) => car.brand.toLowerCase() === brand.toLowerCase()
    );
    res.json(filtrado);
  } else {
    res.json(allCars);
  }
});

routes.get("/cars/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
    const filtrado = allCars.find((car) => String(car.id) === String(id));

    res.json(filtrado);
  } else {
    res.json({ message: "Nenhum carro encontrado" });
  }
});

export default routes;
