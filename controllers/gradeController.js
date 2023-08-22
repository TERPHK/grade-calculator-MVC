const gradeModel = require('../models/gradeModel');

const calculateGradeController = (req, res) => {
    const { score } = req.body;
    const grade = gradeModel.calculateGrade(score);
    res.json({ grade });
};

module.exports = { calculateGradeController };
