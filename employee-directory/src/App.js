import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [originalUserInfo, setOriginalUserInfo] = useState([]);

  useEffect(() =>{
     fetch(
       "https://randomuser.me/api/?results=15"
     )
       .then((response) => response.json())
       .then((data) => {
         console.log("testing")
         setUserInfo(data.results)
         setOriginalUserInfo(data.results)
        });
  }, [])
  
  function clicked (){
    let newInfo = userInfo.sort(( a, b ) => {
      if ( a.name.first < b.name.first ){
    return -1;
      }
      if ( a.name.first > b.name.first ){
        return 1;
      }
      return 0;
    });
    console.log(newInfo)
    setUserInfo([...newInfo])
  }
  
  function handleFilter(e){
    console.log(e.target.value)

    let newInfo = originalUserInfo.filter(item => item.email.includes(e.target.value))


    setUserInfo([...newInfo]);
    
  }

 



  
  return (
    <div className="App">
      <p>Sort by first name</p>
      <input onChange={handleFilter} placeholder="Filter Email"/>
      <table>
        <thead>
          <tr>
            <th onClick={clicked}>
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
            <th>
              <p>Email</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {userInfo && userInfo.map((item, index) => {
              return (<tr key={index}>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
              </tr>);
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
