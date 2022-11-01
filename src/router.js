const router = require("express").Router();
const productRouter = require("./product/router");
const orderRouter = require("./order/router");
const categoryRouter = require("./category/router");

router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/category", categoryRouter);

module.exports = router;