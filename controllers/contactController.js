//@description get all contacts 
//@route GET/api/contacts
//@access public
const getContacts =(req,res)=>{
    res.status(200).json({messages:"Get all contacts"});
};


//@description get all contacts 
//@route GET/api/contacts/:id
//@access public

const getcontact=(req,res)=>{
    res.status(200).json({messages:`get a contact for id ${req.params.id}`});
}


//@description post  contact 
//@route post/api/contacts
//@access public
const createContact =(req,res)=>{
    res.status(201).json({messages:"create a contact"});

};


//@description update  contact 
//@route put/api/contacts/:id
//@access public
const updateContact =(req,res)=>{
    res.status(200).json({messages:`update a contact for id ${req.params.id}`});
}




//@description delete  contact 
//@route delete/api/contacts/:id
//@access public
const deleteContact =(req,res)=>{
    res.status(200).json({messages:`delete a contact for id ${req.params.id}`});
}




module.exports={
    getContacts,
    getcontact,
    createContact,
    updateContact,
    deleteContact
}; 