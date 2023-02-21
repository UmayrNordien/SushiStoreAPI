//controller
//=======
const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User, Product} = require('../model');
// Create a user instance
const user = new User();
// Product instance
const product = new Product();
// ^/$|/SushiStore
route.get('^/$|/sushistore', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})
// =========USER's Router========
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Retrieve all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});
// =====Products======
// Fetch all products
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// Fetch a single product
route.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Add a new product
route.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Update a product
route.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
route.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;