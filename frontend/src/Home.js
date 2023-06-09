import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = function () {
  const [users, setData] = useState([]);

  async function GetData() {
    let response = await axios.get("http://localhost:5100/");
    setData(response.data);
   // console.log(response.data);

    
  }

  useEffect(function () {
    GetData();
  });

  async function Delete (id)
  {
    try {      
      await axios.delete(`http://localhost:5100/delete/${id}`);

    } 
    catch (error) {
      console.error(error);  
    }
    // GetData();
    window.location.href ='/';
  }

  return (
    <div className="App">

      <div className="container">      
          <table >
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usr, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td className="name">{usr.name}</td>
                  <td className="email">{usr.email}</td>
                  <td>
                    <Link to={`/update/${usr._id}`} className="edit">Edit</Link>
                  </td>
                  <td>
                    <button onClick={()=>Delete(usr._id)} className="delete">Delete</button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                  <td colspan = '5'>
                      <button>Add New</button>
                  </td>
              </tr> */}
            </tbody>
          </table>
      </div>
    </div>
  );
};
export default Home;
