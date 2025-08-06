import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const routes = express.Router();

routes.post("/new-car", async (req, res) => {
  const mockImg =
    "https://t3.ftcdn.net/jpg/02/50/16/42/360_F_250164295_HKK2v7h0PuupnNo2Oaj0Y248MARyAslI.jpg";
  try {
    const newCar = req.body;
    const createCar = await prisma.cars.create({
      data: {
        img: newCar.image,
        name: newCar.name,
        price: newCar.price,
        brand: newCar.brand,
        status: newCar.status,
        description: newCar.description,
        featured: newCar.featured || false,
        year: newCar.year,
        transmission: newCar.transmission,
        fuel: newCar.fuel,
        km: newCar.km,
        doors: newCar.doors,
        color: newCar.color,
        notes: newCar.notes,
        featured: newCar.featured,
      },
    });
    res.status(200).json({ message: "novo carro criado com sucesso" });
    console.log("tudo certo");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "erro ao inserir carro" });
  }
});

routes.get("/cars", async (req, res) => {
  const { brand } = req.query;

  try {
    if (brand) {
      const filterBrand = await prisma.cars.findMany({
        where: {
          brand: {
            contains: brand.toString(),
          },
        },
      });
      return res.status(200).json(filterBrand);
    }

    const allCars = await prisma.cars.findMany();
    return res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
  }
});

export default routes;
