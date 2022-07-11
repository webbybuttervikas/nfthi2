import React from "react";
import image1 from "../src/images/headerimg.png";
import jimmycoo from "../src/images/jimmycoo.png";
import "../src/BlockChain.css";
const BlockChain = () => {
  return (
    <>
      <div className="container" style={{padding:"10px 50px"}}>
        <div className="row pt-5 ">
          <div className="col-lg-8">
            <div class="card">
              <img src={image1} class="card-img-top rounded" alt="..." />
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title px-2 headAboutevent">About this Event</h5>
                <p class="card-text headtext px-2">
                  It’s the first summit to focus only on oracles – the piece of
                  blockchain infrastructure that provides external data to smart
                  contracts. Plus, many of blockchain’s most advanced use-cases
                  rely on it, including DEXs, DAOs as well as Dynamic NFTs,
                  Parametric Insurance, and anything that uses external data
                  on-chain. In short, they have implications on most of
                  blockchain’s most advanced use cases. Moreso, every day a
                  global brand announces the launch of its NFT or metaverse
                  project. Basically ithout oracles, the real world would not be
                  able to interact with the blockchain. With them, importance
                  set to grow exponentially alongside blockchain’s use-cases,
                  the time has come for leaders in the blockchain world to
                  acknowledge and discuss the challenges, demands, and areas of
                  interest in the oracle space today. BOS22 aims to do just
                  that.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-10">
                    <h5 class="card-title card2text">
                      Blockchain Oracle Summit 2022 – Berlin
                    </h5>
                  </div>
                  <div className="col-2">
                    <button className="buttonintitle ">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="d-block">
                    <i class="fa-solid fa-building cardicon"></i>
                    <span className="icontext">
                      Party Action People Pte, LTD
                    </span>
                  </span>
                  <span className="d-block">
                    <i class="fa-solid fa-calendar-day cardicon"></i>
                    <span className="icontext">Sun 05 Jun 2022 | 7:00 PM</span>
                  </span>
                  <span className="d-block">
                    <i class="fa-solid fa-location-dot cardicon"></i>
                    <span className="icontext">Hotel Berlin, Berlin</span>
                  </span>
                </div>

                <div className="stepout mt-3" style={{ width: "100%" }}>
                  Step out and enjoy this event
                </div>
                <div className="pb-4 pt-4 ps-5">
                  <button className="buttonincard">
                    <span className="textinbutton">BUY NOW</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#20C0E8" }}>
                  Speakers
                </h5>
                <div className="row mt-3">
                  <div className="col-4">
                    <img className="jimimg" src={jimmycoo} alt="fasfsaf"></img>
                  </div>
                  <div className="col">
                    <span className="d-block mt-3 textjim">jimcoo</span>
                    <span className="fromusa">from USA</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-3">
              <div class="card-body">
                <h5 class="card-title berlin">Berlin</h5>
                <h6 class="card-subtitle mb-2 hotelberlin">
                  Hotel Berlin, Berlin
                </h6>
                <p class="card-text">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2129877417688!2d73.16086481487662!3d22.269920385339358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7b6f88b0b31%3A0x5f39b0fda40c8915!2sWebbyButter%20Technologies%20Pvt.%20Ltd-%20Offshore%20Software%2C%20Web%20and%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1657185485816!5m2!1sen!2sin"
                    width="340px"
                    height="221px"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockChain;
