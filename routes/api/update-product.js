var productModel=require('../../models/product');
var router=require('express').Router();

router.post('/:id',async(req,res)=>{
    
    try{
        
        var updateData={Name,Description,RAM,Processor,Type}=req.body;    
        
    let data=await productModel.findOneAndUpdate({_id:req.params.id},updateData,{
    new:true
});

res.redirect(`/read-products/${req.params.id}`);
    }
    catch(err)
    {
        console.log(err.message);
    }
});


router.get('/update/:id',async(req,res)=>{
    let data=await productModel.findById(req.params.id);
    res.render('update-page.ejs',{data:data});
});

module.exports=router;

