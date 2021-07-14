const express = require('express');
const app = express();
const port = 3001;
var users = require('./routes/UserRoutes');
const catagoryRoutes=require('./routes/CatagoryRoutes');
const orderRoutes=require('./routes/OrdersRoutes');
const productRoutes=require('./routes/ProductRoutes');

const db = require('./db');

app.use(express.static('Static'));
app.use(express.json());
app.use('/User', users);
app.use('/Catagory', catagoryRoutes);
app.use('/Orders', orderRoutes);
app.use('/Product', productRoutes);

db.connectToMongoose();

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'Static/404/404.html'),{ useNewUrlParser: true });
})

app.listen(port, ()=> {
    console.log("port uploud!!!!")
})