const Model = require('../models/Model');

const calculateController = (req, res) => {
    const { score } = req.body;
    const grade = Model.Grade(score);
    res.json({ grade });
};

module.exports = { calculateController };
