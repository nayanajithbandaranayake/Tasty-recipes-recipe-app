import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const singleRecipe = ({ id, title, image }) => {
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Link to={`/${id}`} className="btn">
        Details
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #afd0bf;
  overflow: hidden;
  border-radius: 1em;
  transition: var(--transition);
  display: grid;
  grid-template-rows: 15em 5em 5em;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 25em;
  width: 19em;
  box-shadow: 0 0 0.2em 0.1em rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 0.5em 0.3em rgba(0, 0, 0, 0.4);
  }

  img {
    height: 15em;
    object-fit: cover;
  }
  h3 {
    margin: 1em 1em;
    font-size: 1.3em;
    color: #3a2d32;
  }
  a {
    border: 2px solid #3bc14a;
    background: #3bc14a;
    color: white;
    margin-bottom: 0.8em;
    text-decoration: none;
    font-size: 1.3em;
    font-family: monospace;
    padding: 0.5em 0.5em;
    transition: var(--transition);
    &:hover {
      background: #fff;
      color: #3bc14a;
    }
  }
  @media (max-width: 920px) {
    & {
      height: 15em;
      width: 40em;
      grid-template-rows: 70% 30%;
      grid-template-columns: 19em auto;
      justify-items: center;
      // grid-template-areas: "i t", "i b";
    }
    img {
      grid-row: span 2;
      grid-column: 1 / 2;
      width: 100%;
      height: 100%;
      justify-self: left;
    } /*
    h3 {
      grid-area: t;
    }
    */
    a {
      grid-column: 2;
      grid-row: 2;
    }
  }
`;

export default singleRecipe;
