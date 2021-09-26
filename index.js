require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRouter = require("./src/routes/Contact");
const estimateRouter = require("./src/routes/Estimate");

const app = express();
app.use(express.json());
app.use(cors());

app.use(contactRouter);
app.use(estimateRouter);

/*
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
