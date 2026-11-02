const express = require('express');
const route = express.Router();
const classcontroller = require('../controller/classcontroller');


// CREATE SUBJECT
route.post('/class1',classcontroller.CreateClass);

// GET ALL SUBJECTS
route.get('/class2', classcontroller.GetAllClass);

// SEARCH SUBJECT
route.get('/search/:id', classcontroller.SearchClass);

// UPDATE SUBJECT
route.put('/update/:id', classcontroller.UpdateClass);

// DELETE SUBJECT
route.delete('/delete/:id', classcontroller.DeleteClass);


module.exports = route;