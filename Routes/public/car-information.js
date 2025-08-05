import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const routes = express.Router();

routes.post("/new-car", async (req, res) => {
  try {
    const newCar = req.body;
    const createCar = await prisma.cars.create({
      data: {
        img: newCar.img,
        name: newCar.name,
        price: newCar.price,
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "erro ao inserir carro" });
  }
});

routes.get("/cars", async (req, res) => {
  try {
    const allCars = await prisma.cars.findMany();
    return res.status(201).json(allCars);
  } catch (error) {
    console.log(error);
  }
});

export default routes;
