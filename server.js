var express=require('express')
var app=express();
var PORT=process.env.PORT;
var connectDB=require('./config/db');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

//connecting to database
connectDB();

app.use(express.json({extended:false}));

app.get('/',(req,res)=>{
    res.render('add-product.ejs');
});

app.use('/create-product',require('./routes/api/create-product'));
app.use('/read-products',require('./routes/api/read-product'));
app.get('/delete-product/:id',require('./routes/api/delete-product').deleteRecord);
app.use('/update-product/',require('./routes/api/update-product'));



//port 3000 fro localhost
app.listen(3000 || PORT)
