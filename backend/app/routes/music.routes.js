const express = require('express')
const router = express.Router()
const multer = require('multer');
const fileExtension = require('file-extension')
const crypto = require('crypto');

const controller = require("../controllers/music.controller");

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get(
  "/albums",
  [],
  controller.getAlbums
);

router.get(
  "/albums/:id",
  [],
  controller.getAlbum
);

router.get(
  "/songs/:id",
  [],
  controller.getSong
);

router.get(
  "/songs",
  [],
  controller.getSongs
);

router.get(
  "/artists",
  [],
  controller.getArtists
);

router.get(
  "/artists/:id",
  [],
  controller.getArtist
);

router.get(
  "/search",
  [],
  controller.getSearchResult
);

router.get(
  "/genres",
  [],
  controller.getGenres
);

router.get(
  "/genres/:id",
  [],
  controller.getGenre
);

router.get(
  "/district",
  [],
  controller.getDistrict
);

router.post(
  "/order",
  [],
  controller.saveOrder
);

router.get(
  "/order",
  [],
  controller.getOrder
);

router.post(
  "/cancel-order",
  [],
  controller.cancelOrder
);

router.get(
  "/order-status/:userId",
  [],
  controller.getOrderStatus
);

router.get(
  "/department-status",
  [],
  controller.departmentStatus
);

router.post(
  "/update-order-status",
  [],
  controller.updateOrderStatus
);

module.exports = router;