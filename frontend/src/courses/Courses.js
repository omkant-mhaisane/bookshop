import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Course></Course>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Courses;
