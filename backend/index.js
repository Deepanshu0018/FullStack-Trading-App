require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");

// Import models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Route: GET /allHoldings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    console.log(chalk.green(`✅ Fetched ${allHoldings.length} holdings`));
    res.json(allHoldings);
  } catch (error) {
    console.error(chalk.red("❌ Error fetching holdings:"), error);
    res.status(500).json({ message: "Error fetching holdings", error });
  }
});

// Route: GET /allPositions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    console.log(chalk.green(`✅ Fetched ${allPositions.length} positions`));
    res.json(allPositions);
  } catch (error) {
    console.error(chalk.red("❌ Error fetching positions:"), error);
    res.status(500).json({ message: "Error fetching positions", error });
  }
});

// Route: POST /newOrder
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    console.log(
      chalk.blue(
        `📝 New order saved → ${req.body.name} | Qty: ${req.body.qty} | Price: ${req.body.price} | Mode: ${req.body.mode}`
      )
    );
    res.send("Order saved!");
  } catch (error) {
    console.error(chalk.red("❌ Error saving order:"), error);
    res.status(500).json({ message: "Error saving order", error });
  }
});

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(chalk.green.bold("✅ MongoDB connected successfully!"));
    app.listen(PORT, () => {
      console.log(
        chalk.cyan.bold("\n==========================================")
      );
      console.log(chalk.blue.bold(`🚀 Server running on port ${PORT}`));
      console.log(chalk.yellow.bold(`🌐 URL: http://localhost:${PORT}`));
      console.log(
        chalk.cyan.bold("==========================================\n")
      );
    });
  })
  .catch((error) => {
    console.error(chalk.red.bold("❌ MongoDB connection error:"), error);
  });
