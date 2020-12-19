const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter.js");
const bodyParser = require("body-parser");
const productRouter = require("./routers/productRouter.js");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/jasmine", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
// app.use("/api/product/:id", productRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`RUNNING ON http://localhost:${port}`);
});
