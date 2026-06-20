const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../listing.js");
const User = require("../user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await User.deleteMany({});

  const newUser = new User({
    username: "demo",
    email: "demo@example.com",
  });

  const registeredUser = await User.register(newUser, "hello");

  console.log("Created User:", registeredUser);
  const user = await User.findOne();

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: registeredUser._id,
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
