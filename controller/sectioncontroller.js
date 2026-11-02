const sectionModel = require('../models/sectionmodel');


// CREATE SECTION
const CreateSection = async (req, res) => {
  try {
    const { Name } = req.body;

    const newSection = await sectionModel.create({ Name });

    res.redirect("/Section/section2")
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL SECTION
const GetAllSection = async (req, res) => {
  try {
  const sections = await sectionModel.findAll();

  return res.status(200).render('section', {
    success: true,
    sections: sections 
  });

} catch (error) {
  console.error("❌ Database Fetch Error inside Section Controller:", error.message);
  
  return res.status(500).render('error', {
    success: false,
    message: "Failed to load class sections structural records: " + error.message
  });
}
};


// SEARCH SECTION (Exact match only)
const SearchSection = async (req, res) => {
  try {
    const { keyword } = req.query;

    const sections = await sectionModel.findAll({
      where: {
        Name: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: sections,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE SECTION
const DeleteSection = async (req, res) => {
  try {
    const section = await sectionModel.findByPk(req.params.id);

    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    await section.destroy();

    return res.status(200).json({
      success: true,
      message: "Section deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE SECTION
const UpdateSection = async (req, res) => {
  try {
    const section = await sectionModel.findByPk(req.params.id);

    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }

    section.Name = req.body.Name;
    await section.save();

    return res.status(200).json({
      success: true,
      message: "Section updated successfully",
      data: section,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateSection,GetAllSection,SearchSection,DeleteSection,UpdateSection,};