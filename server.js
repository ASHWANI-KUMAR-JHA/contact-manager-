const express=require('express');
const dotenv=require('dotenv');

const app = express();
const port=process.env.PORT || 3000;


app.get('/api/contacts',(req,res)=>{
    res.send('Get all contacts');
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})