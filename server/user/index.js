const router = require('express').Router();
const db = require('../db');

router.get('/info', async (req, res) => {
  const userID = req.query.id;

  if (!userID) {
    return res.status(500).send('Misshapen req body! Must have id');
  }

  const userInfo = await db.getUserInfo(userID);

  if (userInfo) {
    return res.send(userInfo);
  }

  // if no userInfo exists, create a new one and return it.
  const newUserInfo = await db.insertNewUserInfoRecord(userID);

  return res.send(newUserInfo);
});

module.exports = router;
