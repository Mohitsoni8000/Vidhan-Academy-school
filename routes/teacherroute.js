const express = require('express');
const route = express.Router();
const teachercontroller = require('../controller/teachercontroller');


// CREATE SUBJECT
route.post('/teacher1',teachercontroller.CreateTeacher);

// GET ALL SUBJECTS
route.get('/teacher2', teachercontroller.GetAllTeacher);

// SEARCH SUBJECT
route.get('/search/:id', teachercontroller.SearchTeacher);

// UPDATE SUBJECT
route.put('/update/:id', teachercontroller.UpdateTeacher);

// DELETE SUBJECT
route.delete('/delete/:id', teachercontroller.DeleteTeacher);


module.exports = route;