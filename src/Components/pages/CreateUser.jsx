import React, { useState } from 'react'
import style from "../home.module.css"
import axios from 'axios';
const CreateUser = () => {

  let [name, setName] = useState("");
  let [salary, setSalary] = useState(0);
  let [company, setCompany] = useState("");

  let getName = (e)=>{
    setName(e.target.value)
  }
  let getSalary = (e)=>{
    setSalary(e.target.value)
  }
  let getCompany = (e)=>{
    setCompany(e.target.value)
  }

  let formHandler =(e)=>{
    e.preventDefault();
   let payload ={
    empName:name,
    empSalary:salary,
    empCompany:company
   }
   axios.post("http://localhost:5000/employyes", payload).then(()=>console.log("success")).catch(()=>console.log("ERROR"));

    setName("")
    setSalary(0)
    setCompany("")
  }
  

  return (
    <div id={style.formContainer}>
      <form action="">
        <div>
        <label htmlFor="">Name: </label>
        <input type="text" value={name} onChange={getName} />
        <br />
        </div>
        <div> <label htmlFor="">Salary: </label>
        <input type="text" value={salary} onChange={getSalary} />
        <br />
       </div>
        <div> <label htmlFor="">Company:   </label>
        <input type="text" value={company} onChange={getCompany} />
        </div>
        <br />
          <button onClick={formHandler}>SUBMIT</button>
      </form>
    </div>
  )
}

export default CreateUser