import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style/sass/main/app.sass";
import Footer from "./components/footer";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} /> */}
      </Routes>

      <Footer className="login-footer" />
    </Router>
  );
}

export default React.memo(App);
