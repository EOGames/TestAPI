import React from "react";
import axios from "axios";

const Add = function()
{
    function Save()
    {
        const nam = document.getElementById('nam');
        const ema = document.getElementById('ema');
        console.log(nam + " " + ema);
        let _name = nam.value;
        let _email = ema.value;
        console.log(_name + " " + _email);
        axios.post('http://localhost:5100/add',
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
                    <input className="textField" type="text" id="nam" name="name" placeholder="Enter Name"  />
                    <br />
                    <label className="label"> Email </label>
                    <input className="textField" type="email" id="ema" name="email" placeholder="abc@gmail.com"  />
                    <br />
                    <br />
                    <br />
                    <button id="saveButton" onClick={()=> Save()} type="submit"> Save </button>
                </div>
        </div>
    );
}
export default Add;