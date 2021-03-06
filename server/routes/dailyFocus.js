const express = require('express');
const router = express.Router();
const DailyFocus = require('../models/DailyFocus');


// GET latest
router.get('/', async (req, res) => {
  try {
    let focus = await DailyFocus.find().sort({ createdAt: -1 }).limit(1);
    if (focus.length < 1) return res.status(404).json({ msg: 'Database is empty' });

    res.json(focus);

  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

// PUT 
router.put('/', async (req, res) => {
  try {
    const { item } = req.body;

    const todo = await DailyFocus.create({ todo: item });

    res.json(todo);

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

module.exports = router;