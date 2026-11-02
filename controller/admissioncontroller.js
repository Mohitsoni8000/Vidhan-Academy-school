const admissionModel = require('../models/admissionmodel');


// CREATE ADMISSION
const CreateAdmission = async (req, res) => {
  try {
    const newAdmission = await admissionModel.create(req.body);

    res.redirect("/Admission/admission2")

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL ADMISSION
const GetAllAdmission = async (req, res) => {
  try {
  const admissions = await admissionModel.findAll();

  return res.render('admission', {
    success: true,
    data: admissions,
  });

} catch (error) {
  return res.status(500).json({
    success: false,
    message: error.message,
  });
}
};


// SEARCH ADMISSION (exact match only)
const SearchAdmission = async (req, res) => {
  try {
    const { keyword } = req.query;

    const admissions = await admissionModel.findAll({
      where: {
        Name: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: admissions,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE ADMISSION
const DeleteAdmission = async (req, res) => {
  try {
    const admission = await admissionModel.findByPk(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    await admission.destroy();

    return res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE ADMISSION
const UpdateAdmission = async (req, res) => {
  try {
    const admission = await admissionModel.findByPk(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    await admission.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Admission updated successfully",
      data: admission,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateAdmission,GetAllAdmission,SearchAdmission,DeleteAdmission,UpdateAdmission,};