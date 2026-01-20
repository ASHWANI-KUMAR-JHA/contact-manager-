const express=require('express');

const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({messages:"Get all contacts"});
})


router.route("/").post((req,res)=>{
    res.status(200).json({messages:"create a contact"});

})


router.route("/:id").get((req,res)=>{
    res.status(200).json({messages:`get a contact for id ${req.paramsid}`});
})



router.route("/:id").put((req,res)=>{
    res.status(200).json({messages:`update a contact for id ${req.params.id}`});
})



router.route("/:id").delete((req,res)=>{
    res.status(200).json({messages:`delete a contact for id ${req.params.id}`});
})



module.exports=router;
