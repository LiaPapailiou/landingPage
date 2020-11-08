const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

const PORT = process.env.PORT || 5000;


app.use('/focus', require('./routes/dailyFocus'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));