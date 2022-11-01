const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./validator");
const Controller = require("./controller");

router.route('/find').post(Controller.findAll);
router.route('/:id').get(Controller.findOne);
router.route('/').post(validate(Validator.addNew) ,Controller.addNew);
router.route('/:id').put(validate(Validator.updateOne) ,Controller.updateOne);
router.route('/:id').delete(validate(Validator.deleteOne) ,Controller.deleteOne);

module.exports = router;