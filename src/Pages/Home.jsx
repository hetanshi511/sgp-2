import React from "react";
import Homeimage from "../Components/Images/20944387.jpg";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import About from "./About";
import Placementstats from "../Components/Placementstats";
import CompanyRecruitsList from "../Components/CompanyRecruit";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="App">
                <h1
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  Welcome to Charusat <br />
                  <span style={{ color: "", fontWeight: "bold" }}>
                    <Typewriter
                      words={["Placement Cell"]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p>Empowering Futures, One connection at a time </p>
              </div>
              <button class="button-9" role="button">
                <Link to="./Frontend/src/App.js"></Link>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row row1">
            <div className="col-10 mx-auto">
              <div className="image1">
                <img src={Homeimage} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <About></About>
      <Placementstats />
      <section className="major">
        <h1 className="pl">Major Recruits</h1>
      </section>
      <CompanyRecruitsList />
    </>
  );
};

export default Home;
