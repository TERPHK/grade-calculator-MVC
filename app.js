const express = require('express');
const bodyParser = require('body-parser');
const gradeController = require('./controllers/gradeController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/calculate-grade', gradeController.calculateGradeController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
