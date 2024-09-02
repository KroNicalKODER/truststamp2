import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import Page2 from "./Pages/Page2.jsx";
import UserInfoPage from "./Pages/userInfoPage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Messenger from "./components/Messenger.jsx";
import Chat from "./Pages/Chat.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<Page2 />} />
        <Route path="user" element={<Chat />} />
      </Routes>
      {/* <ChatWindow/> */}
    </div>
  );
}
