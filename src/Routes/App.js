import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import "../Components/components.css";
import Navbar from "../Components/Navbar.js";
import rcel from "../Images/Heart.png";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Footer from "../Components/Footer.js";

function App() {
  const [clicked, setClicked] = useState(false);

  function menuClickHandler() {
    console.log("Click");
    setClicked(!clicked);
  }

  let menuStatus = clicked ? "open" : "closed";
  let button_classes = clicked
    ? "hamburger hamburger--collapse is-active"
    : "hamburger hamburger--collapse ";

  return (
    <div className="App">
      <body className="App-body">
        <button
          onClick={menuClickHandler}
          id="hamburger"
          class={button_classes}
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <Slide top when={clicked}>
          <div className={clicked ? "navbar" : "navbar hidden"}>
            <Navbar />
          </div>
        </Slide>

        <div className="page page1">
          <div>
          <h1 id="name">Brandon Khek</h1>
          </div>
          <p className="tagline">
            <strong>Astrophysics Student at Rice University</strong>
          </p>

          <Jump delay = {1800} count = {4}>
          <p>
            <i class="arrow down"></i>
          </p>
          </Jump>
        </div>

        <div className="page page2">
          <div class="parallax">
            <p id="paraCaption">
               O-Week 2020
            </p>
            <p id="paraCaptionMe">
            ↙ Me
            </p>
          </div>

          <div>
            <Zoom cascade>
              <div>
                <h2>About Me</h2>

                <p>I am a sophomore undergraduate student interested in early and late universe
                cosmology, astroparticle physics, and compact objects.</p>

                <p>I made this website from scratch with React.js!</p>
              </div>
            </Zoom>
          </div>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page page3">
          <div className="pageHeader">
            <h1>
              <strong>Teaching</strong>
            </h1>
            <hr className="divider dark"></hr>
            <p>
              Coming into Rice, I was very uncertain with what I wanted to
              explore in college. The guidance of countless students, mentors,
              and professors enabled me to explore career paths that were
              complementary to my interests. Being a resource to others means a
              lot to me because of the invaluable self-discovery I can help
              facilitate.
            </p>
          </div>

          <div id = "TeachingContent">
          <div className="contentDetailBox" style = {{backgroundColor: "#3bab87"}}>
            <div>
              <h2>RCEL Elite Tech Camp</h2>
              <p>
                Over the summer of 2020 I had the pleasure of teaching 28 high
                school students machine learning in Python through RCEL - Rice
                Center for Engineering Leadership - technology camp. We used
                anomaly detection algorithms to analyze meteorological data!
                Examples include the Isolation Forest and Local Outlier Factor
                algorithms, aided with powerful libraries like SciKitLearn and
                MatPlotLib. This is one of our classes trying to make a heart.
              </p>
            </div>
            <img src={rcel} alt="RCEL Class Photo" width="90%" />
          </div>

          <div className="contentDetailBox" style = {{backgroundColor: "#224a54"}}>
            <p></p>
            <div>
            <h2>COLL</h2>
            <p>
              COLL is a class code, short for COLLege course, which are
              student-taught courses! After a semseter of training, Rice
              students can teach a COLL course on anything they'd like, and I'm
              working on doing this soon! Stay tuned for a syllabus.
            </p>
            </div>
          </div>

          <div className="contentDetailBox" style = {{backgroundColor: "#1a1a1a"}}>

            <div>
            <h2>Rice Splash</h2>

            <p>
              There's a really cool organization on campus called Rice Splash,
              in which students at Rice can teach middle/high school students
              about any topic they want. I'm going to be teaching this fall
              about single variable (and some multivariable) calculus.
              Ambitious, but I'm confident the material can be simplified enough
              and still be beneficial.
            </p>
            </div>
          </div>

          </div>
        </div>

        <div className="page page4">
          <div className="pageHeader">
            <h1>Research</h1>
            <hr className="divider"></hr>
            <p>
              I found during my fall 2020 semester that research is an
              invaluable component of my experience at Rice. It is an outlet to
              explore my natural academic inclinations and further solidify my
              confidence in pursuing postgraduate education. Ultimately, I love
              to present my work to others that share the same joy in learning
              astrophysics.
            </p>
          </div>
          <div className="contentDetailBox" style = {{backgroundColor: "#c1605c"}}>
            <div>
              <h2 className="contentDetail">
                Gravitational Waves from Self-Ordering Scalar Fields
              </h2>
              <p className="contentDetail">
                I'm studying the gravitational wave energy density from
                self-ordering scalar fields, particularly the Higgs field. Fancy
                talk for saying that the Higgs field (associated with Higgs
                boson) is inhomogeneous (isn't uniform) in space, and as it
                tries to relax, or become homogeneous, it generates
                gravitational waves. Woah! To the left is a picture of the{" "}
                <a href="https://en.wikipedia.org/wiki/Spontaneous_symmetry_breaking" target= "_blank">
                  Higgs wine bottle potential.{" "}
                </a>
              </p>
              <p className="contentDetail">
                I was ecstatic to have been able to do this research this
                semester. I've finally gotten behind the pop science that
                surrounds some of the terms mentioned here. To be able to study
                a phenomenon so beyond us all is both mind-blowing and humbling.
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mexican_hat_potential_polar.svg/1280px-Mexican_hat_potential_polar.svg.png"
              alt="Higgs Mexican Hat Potential"
              id="higgs"
            />
          </div>
          <div className="contentDetailBoxMini" style = {{backgroundColor: "#98bec8"}}>
            <h2>Some Other Research</h2>
            <p>
              Particle physics is suprisingly computational. To put it into
              perspective, the Large Hardon Collider collected about 5 petabytes
              of data when looking for the Higgs Boson. We need complex
              algorithms to filter out this noise and give us the good stuff!
              I'm going to explore the programming side of physics after I'm
              done with my current project.
            </p>
          </div>

          <div className="contentDetailBoxMini" style = {{backgroundColor: "#FDF0EC", color: "black"}}>
            <h2>Some Other Research</h2>
            <p>
              Particle physics is suprisingly computational. To put it into
              perspective, the Large Hardon Collider collected about 5 petabytes
              of data when looking for the Higgs Boson. We need complex
              algorithms to filter out this noise and give us the good stuff!
              I'm going to explore the programming side of physics after I'm
              done with my current project.
            </p>
          </div>

        </div>

        <div className="page page5">
          <div className="pageHeader">
            <h1>Outreach</h1>
            <hr className="divider dark"></hr>
            <p>
              I enjoy connecting with a wide audience and facilitating
              opportunities to students. As a result, I have involved myself a
              variety of outreach activities.
            </p>
          </div>
          <div className="contentDetailBox">
            <h2>SpaceVision 2021</h2>
            <p>
              My co-chair and I won the SEDS (Students for the Exploration and
              Development of Space) USA Chapter bid for SpaceVision 2021, one of
              the largest student-run conferences in the world. We're working
              with NASA Space Center Houston (visitor center of the Johnson
              Space Center), other SEDS Chapters, the national SEDS advisory
              board, and fellow SEDS members to plan this event of 500+ people!
              The 3 day conference schedule includes topics ranging from the
              Artemis missions to international space policy.
            </p>
          </div>
          {/*
          <h2>TEDxRice</h2>
          <p>
            I was looking to give a talk illuminating equations in physics that
            are overlooked but quite powerful in their implications and meaning.
            I think pop science today goes a little too far with the qualitative
            analysis of phenomena. While it's easily accessible this way, I felt
            that the quantitative aspect of physics is simulatenously overlooked
            and feared, even though there's a lot of weight to them. I'll try my
            best to explain pop science physics more rigorously but still fun.
          </p>
          */}

        </div>


        <div className="page page7">
        <div className="pageHeader">
            <h1>Contact</h1>
            <hr className="divider"></hr>
            <a id = "email" href = "mailto:brandon.n.khek@rice.edu"><strong>brandon.n.khek@rice.edu</strong></a>
            <p>
              I love to meet new people. Let me know what you think of my website or if you're interested in collaborative research.
            </p>
            <br></br>
            <p>Brandon Khek</p>
            <p>1605 Rice Blvd. • Houston, TX 77005</p>

            <div class="icon-bar">

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>

            <a href="https://www.linkedin.com/in/brandon-khek-5b5b5116a/" target= "_blank" class="linkedin">
              <i class="fa fa-linkedin"></i>
            </a>

            <a href="https://www.facebook.com/Rice.Physics.Astronomy"  target= "_blank" class="facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </div>

          </div>

        </div>
      </body>
    </div>
  );
}

export default App;
