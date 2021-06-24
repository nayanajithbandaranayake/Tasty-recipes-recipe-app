import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Logo from "./Logo";
import { pages } from "../data/data";
const Navbar = () => {
  return (
    <Wrapper className="nav">
      <Logo />
      <button type="button" className="hamburger">
        <FaBars />
      </button>
      <div className="pages-container">
        {pages.map((page) => {
          return (
            <Link className="pages" key={page.id} to={page.url}>
              {page.text}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .pages {
    font-size: 1.2em;
    color: #000;
    text-transform: capitalize;
    text-decoration: none;
    margin: 0 1em;
    position: relative;
    font-weight: 600;
  }
  .pages::after {
    content: "";
    position: absolute;
    background: #06d6a0;
    height: 3px;
    right: -3px;
    left: -3px;
    bottom: -4px;
    border-radius: 5px;
    transform: scaleX(0);
    transition: var(--transition);
  }
  .pages:hover::after,
  .pages:focus::after {
    transform: scaleX(1);
  }
  .pages-container {
    display: none;
  }

  .hamburger {
    margin-left: 2em;
    margin-right: 1.5em;
    font-size: 1.8em;
    transition: var(--transition);
  }
  .hamburger:hover,
  .hamburger:focus {
    color: #ffc43d;
    transform: scale(1.05);
  }

  @media (min-width: 1023px) {
    .pages-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 3em;
    }
    .hamburger {
      display: none;
    }
  }
  @media (max-width: 560px) {
    .hamburger {
      font-size: 3em;
    }
    .nav {
      height: 5em;
    }
  }
`;

export default Navbar;
