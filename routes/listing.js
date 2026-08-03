const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const {
  isLoggedIn,
  isOwner,
  validateListing,
} = require("../routes/middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing),
  );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Favorite Route
router.post("/:id/favorite", isLoggedIn, async (req, res) => {
  console.log("Favorite route called");
  const listingId = req.params.id;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: {
        favorites: listingId,
      },
    },
    { new: true },
  );

  console.log("Favorites:", user.favorites);

  res.redirect(req.get("Referrer") || "/listings");
  // res.redirect(`/listings/${listingId}`);
});

// Unfavorite Route
router.post("/:id/unfavorite", isLoggedIn, async (req, res) => {
  console.log("Unfavorite route called");
  const listingId = req.params.id;

  await User.findByIdAndUpdate(req.user._id, {
    $pull: {
      favorites: listingId,
    },
  });

  res.redirect(req.get("Referrer") || "/listings");
  // res.redirect(`/listings/${listingId}`);
});

router.get("/favorites", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate("favorites");

  res.render("listings/favorites.ejs", {
    favorites: user.favorites,
  });
});

router
  .route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
