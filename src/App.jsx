import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, SignUp, Dashboard, Table } from "./pages";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/SingUp" element={<SignUp />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Table" element={<Table />}/>
      </Routes>
    </Router>
  )
}

export default App
