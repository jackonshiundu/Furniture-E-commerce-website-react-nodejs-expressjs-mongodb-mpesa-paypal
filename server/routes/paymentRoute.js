const express = require('express');
const { PaymentsController } = require('../controllers/paymentController');
const { verifyUser } = require('../middlewares/authMiddleware');
const generateToken = require('../middlewares/paymentMiddleware');

const router = express.Router();

router.post('/stk', generateToken, PaymentsController);
router.post('/paypal', PaymentsController);
//localhost:5000/api/v1/payments/stk
module.exports = router;
