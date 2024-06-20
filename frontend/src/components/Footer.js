import React from "react";
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white my-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We aim to provide free the best collection for book lovers.</p>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Email: info@bookshop.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Book St, Reading Town, RB</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-center py-3">
          <p className="mb-0">&copy; 2024 Book Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
