const express = require('express');
const app = express()
app.use(express.json());
const customer = [
    {
        id: 1,
        customerName: "Sandip Prajapati",
        item: "realme Buds"
    },
    {
        id: 2,
        customerName: "Harsh Prajapati",
        item: "boult Buds"
    },
    {
        id: 3,
        customerName: "Ravi Koli",
        item: "Boat NeckBand"
    },
    {
        id: 4,
        customerName: "Mahesh Limbat",
        item: "Boat Airdopes"
    }
]
//Create a Restful API, which will return Customer list in JSON format.
app.get('/',
    (req, res) => {
        res.send('Welcome to The Sinister Island!!!');
    }
);
app.get('/customer',
    (req, res) => {
        res.send(customer);
        res.end();
    }
);
// Create a Restful API which will search a particular record from the customer list.
app.get('/customer/:id',
(req,res)=>{
    const custom = customer.find(cid=>cid.id===parseInt(req.params.id));
    if(!custom) res.status(404).send('<h2>404 ERROR</h2>');
    res.send(custom)
}
)
//Create a Restful API which will insert a new customer object in the customer list.
app.post('/customer',
    (req, res) => {
     const custom = {
         id:customer.length+1,
         customerName:req.body.customerName,
         item:req.body.item
     }
     customer.push(custom);
     res.send(custom);
    }
);
//Create a Restful API which update a name of existing customer whose customer ID is 1
app.put('/customer/:id',
(req,res)=>{
    const custom = customer.find(cid=>cid.id===parseInt(req.params.id));
    if(!custom) res.status(404).send('<h2>404 ERROR</h2>');
    custom.item = req.body.item;
    custom.customerName = req.body.customerName;
});
//Create a Restful API which will delete a record from the customer list.
app.delete('/customer/:id',
(req,res)=>{
    const custom = customer.find(cid=>cid.id===parseInt(req.params.id));
    if(!custom) res.status(404).send('<h2>404 ERROR</h2>');
    const index = customer.indexOf(custom);
    customer.splice(index,1); 

}
)
app.listen(3000, () => console.log('Server is Running'));