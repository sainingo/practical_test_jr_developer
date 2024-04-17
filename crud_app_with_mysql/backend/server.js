const express = require('express');
const userRouter = require('./routes/userRoutes');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const port = 8000;

db.connect((err) => {
    if (err) {
        console.log("error connecting to MySQL: " + err.stack);
    } else {
        console.log('MySQL connected');
    }
});

app.use(express.json());

app.use('/api', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})