import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div id={style.navbar}>
            <Link to="/createuser"> CreateUser</Link>
            <Link to="/users"> Users</Link>
        </div>

        
    </div>
  )
}

export default Home