import express from "express";

const routes = express.Router();
const mockImg =
  "https://t3.ftcdn.net/jpg/02/50/16/42/360_F_250164295_HKK2v7h0PuupnNo2Oaj0Y248MARyAslI.jpg";

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
