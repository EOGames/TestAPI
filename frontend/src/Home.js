import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Home = function () {
  const [users, setData] = useState([]);

  async function GetData() {
    let response = await axios.get("http://localhost:5100/");
    setData(response.data);
    console.log(response.data);
  }

  useEffect(function () {
    GetData();
  });

  return (
    <div className="App">

      <div className="container">      
        <form action="" method="post">
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
                <tr>
                  <td>{index}</td>
                  <td className="name">{usr.name}</td>
                  <td className="email">{usr.email}</td>
                  <td>
                    <button className="edit">Edit</button>
                  </td>
                  <td>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                  <td colspan = '5'>
                      <button>Add New</button>
                  </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
export default Home;
