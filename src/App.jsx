import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Define lazy-loaded components
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Table = lazy(() => import("./pages/Table"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<div>Loading...</div>}> <Login /> </Suspense>}/>
        <Route path="/SignUp" element={<Suspense fallback={<div>Loading...</div>}> <SignUp /> </Suspense>}/>
        <Route path="/Dashboard" element={<Suspense fallback={<div>Loading...</div>}> <Dashboard /> </Suspense>}/>
        <Route path="/Table" element={<Suspense fallback={<div>Loading...</div>}> <Table /> </Suspense>}/>
      </Routes>
    </Router>
  )
}

export default App
