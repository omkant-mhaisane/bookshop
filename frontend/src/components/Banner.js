import React from "react";
import "../index.css";
import banner from "../Images/Banner.jpg";
function Banner() {
  return (
    <>
      <div className="container-fluid vh-60">
        <div className="row h-100">
          <div className="col-md-6 d-flex justify-content- align-items- bg-white my-5">
            <div className="my-4 bg-white">
              <h2 className="text-4xl font-bold">
                Hello,<span className="text-green"> Welcome</span> to our free
                platform <br />
                Books for{" "}
                <span className="text-pink">Every Chapter of Your Life</span>
              </h2>
              <p className="text-font-mono">
                "Step into a world of stories at Book Bliss, where every book is
                a new adventure waiting to be explored. Whether you're seeking
                inspiration, knowledge, or pure escapism, our vast collection
                has something for every reader. Discover the joy of reading with
                us and let your imagination soar!"
              </p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email us
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your details with anyone else.
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
            <img src={banner} className="w-95 h-50 mx-4" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
