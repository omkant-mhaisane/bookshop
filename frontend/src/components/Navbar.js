import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpShow = () => {
    setShowSignUp(true);
  };

  const handleSignUpHide = () => {
    setShowSignUp(false);
  };
  const handleLoginShow = () => {
    setShowLogin(true);
  };
  const handleLoginHide = () => {
    setShowLogin(false);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitem = (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/course">
            Course
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${
            sticky ? "shadow" : ""
          }`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Book-Store
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {navitem}
              <div className="form-check form-switch mx-4"></div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleLoginShow}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Login
        show={showLogin}
        onHide={handleLoginHide}
        onSignUpShow={handleSignUpShow}
      />
      <Signup
        show={showSignUp}
        onHide={handleSignUpHide}
        onLoginShow={handleLoginShow}
      />
    </>
  );
}

export default Navbar;
