import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Brosa AI" <${process.env.SMTP_EMAIL}>`,
      to: "hello@brosa.ai",
      subject: "New Newsletter Subscription 🚀",
      html: `
        <h2>New Subscriber</h2>
        <p><strong>${email}</strong> has subscribed to Brosa AI newsletter.</p>
      `,
    });

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
