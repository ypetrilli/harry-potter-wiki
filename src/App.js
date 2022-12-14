import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";

import Navbar from "./components/common/navbar/Navbar";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import StudentList from "./pages/StudentList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;