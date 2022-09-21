const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

// const {validate , transferValidationResualt}  = require('../middleware/validation/transferValidation');



router.get("/", customerController.customer_customers_get );

router.get("/:id", customerController.customer_profile_get );

router.post("/",customerController.customer_post );

module.exports = router;