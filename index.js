import express from "express";
import cors from "cors";
import brandRoutes from "./Routes/public/brands-routes.js";
import carInformation from "./Routes/public/car-information.js";

const app = express();
app.use(cors());

app.use(brandRoutes);
app.use(carInformation);

app.listen(3000, console.log("rodando"));

app.get("/", (req, res) => {
  res.json({ status: "Ok" });
});
