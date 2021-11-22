const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    if (!req.headers['x-auth']) return next('router')
    next()
});
router.get('/:id', (req, res) => {
    res.send('Hello,User!')
})
module.exports = router;