/**
 * Cloud Functions for the portfolio project.
 * @file Cloud Functions for the portfolio project.
 * @author Alex Youssef
 */

"use strict";

import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { setGlobalOptions } from "firebase-functions/v2";
import { defineString, defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import { user } from "firebase-functions/v1/auth";
import nodemailer from "nodemailer";

// Initialize Firebase Admin SDK
initializeApp();

// Set global options for all functions in this file (e.g., region)
setGlobalOptions({ region: "us-central1" });

// Define configuration parameters for the function.
const GMAIL_EMAIL = defineString("GMAIL_EMAIL");
const GMAIL_SENDER_NAME = defineString("GMAIL_SENDER_NAME", {
  default: "Portfolio Meeting Scheduler",
});
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

// Lazily initialize the Nodemailer transporter to improve performance.
let transporter;

/**
 * Sends an email notification when a new meeting is created in Firestore.
 * This function is triggered by the creation of a new document in the 'meetings'
 * collection of the 'portfoliodb' database.
 */
export const notifyOnNewMeeting = onDocumentCreated(
  {
    document: "meetings/{meetingId}",
    database: "portfoliodb",
    secrets: [GMAIL_APP_PASSWORD],
  },
  async (event) => {
    if (!transporter) {
      logger.log("Initializing Nodemailer transporter...");
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: GMAIL_EMAIL.value(),
          pass: GMAIL_APP_PASSWORD.value(),
        },
      });
      logger.log("Nodemailer transporter initialized.");
    }

    if (!event.data) {
      logger.warn("No event data found for this trigger. Exiting function.");
      return;
    }

    const meeting = event.data.data();
    const meetingId = event.params.meetingId;

    if (
      !meeting.title ||
      !meeting.date ||
      !meeting.time ||
      !meeting.participants ||
      !Array.isArray(meeting.participants) ||
      meeting.participants.length === 0
    ) {
      logger.warn(
        `Meeting document ${meetingId} is missing required fields.`,
        { structuredData: true, meetingId, meetingData: meeting }
      );
      return;
    }

    const to = meeting.participants.join(",");
    const sender = `${GMAIL_SENDER_NAME.value()} <${GMAIL_EMAIL.value()}>`;

    const mailOptions = {
      from: sender,
      to: to,
      subject: `New Meeting Scheduled: ${meeting.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h1 style="font-size: 24px; color: #0b2545; border-bottom: 2px solid #eee; padding-bottom: 10px;">
              Meeting Invitation
            </h1>
            <p>Hello,</p>
            <p>You have been invited to a new meeting. Here are the details:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              <p style="margin: 5px 0;"><strong>Title:</strong> ${meeting.title}</p>
              <p style="margin: 5px 0;"><strong>Date:</strong> ${meeting.date}</p>
              <p style="margin: 5px 0;"><strong>Time:</strong> ${meeting.time}</p>
              <p style="margin: 5px 0;"><strong>Description:</strong> ${meeting.description || "No description provided."}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #888;">
              This is an automated notification from the Portfolio application.
            </p>
          </div>
        </div>
      `.trim(),
    };

    try {
      logger.log(`Attempting to send notification for meeting ${meetingId} to: ${to}`);
      await transporter.sendMail(mailOptions);
      logger.log(`Meeting notification email sent successfully for meeting ${meetingId}.`);
    } catch (error) {
      logger.error(`Error sending notification email for meeting ${meetingId}:`, error);
      throw error;
    }
  }
);

/**
 * Creates a user entry in Firestore when a new user is created in Firebase Auth.
 */
export const createDbUserEntry = user().onCreate((userRecord) => {
  const { uid, email } = userRecord;
  logger.log(`New user created: ${email} (UID: ${uid})`);

  // Ensure you get the correct Firestore instance if you named it.
  // If you are using the default database, you can just use getFirestore().
  const db = getFirestore(); 

  return db.collection("users").doc(uid).set({
    email: email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    roles: ["user"],
  });
});

// You can add more functions below as needed for your portfolio project.
