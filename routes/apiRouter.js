const express = require("express");
const ShopifyServices = require("../services/ShopifyServices");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendStatus(200);
});

router.get("/products", async (req, res, next) => {
  const products = await ShopifyServices.getAllProducts();
  res.status(200).send({ message: "Success!", products: products });
});

router.get("/products/:id", async (req, res, next) => {
  const prodID = req.params.id;
  const product = await ShopifyServices.getProductInfo(prodID);
  res.status(200).send({ message: "Success!", product: product });
});

router.get("/collections", async (req, res, next) => {
  const collections = await ShopifyServices.getCollections();
  
  res.status(200).send({ message: "Success!", collections: collections });
});

router.get("/collections/:id", async (req, res, next) => {
  const collectionID = req.params.id;
  const products = await ShopifyServices.getCollectionProducts(collectionID);
  res.status(200).send({ message: "Success!", products: products });
});

module.exports = router;
