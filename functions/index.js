import admin from "firebase-admin";
import nodemailer from "nodemailer";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { setGlobalOptions } from "firebase-functions/v2";

admin.initializeApp();
setGlobalOptions({ region: "us-central1" }); // Changed region here

// Lazily initialize the transporter inside the function
let transporter;

export const sendMeetingNotification = onDocumentCreated({
    document: "meetings/{meetingId}",
    database: "portfolio"
  }, async (event) => {
    // For v2 functions, use environment variables (process.env) instead of functions.config()
    // Make sure you have GMAIL_EMAIL and GMAIL_PASSWORD set in your environment.
    // For local testing, you can use a .env file. For deployment, use secrets.
    const gmailEmail = process.env.GMAIL_EMAIL;
    const gmailPassword = process.env.GMAIL_PASSWORD;

    // Initialize transporter if it hasn't been initialized yet
    if (!transporter) {
      if (!gmailEmail || !gmailPassword) {
        console.error(
          "Gmail configuration is missing in environment variables. " +
          "Please set GMAIL_EMAIL and GMAIL_PASSWORD."
        );
        // Exit the function if configuration is missing
        return;
      }
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailEmail,
          pass: gmailPassword,
        },
      });
    }

    const meeting = event.data.data();

    const mailOptions = {
      from: `Your Name <${gmailEmail}>`,
      to: meeting.participants.join(","),
      subject: `New Meeting Scheduled: ${meeting.title}`,
      html: `
        <h1>New Meeting Scheduled</h1>
        <p><strong>Title:</strong> ${meeting.title}</p>
        <p><strong>Date:</strong> ${meeting.date}</p>
        <p><strong>Time:</strong> ${meeting.time}</p>
        <p><strong>Description:</strong> ${meeting.description}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Meeting notification email sent successfully.");
    } catch (error) {
      console.error("Error sending meeting notification email:", error);
    }
  });
