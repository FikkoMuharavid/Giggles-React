import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fikkomuharavid16@gmail.com", // Ganti dengan email Anda
    pass: "zxluuhxoftskawif", // Ganti dengan password email Anda
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: '"GIGGLE\'S Support" <your-email@gmail.com>',
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Email failed to send");
  }
};

export default sendEmail;
