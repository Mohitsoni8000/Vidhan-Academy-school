const express = require('express');
const route = express.Router();
const subjectController = require('../controller/subjectcontroller');


// CREATE SUBJECT
route.post('/subject1', subjectController.CreateSubject);

// GET ALL SUBJECTS
route.get('/subject2', subjectController.GetAllSubject);

// SEARCH SUBJECT
route.get('/search/:id', subjectController.SearchSubject);

// UPDATE SUBJECT
route.put('/update/:id', subjectController.UpdateSubject);

// DELETE SUBJECT
route.delete('/delete/:id', subjectController.DeleteSubject);


module.exports = route;