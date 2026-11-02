const express = require('express');
const route = express.Router();
const admissioncontroller = require('../controller/admissioncontroller');


// CREATE SUBJECT
route.post('/admission1',admissioncontroller.CreateAdmission);

// GET ALL SUBJECTS
route.get('/admission2', admissioncontroller.GetAllAdmission);

// SEARCH SUBJECT
route.get('/search/:id', admissioncontroller.SearchAdmission);

// UPDATE SUBJECT
route.put('/update/:id', admissioncontroller.UpdateAdmission);

// DELETE SUBJECT
route.delete('/delete/:id', admissioncontroller.DeleteAdmission);


module.exports = route;