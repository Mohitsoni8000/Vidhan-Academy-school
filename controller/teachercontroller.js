const teacherModel = require('../models/teachermodel');


// CREATE TEACHER
const CreateTeacher = async (req, res) => {
  try {
    const {
      ClassId,
      SectionId,
      SubjectId,
      Name,
      JoiningDate,
      Gender,
      MobileNo
    } = req.body;

    const newTeacher = await teacherModel.create({
      ClassId,
      SectionId,
      SubjectId,
      Name,
      JoiningDate,
      Gender,
      MobileNo
    });

   res.redirect('/Teacher/teacher2')

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL TEACHERS
const GetAllTeacher = async (req, res) => {
  try {
    const teachers = await teacherModel.findAll();

    return res.render('teacher', {
      data: teachers
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// SEARCH TEACHER (Exact match by Name)
const SearchTeacher = async (req, res) => {
  try {
    const { keyword } = req.query;

    const teachers = await teacherModel.findAll({
      where: {
        Name: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: teachers,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE TEACHER
const DeleteTeacher = async (req, res) => {
  try {
    const teacher = await teacherModel.findByPk(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    await teacher.destroy();

    return res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE TEACHER
const UpdateTeacher = async (req, res) => {
  try {
    const {
      ClassId,
      SectionId,
      SubjectId,
      Name,
      JoiningDate,
      Gender,
      MobileNo
    } = req.body;
    const teacher = await teacherModel.findByPk(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    await teacher.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      data: teacher,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateTeacher,GetAllTeacher,SearchTeacher,DeleteTeacher,UpdateTeacher,};