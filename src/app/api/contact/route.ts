import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  const myEmail = process.env.EMAIL_USERNAME;
  const myEmailPassword = process.env.EMAIL_PASSWORD;
  const data = await req.json();
  const senderEmail = data.email;
  console.log(senderEmail);
  const senderMessage = data.message;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: myEmail,
      pass: myEmailPassword,
    },
  });
  const info = {
    from: myEmail,
    subject: "Nodemailer from portfolio",
    to: myEmail,
    replyTo: senderEmail,
    html: `<p>You have received a new message from your portfolio contact form.</p>
    <p><strong>Sender Email:</strong> ${senderEmail}</p>
    <p><strong>Message:</strong></p>
    <p>${senderMessage}</p>`,
  };
  try {
    await transporter.sendMail(info);
    return NextResponse.json({ status: 200, message: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "failed" });
  }
}
