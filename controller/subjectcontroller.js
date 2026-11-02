const subjectModel = require('../models/subjectmodel');


// CREATE SUBJECT
const CreateSubject = async (req, res) => {
  try {
    const { Name } = req.body;

    const newSubject = await subjectModel.create({ Name });

   res.redirect("/Subject/subject2")
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL SUBJECTS
const GetAllSubject = async (req, res) => {
  try {
    const subjects = await subjectModel.findAll();

    return res.status(200).render("subject", {
        subjects: subjects
    });

} catch (error) {
    return res.status(500).render("error", {
        message: error.message
    });
}
};


// SEARCH SUBJECT (Exact match only)
const SearchSubject = async (req, res) => {
  try {
    const { keyword } = req.query;

    const subjects = await subjectModel.findAll({
      where: {
        Name: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: subjects,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE SUBJECT
const DeleteSubject = async (req, res) => {
  try {
    const subject = await subjectModel.findByPk(req.params.id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    await subject.destroy();

    return res.status(200).json({
      success: true,
      message: "Subject deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE SUBJECT
const UpdateSubject = async (req, res) => {
  try {
    const subject = await subjectModel.findByPk(req.params.id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    subject.Name = req.body.Name;
    await subject.save();

    return res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      data: subject,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateSubject,GetAllSubject,SearchSubject,DeleteSubject,UpdateSubject,}; 