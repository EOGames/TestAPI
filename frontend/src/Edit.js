import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

let user;
let defaultName = "";
let defaultEmail = "";
let data = [];
const Edit = function()
{
    const {id} = useParams();
    console.log('id '+ id);

   async function getUserById()
   {
      data = await axios.get(`http://localhost:5100`);
    //   console.log(`http://localhost:5100/find/${id}`);
    data = data.data;
      console.log(data);    
    
     for (let i=0; i < data.length; i++)
     {
        if (data[i]._id === id)
        {
            return data[i];
        }
     }
   }
   async function GetValues()
   {
       user = await  getUserById();
        defaultName = await user.name;
        defaultEmail = await user.email;

        const nam = document.getElementById('nam');
        const ema = document.getElementById('ema');

        nam.value = await user.name;
        ema.value = await  user.email;
   } 
   GetValues();

    async function Update()
    {
        const nam = document.getElementById('nam');
        const ema = document.getElementById('ema');

       
       // console.log(nam + " " + ema);
        let _name = nam.value;
        let _email = ema.value;
        console.log(_name + " " + _email);
       await axios.put(`http://localhost:5100/update/${id}`,
        {
            name: _name,
            email: _email
        })
        console.log("Save");
        window.location.href = '/';
        
    }
    return(
        <div className="add">
                <div>
                    <label className="label"> Name </label>
                    <input className="textField" type="text" id="nam" name="name" placeholder="Enter Name" defaultValue={defaultName} />
                    <br />
                    <label className="label"> Email </label>
                    <input className="textField" type="email" id="ema" name="email" placeholder="abc@gmail.com" defaultValue={defaultEmail} />
                    <br />
                    <br />
                    <br />
                    <button id="saveButton" onClick={()=> Update()} type="submit"> Update </button>
                </div>
        </div>
    );
}
export default Edit;