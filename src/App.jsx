// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GuestDashboard from "./components/GuestDashboard";
import EventDashboard from "./components/EventDashboard";
import Profile from "./components/Profile";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication
  const [isGuest, setIsGuest] = useState(false); // Track guest status

  useEffect(() => {
    const user = localStorage.getItem("acesstoken");
    const Guest = localStorage.getItem("acesstoken_guest");
    if (user && user !== "") {
      setIsAuthenticated(true);
    }
    if (Guest && Guest !== "") {
      setIsGuest(true);
    }
  },[]);
  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to={'/'}/> : isGuest ?<Navigate to={'/'}/> :<Login />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to={'/'}/> : isGuest ?<Navigate to={'/'}/>:<Register />} />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={"/dashbord"} />
          ) : isGuest ? (
            <Navigate to={"/guest"} />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/dashbord"
        element={
          isAuthenticated ? <EventDashboard /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? <Profile isGuest={isGuest}/> : isGuest ?<Profile isGuest={isGuest}/> :<Navigate to={'/login'}/>
        }
      />
      <Route
        path="/guest"
        element={isGuest ? <GuestDashboard /> : <Navigate to={"/login"} />}
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
