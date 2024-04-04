const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const productRoutes = require("./routes/productRoutes");
const mongoose = require("mongoose");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/prod", productRoutes);


app.get("/", (req, res, next) => {
  res.status(200).send("Hello Server Chalu hai......");
});

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is Listening on ${process.env.PORT}....`.bgGreen.white);
  console.log("");
  console.log(`http://localhost:${process.env.PORT}`.bgBlue);
});
