const express = require('express');
const router = express.Router();

//@route    GET api/joinRoom
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
   res.send('Join room route');
});

module.exports = router;
