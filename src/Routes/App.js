import React, { useState } from "react";
import "./App.css";
import "./hamburger.css";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";

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
            <NavLink to="/About">
              <p className="route">About</p>
            </NavLink>
          </div>
        </Slide>

        <div className="page1">
          <h1 id="name">Brandon Khek.</h1>
          <p className="tagline">Astrophysics Student at Rice University</p>
          <p>
            <i class="arrow down"></i>
          </p>
        </div>

        <div className="page2">
          <Slide right>
            <div>
              <h2>As you can tell, I like making websites!</h2>
              <p>
                I actually made this one from scratch in React.js. Not bad for
                an astrophysics major, eh?
              </p>
            </div>
          </Slide>
        </div>
      </body>
    </div>
  );
}

export default App;