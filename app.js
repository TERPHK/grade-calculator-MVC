const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controllers/Controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/calculate-grade', Controller.calculateController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
