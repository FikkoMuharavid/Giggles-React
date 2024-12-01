import express from "express";
import morgan from "morgan";
import cors from "cors";

import accountRoutes from "./routes/accountRoutes.mjs";
import loginUserRoutes from "./routes/loginUserRoutes.mjs";
import forgotPaswRoutes from "./routes/forgotPaswRoutes.mjs";


const app = express();
const PORT = 5000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.get("/", (req, res, next) => res.send("Hello World!"));

app.use("/api/accounts", accountRoutes); // Semua endpoint account akan diakses melalui /api/accounts
app.use("/user", loginUserRoutes);
app.use("/api/forgot-password", forgotPaswRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} http://localhost:${PORT}`)
);
