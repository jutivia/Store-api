const express = require('express');
const router = express();

const {
  getAllProducts,
  postProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProductsTesting,
} = require("../controllers/controller");

router.route("/testing").get(getAllProductsTesting);
router.route("/").get(getAllProducts).post(postProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router;
