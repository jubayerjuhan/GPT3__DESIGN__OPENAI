import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#what-is-GPT3">What is GPT3?</a>
    </p>
    <p>
      <a href="#openAI">Open AI</a>
    </p>
    <p>
      <a href="#case-studies">Case Studies</a>
    </p>
    <p>
      <a href="#library">Library</a>
    </p>
  </>
);
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-hamburger">
        {open ? (
          <RiCloseLine onClick={() => setOpen(false)} color="#FFFF" size={27} />
        ) : (
          <RiMenu3Line onClick={() => setOpen(true)} color="#FFFF" size={27} />
        )}

        {open && (
          <div className="gpt3__navbar-hamburger_container slide-left">
            <div className="gpt3__navbar-hamburger_links">
              <Menu />
              <div className="gpt3__navbar-hamburger_container_links_sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
