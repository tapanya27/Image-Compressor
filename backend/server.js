import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { Webhook } from 'svix'
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import User from './models/userModel.js';

dotenv.config()
const app = express()
connectDB();

app.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payloadString, svixHeaders);

      const { id, ...attributes } = evt.data;
      const eventType = evt.type;

      console.log("Received event:", eventType);

      if (eventType === "user.created") {

        const firstName=attributes.first_name;
        const lastName=attributes.last_name;

        console.log(firstName);

        const user=new User({
          clerkUserId:id,
          firstName:firstName,
          lastName:lastName,
        })

        await user.save();
        console.log('User is created');
        //console.log(`user ${id} is ${eventType}`);
        //console.log(attributes);
      }

      return res.status(200).json({
        success: true,
        message: "Webhook received",
      });
    } catch (err) {
      console.error("Webhook error:", err);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
