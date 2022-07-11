import React from "react";
import "../src/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="container" style={{ padding: "10px 50px" }}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center textemail">
            Do not miss any drop!
          </h5>
          <p className="text-center subscribe">
            <span style={{ color: "#20C0E8" }}>
              Subscribe to our newsletter
            </span>
            <span>and get it before everyone</span>
          </p>
          <div className="text-center">
            <div class="">
              <div class="mb-3 d-inline">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button type="button" class="subscribebutton ms-2">
                <span className="subscribetext ">Subscribe</span>
              </button>
              </div>
              
            </div>
          </div>
          <div className="text-center">
            <p className="signingup">
              By signing up, you agree to the our terms and our Privacy Policy
              agreement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
