import express from "express";
import {
  getNotifications,
  addNotification,
  markAsRead,
} from "../controllers/notificationController.mjs";

const router = express.Router();

// Rute untuk mendapatkan notifikasi user tertentu
router.get("/:userId", getNotifications);

// Rute untuk menambahkan notifikasi baru
router.post("/", addNotification);

// Rute untuk menandai notifikasi sebagai sudah dibaca
router.patch("/:id", markAsRead);

export default router;
