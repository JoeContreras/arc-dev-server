const express = require("express");
const { receivedEstimate, estimateConfirmationEmail } = require("../estimate");
const router = new express.Router();

router.post("/estimate", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      message,
      total,
      service,
      category,
      platforms,
      features,
      users,
      customFeatures,
    } = req.body;

    receivedEstimate(
      name,
      email,
      phone,
      message,
      total,
      service,
      category,
      platforms,
      features,
      users,
      customFeatures
    );
    estimateConfirmationEmail(name, email);
    res.status(200).send("Your estimate request has been sent successfully.");
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
