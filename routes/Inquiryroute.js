const express = require('express');
const router = express.Router();

const inquiryController = require('../controller/inquirycontroller');

// Show Inquiry Form
router.get('/inquiry1', (req, res) => {
    res.render('inquiry', {
        error: '',
        success: ''
    });
});

// Save Inquiry
router.post('/inquiry1', async (req, res, next) => {
    console.log("POST /Inquiry/inquiry1");
    console.log(req.body);

    try {
        await inquiryController.CreateInquiry(req, res);
    } catch (err) {
        next(err);
    }
});

// Get All Inquiries
router.get('/inquiry2', inquiryController.GetAllInquriy);

module.exports = router;