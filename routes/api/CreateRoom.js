const express = require('express');
const router = express.Router();

//@route    GET api/createRoom
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
   res.send('Create room route');
});

module.exports = router;
