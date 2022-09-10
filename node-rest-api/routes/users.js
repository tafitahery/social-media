const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//update User
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('account has been updated');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can update only your account.');
  }
});

//delete User
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('account has been deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You can delete only your account.');
  }
});

//get a User
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow User

//unfollow User

module.exports = router;
