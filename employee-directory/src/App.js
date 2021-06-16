import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);



  fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => setUserInfo(data.results));



  
  return (
    
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>
              <p>first Name</p>
            </th>
            <th>
              <p>Last Name</p>
            </th>
            <th>
              <p>Gender</p>
            </th>
            <th>
              <p>Location</p>
            </th>
          </tr>
        </thead>
        
        {/* <tr>
          <td>
            Giuliano
          </td>
          <td>
            Serawop
          </td>
          <td>
            Male
          </td>
          <td>
            Vernal
          </td>
        </tr>  */}
        {userInfo && userInfo.map((item) => {
          <tbody>
            <tr>
              <td>{item.name.first}</td>
              <td>{item.name.last}</td>
              <td>{item.gender}</td>
              <td>{item.city}</td>
            </tr>
          </tbody>
        })}
      </table>
    </div>
  );
}

export default App;
