const express = require('express');
const router = express.Router();
const customer = require('../json/customer.json');
router.use(express.json());

router.get('/',
    (req, res,next) => {
        res.send(customer);
        next();
    }
);
router.get('/:id',
    (req, res,next) => {
        const custom = customer.find(cid => cid.id === parseInt(req.params.id));
        if (!custom) res.status(404).send('<h2>404 ERROR</h2>');
        res.send(custom)
        res.end()
    }
)
router.post('/',
    (req, res,next) => {
        const custom = {
            id: customer.length + 1,
            customerName: req.body.customerName,
            item: req.body.item
        }
        customer.push(custom);
        res.send(custom);
        res.end()
    }
);
router.put('/:id',
    (req, res,next) => {
        const custom = customer.find(cid => cid.id === parseInt(req.params.id));
        if (!custom) res.status(404).send('<h2>404 ERROR</h2>');
        custom.item = req.body.item;
        custom.customerName = req.body.customerName;
        res.end()
    });
router.delete('/:id',
    (req, res) => {
        const custom = customer.find(cid => cid.id === parseInt(req.params.id));
        if (!custom) res.status(404).send('<h2>404 ERROR</h2>');
        const index = customer.indexOf(custom);
        customer.splice(index, 1);
        res.end()

    }
);
module.exports =router;
