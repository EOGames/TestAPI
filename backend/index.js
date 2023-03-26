const mongoose = require ('mongoose');
const express = require('express');
const model = require('./Schema');

const url = "mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/students";

const app = express();
mongoose.connect(url);

app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//Read
app.get('',async (req,resp)=>
{
    let data = await model.find();
    resp.send(data);
});

// Create
app.post('/add', async (req,resp)=>
{
    let usr =  new model(
        req.body
    );
    console.log(req.body);

    let data = await usr.save();
    resp.send(data);
    console.log(data);
});

//Update || Edit

app.put('/update/:_id', async(req,resp)=>
{
    let data = await model.updateOne(
        
        req.params,
        {
            $set:req.body
        }
           
        );
        resp.send(data);
        console.log(data);
});

//Delete
app.delete('/delete/:_id', async(req,resp)=>
{
    try {
        
        let data = await model.deleteOne(req.params);
        resp.send(data);
    } catch (error) {
        console.log("ID NOT FOUND")
    }
    // console.log(req.params);
    resp.send("ID NOT FOUND");
});

//checking invalid urls
app.get('*',(req,resp)=>
{
    console.log("Link Broken: Invalid URL");
    resp.send("<h1>Link Broken: Invalid URL<h1>");
});

app.listen(5100,()=>
{
    console.log("Server Running On Port 5100");
});