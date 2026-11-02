const feesModel = require('../models/feesmodel');


// CREATE FEES
const CreateFees = async (req, res) => {
  try {
    const newFees = await feesModel.create(req.body);

    res.redirect('/Section/section2');

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL FEES
const GetAllFees = async (req, res) => {
try {
  const fees = await feesModel.findAll();

  console.log(fees);

  return res.render('fees', {
    fees,
  });

} catch (error) {
  return res.status(500).render('error', {
    message: error.message,
  });
}
};


// SEARCH FEES (by Amount or Date if needed)
const SearchFees = async (req, res) => {
  try {
    const { keyword } = req.query;

    const fees = await feesModel.findAll({
      where: {
        Date: keyword
      }
    });

    return res.status(200).json({
      success: true,
      data: fees,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE FEES
const DeleteFees = async (req, res) => {
  try {
    const fees = await feesModel.findByPk(req.params.id);

    if (!fees) {
      return res.status(404).json({
        success: false,
        message: "Fees not found",
      });
    }

    await fees.destroy();

    return res.status(200).json({
      success: true,
      message: "Fees deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE FEES
const UpdateFees = async (req, res) => {
  try {
    const fees = await feesModel.findByPk(req.params.id);

    if (!fees) {
      return res.status(404).json({
        success: false,
        message: "Fees not found",
      });
    }

    await fees.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Fees updated successfully",
      data: fees,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {CreateFees,GetAllFees,SearchFees,DeleteFees,UpdateFees,};