const mongoose = require ('mongoose');
const express = require('express');
const model = require('./Schema');

const url = "mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/students";

const app = express();
mongoose.connect(url);

app.use(express.json());

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
    // let data = await model.deleteOne();

    resp.send(req.params._id);
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