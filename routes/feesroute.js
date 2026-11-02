const express = require('express');
const route = express.Router();
const feescontroller = require('../controller/feescontroller');


// CREATE SUBJECT
route.post('/fees1',feescontroller.CreateFees);

// GET ALL SUBJECTS
route.get('/fees2', feescontroller.GetAllFees);

// SEARCH SUBJECT
route.get('/search/:id', feescontroller.SearchFees);

// UPDATE SUBJECT
route.put('/update/:id', feescontroller.UpdateFees);

// DELETE SUBJECT
route.delete('/delete/:id', feescontroller.DeleteFees);


module.exports = route;