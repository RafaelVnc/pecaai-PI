import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/cardapioRoute.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use(cors());

mongoose
    .connect(MONGOURL)
    .then(() => {
      console.log("DB connected successfully.");
      app.listen(PORT,() => {
        console.log(`Server is running on port : ${PORT} `);
      });
    })
    .catch((error) => console.log(error));

app.use("/uploads", express.static("uploads"));

app.use("/api", route);
