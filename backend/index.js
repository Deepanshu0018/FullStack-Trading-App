require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bcrypt = require("bcryptjs");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel"); // 👈 new user model

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Session & Passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "zerodha_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Utility function for timestamp
const getTimestamp = () => {
  return chalk.gray(`[${new Date().toLocaleString()}]`);
};

// Passport Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// ================== ROUTES ==================

// Health-check
app.get("/ping", (req, res) => {
  res.send("✅ Server is running...");
});

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    console.log(getTimestamp(), chalk.green(`🆕 User registered: ${username}`));
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(getTimestamp(), chalk.red("Error in signup:"), err);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login
app.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(
    getTimestamp(),
    chalk.green(`🔑 User logged in: ${req.user.username}`)
  );
  res.json({ message: "Login successful!", user: req.user });
});

// Logout
app.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully!" });
  });
});

// Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(getTimestamp(), chalk.red("Error fetching holdings:"), err);
    res.status(500).send("Error fetching holdings");
  }
});

// Positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(getTimestamp(), chalk.red("Error fetching positions:"), err);
    res.status(500).send("Error fetching positions");
  }
});

// New Order
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
      getTimestamp(),
      chalk.green(`✅ New order saved: ${req.body.name}`)
    );
    res.send("Order saved!");
  } catch (err) {
    console.error(getTimestamp(), chalk.red("Error saving order:"), err);
    res.status(500).send("Error saving order");
  }
});

// ================== START SERVER ==================
mongoose
  .connect(uri)
  .then(() => {
    console.log(chalk.blueBright("======================================"));
    console.log(chalk.cyan.bold("🚀 Zerodha Backend"));
    console.log(
      chalk.yellow("📡 Server running on port: ") + chalk.green.bold(PORT)
    );
    console.log(getTimestamp());
    console.log(
      chalk.greenBright("✅ MongoDB connection established successfully!")
    );
    console.log(chalk.blueBright("======================================"));

    app.listen(PORT, () => {
      console.log(
        getTimestamp(),
        chalk.magenta("🌐 Server is live and listening...")
      );
    });
  })
  .catch((err) => {
    console.log(chalk.redBright("❌ Failed to connect to MongoDB"));
    console.error(chalk.red(err.message));
    console.log(getTimestamp());
    console.log(chalk.blueBright("======================================"));
  });
