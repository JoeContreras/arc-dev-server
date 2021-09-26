const express = require("express");
const { sendEmail, sendConfirmationEmail } = require("../email");
const router = new express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    sendEmail(name, email, phone, message);
    sendConfirmationEmail(email, name);
    res.status(200).send("Email sent successfully");
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
