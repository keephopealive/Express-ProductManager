// Express
const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/___db");
const ProductSchema = new mongoose.Schema({
    totalGold: { 
        type: Number
    },
    messages: { 
        type: Array 
    }
})
mongoose.model('Product', ProductSchema);
const Ninja = mongoose.model('Product');

// Path
const path = require('path');
// Static Route
app.use(express.static(path.join(__dirname, 'Angular-ProductManager/dist/Angular-ProductManager')));

// Routes
app.post('/ninjas', function(req, res){
})


app.all("*", function(req,res){
    res.sendFile(path.resolve('./Angular-ProductManager/dist/Angular-ProductManager/index.html'));
});

// Listener
app.listen(8000, function(){
    console.log("Server started at port 8000");
})

