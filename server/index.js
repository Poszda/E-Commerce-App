const express = require('express');
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser'); 
const cors = require("cors");

const db = mysql.createConnection({ // createConnection 
    host: 'localhost',
    user: 'root',
    password: '',
    database:'ecommerce_app',
    multipleStatements: true
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//START
app.get("/getproductslist",(req,res)=>{
    stmt = "SELECT * from products";
    db.query(stmt,(err,result)=>{
        //console.log(result);
        res.send(result);
    });
})

app.get("/getproduct/:name",(req,res)=>{
    console.log(req.params.name);
    stmt = `SELECT * FROM products WHERE id = ${req.params.name}`;
    db.query(stmt,(err,result)=>{
       // console.log(result);
        res.send(result);
    });
})

app.post("/getproducts",(req,res)=>{
    stmt = `SELECT * FROM products WHERE id in (${req.body.array.join(",")})`;
    db.query(stmt,(err,result)=>{
        //console.log(result);
        res.send(result);
    });
})

app.post("/sendorder",(req,res)=>{
    const items = req.body.items;
    const total = req.body.total;
    const address = req.body.address;
    const country = req.body.country;
    const fullname = req.body.clientName;
    const phone = req.body.phone; 

    //insert order
    const stmt = `INSERT INTO orders (total_price, address, country, fullname, phone_number) VALUES (?,?,?,?,?); SELECT LAST_INSERT_ID() AS lastInsertID;`;
    db.query(stmt,[total,address,country,fullname,phone],(err,result)=>{
       if(err) throw err;
       else {
           console.log("succesfull inserted into orders");
           const lastInsertID = JSON.parse(JSON.stringify(result))[1][0].lastInsertID;
           insertOrderdItems(items,lastInsertID);
           updateProductsTable(items);
           res.send(true); // a mers
       }
     });
})

//END

//FUNCTIONS
function insertOrderdItems(items,lastInsertID){
    items.forEach(item => {
        const stmt = `INSERT INTO ordered_items (order_id, product_id, quantity) VALUES (?,?,?)`
        db.query(stmt,[lastInsertID,item.id,item.pieces],(err,result)=>{
            if(err) throw err;
            else console.log("succesfull inserted into ordered_products");
          });
    });
}
function updateProductsTable(items){
    items.forEach(item =>{
        const stmt = `UPDATE products SET quantity = ${item.quantity - item.pieces} WHERE id = ${item.id}`;
        db.query(stmt,(err,stmt)=>{
            if(err) throw err;
            else console.log("succesfull updated products table");
        })
    })
}

app.listen(3002, () =>{
    console.log("running on port 3002");
});