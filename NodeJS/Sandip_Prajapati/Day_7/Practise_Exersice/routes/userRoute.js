const express = require('express');
const router = express.Router();
router.use((req, res, next) => {
    console.log('Time: ', (Date.now()).toString());
    next()
});

router.use('/users/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next();
}, (req, res, next) => {
    console.log('Request Type: ', req.method)
    next()
});
router.get('/users/:id',(req,res,next)=>{
    if (req.params.id === '0') next('route')
    else next()
}, (req, res, next) => { res.render('regular') });

router.get('/users/:id',(req,res,next)=>{
    console.log(req.params.id);
    res.render('special')
})

module.exports = router;