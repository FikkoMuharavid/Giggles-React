import express from "express";
import morgan from "morgan";
import cors from "cors";

import accountRoutes from "./routes/accountRoutes.mjs";
import loginUserRoutes from "./routes/loginUserRoutes.mjs";
import forgotPaswRoutes from "./routes/forgotPaswRoutes.mjs";
import notificationRoutes from "./routes/notificationRoutes.mjs";
import aboutUsRoutes from "./routes/aboutUsRoutes.mjs";
import userPostCreationRoutes from "./routes/UserPostCreationRoutes.mjs"; // Perbaiki nama import

const app = express();
const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => res.send("Hello World!"));

// Routes
app.use("/api/accounts", accountRoutes); // Semua endpoint account akan diakses melalui /api/accounts
app.use("/user", loginUserRoutes);
app.use("/api/forgot-password", forgotPaswRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/about-us", aboutUsRoutes);
app.use("/api/userpostcreation", userPostCreationRoutes); // Sesuaikan nama variabel

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:${PORT}`);
});
