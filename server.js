const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/shoppingcart", {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model("products", new mongoose.Schema({
    //when you create a new product, a new id will be generated
    _id: {type: String, default: shortid.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
}));

//get list of products
app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    //send back to the clients
    res.send(products);
});

//create a new product inside DB
app.post("/api/products", async (req,res) =>{
    const newProduct = Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
