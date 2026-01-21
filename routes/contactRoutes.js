const express=require('express');

const router=express.Router();

const { getContacts,
    getcontact,
    createContact,
    updateContact,
    deleteContact}=require('../controllers/contactController');    
  
router.route("/").get(getContacts).post(createContact);



router.route("/:id").get(getcontact).put(updateContact).delete(deleteContact);



module.exports=router;
