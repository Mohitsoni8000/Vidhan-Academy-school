const classModel = require('../models/classmodel');


// CREATE CLASS
const CreateClass = async (req, res) => {
  try {
    const { ClassName } = req.body;

    const newClass = await classModel.create({ ClassName });

   res.redirect("/Class/class2")
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL CLASS
const GetAllClass = async (req, res) => {
 try {
  const classes = await classModel.findAll();

  return res.status(200).render('class', {
    success: true,
    classes: classes 
  });

} catch (error) {
  console.error("❌ Database Fetch Error:", error.message);
  
  return res.status(500).render('error', {
    success: false,
    message: "Failed to load class configuration logs: " + error.message
  });
}
};


// SEARCH CLASS (Exact match only)
const SearchClass = async (req, res) => {
  try {
    const { keyword } = req.query;

    const classes = await classModel.findAll({
      where: {
        ClassName: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: classes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE CLASS
const DeleteClass = async (req, res) => {
  try {
    const classData = await classModel.findByPk(req.params.id);

    if (!classData) {
      return res.status(404).json({
        success: false,
        message: "Class not found",
      });
    }

    await classData.destroy();

    return res.status(200).json({
      success: true,
      message: "Class deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE CLASS
const UpdateClass = async (req, res) => {
  try {
    const classData = await classModel.findByPk(req.params.id);

    if (!classData) {
      return res.status(404).json({
        success: false,
        message: "Class not found",
      });
    }

    classData.ClassName = req.body.ClassName;
    await classData.save();

    return res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: classData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateClass,GetAllClass,SearchClass,DeleteClass,UpdateClass,};