import database from "../config/database.mjs";

// Ambil semua notifikasi untuk user tertentu
export const getNotifications = async (req, res) => {
  const { userId } = req.params;
  try {
    const [rows] = await database.query(
      "SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(`Error fetching notifications: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Tambahkan notifikasi baru
export const addNotification = async (req, res) => {
  const { userId, message } = req.body;
  try {
    const [result] = await database.query(
      "INSERT INTO notifications (user_id, message) VALUES (?, ?)",
      [userId, message]
    );
    res
      .status(201)
      .json({ message: "Notification added successfully", id: result.insertId });
  } catch (error) {
    console.error(`Error adding notification: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Tandai notifikasi sebagai sudah dibaca
export const markAsRead = async (req, res) => {
  const { id } = req.params;
  try {
    await database.query("UPDATE notifications SET read = 1 WHERE id = ?", [id]);
    res.status(200).json({ message: "Notification marked as read" });
  } catch (error) {
    console.error(`Error marking notification as read: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
