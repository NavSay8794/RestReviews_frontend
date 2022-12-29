import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import RestaurantList from "./components/RestaurantsList";
import Restaurant from "./components/Restaurant";
import AddReview from "./components/Add-Review";
import NavComponent from "./Utils/Nav";

function App() {

  const [user, setUser] = useState(null)
  
  const login = async (user = null)=>{
    setUser(user)
  }

  const logout = async () =>{
    setUser(null)
  }
  return (
    <>
      <NavComponent user={user}/>
      <Routes>
        
        <Route exact path="/restaurants" element={<RestaurantList />} />
        <Route exact path="/restaurants/:id/review" element={<AddReview  user = {user}/>}  />
        <Route exact path="/restaurants/:id" element={<Restaurant  user = {user}/>} /> 
        <Route exact path="/login" element={<Login login={login}/>}/>
        {/* <Route exact path="/logout" element={<Login login={login}/>} /> */}
      </Routes>
    </>
  );
}

export default App;
