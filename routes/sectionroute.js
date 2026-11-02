const express = require('express');
const route = express.Router();
const sectioncontroller = require('../controller/sectioncontroller');


// CREATE SUBJECT
route.post('/section1', sectioncontroller.CreateSection);

// GET ALL SUBJECTS
route.get('/section2', sectioncontroller.GetAllSection);

// SEARCH SUBJECT
route.get('/search/:id', sectioncontroller.SearchSection);

// UPDATE SUBJECT
route.put('/update/:id', sectioncontroller.UpdateSection);

// DELETE SUBJECT
route.delete('/delete/:id', sectioncontroller.DeleteSection);


module.exports = route;