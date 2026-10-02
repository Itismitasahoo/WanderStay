const Listing = require("../models/listing");
const User = require("../models/user");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const { category } = req.query;

  console.log("CATEGORY:", category);

  let allListings;

  if (category) {
    allListings = await Listing.find({ category: category });
  } else {
    allListings = await Listing.find({});
  }

  console.log("NUMBER OF LISTINGS:", allListings.length);

  let favorites = [];

  if (req.user) {
    const user = await User.findById(req.user._id);
    favorites = user.favorites.map((fav) => fav.toString());
  }

  res.render("listings/index.ejs", {
    allListings,
    favorites,
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  console.log("OWNER:", listing.owner);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  // res.render("listings/show.ejs", { listing });

  let isFavorite = false;

  if (req.user) {
    const user = await User.findById(req.user._id);

    isFavorite = user.favorites.some(
      (fav) => fav.toString() === listing._id.toString(),
    );
  }

  res.render("listings/show.ejs", {
    listing,
    isFavorite,
  });
};

module.exports.createListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);

    // image (your existing multer/cloudinary flow)
    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    const place = `${newListing.location}, ${newListing.country}`;

    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(place)}`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "wanderlust-app",
      },
    });

    if (response.data.length > 0) {
      newListing.lat = parseFloat(response.data[0].lat);
      newListing.lng = parseFloat(response.data[0].lon);
    } else {
      newListing.lat = 20.2961; // fallback Bhubaneswar
      newListing.lng = 85.8245;
    }

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    req.flash("error", "Location not found");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", " Listing Deleted.");
  res.redirect("/listings");
};
