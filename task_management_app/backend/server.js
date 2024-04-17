const express = require('express');
const taskRouter = require('./routes/taskManagementRoutes');
const reportsRouter = require('./routes/reports');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const port = 8001;

db.connect((err) => {
    if (err) {
        console.log("error connecting to MySQL: " + err.stack);
    } else {
        console.log('DB connected');
    }
});

app.use(express.json());

app.use('/api', taskRouter);
app.use('/api/reports', reportsRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})