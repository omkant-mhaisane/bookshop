import React from "react";
import Cards from "./Cards";
import list from "../list.json";
import "../index.css";
import "../Card.css";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-start min-vh-100 my-5">
        <div>
          <h2 className="d-flex justify-content-center align-items-start my-3">
            <span className="emp">Empower </span> - your education with our -
            <span className="cour"> course books</span>
          </h2>
          <p className="d-flex justify-content-center align-items-center my-3 container">
            Welcome to our Book Shop, where every page is a new adventure
            waiting to be discovered. Our shelves are filled with an extensive
            selection of books across all genres, from timeless classics and
            riveting mysteries to enlightening non-fiction and inspiring
            biographies. Whether you're seeking to escape into a fantasy world,
            gain new insights, or simply find your next great read, our curated
            collection has something for every reader. At our Book Shop, we
            believe in the transformative power of books to ignite imagination,
            foster knowledge, and build connections. Start your literary journey
            with us today and uncover the endless possibilities that lie within
            the pages.
          </p>
          <div className="d-flex justify-content-center align-items-center my-3 container">
            {/* <Link to="Home" />
            <button type="button" className="btn btn-outline-secondary">
              Back to home
            </button>
            <Link /> */}
            <Link to="/" className="btn btn-outline-secondary">
              Back to home
            </Link>
          </div>
          <div className="container row my-4">
            {list.map((item) => {
              return (
                <div key={item.id} className="col-md-3 mb-4">
                  <Cards item={item}></Cards>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
