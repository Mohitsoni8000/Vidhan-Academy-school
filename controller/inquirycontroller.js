const Inquiry = require('../models/inquirymodel');

const CreateInquiry = async (req, res) => {
    try {

        console.log("Request Body:", req.body);

        const {
            CandidateName,
            EmailAddress,
            ContactNumber,
            InquiryMessage
        } = req.body;

        if (!CandidateName || !EmailAddress || !ContactNumber || !InquiryMessage) {
            return res.render("inquiry", {
                error: "Please fill all required fields.",
                success: ""
            });
        }

        const token = Math.random().toString(36).substring(2, 6).toUpperCase();
        const InquiryNumber = `INQ-${new Date().getFullYear()}-${token}`;

        const inquiry = await Inquiry.create({
            InquiryNumber,
            CandidateName,
            EmailAddress,
            ContactNumber,
            InquiryMessage
        });

        console.log("Inserted Successfully:", inquiry.toJSON());

        return res.render("inquiry", {
            error: "",
            success: `Inquiry submitted successfully. Reference ID: ${InquiryNumber}`
        });

    } catch (error) {

        console.error("========== DATABASE ERROR ==========");
        console.error(error);
        console.error(error.message);

        if (error.parent) {
            console.error(error.parent.sqlMessage);
        }

        return res.render("inquiry", {
            error: error.message,
            success: ""
        });
    }
};

const GetAllInquriy = async (req, res) => {
    try {

        const inquiries = await Inquiry.findAll({
            order: [["createdAt", "DESC"]]
        });

        res.render("inquirylist", {
            inquiries
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

module.exports = {
    CreateInquiry,
    GetAllInquriy
};