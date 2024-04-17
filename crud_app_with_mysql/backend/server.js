const express = require('express');
const userRouter = require('./routes/userRoutes');


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/api', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})