
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CreateUser from "./Components/pages/CreateUser";
import Users from "./Components/pages/Users";
function App() {
  return (
   <BrowserRouter>
   <Home/>
   <Routes>
    <Route element={<CreateUser/>} path="/createuser"/>
    <Route element={<Users/>} path="/users"/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
