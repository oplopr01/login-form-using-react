import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
  let [users, setUsers] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/employyes").then((res)=>{
    setUsers(res.data);
    console.log(res.data);
  }).catch(()=>console.log("error"))
}, [] )
// console.log(users[1].empName);
  return (
    <div>
      {/* <h1>{users[1].empName}</h1> */}
      {/* {users.map((ele)=>{
        <h1>{ele.empName}</h1>

      })} */}
      
    </div>
  )
}

export default Users