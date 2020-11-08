const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));


app.use('/focus', require('./routes/dailyFocus'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));