import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        Tasty <span>Recipes</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 3em;
  padding: 8px;

  border-radius: 10px;

  .logo {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.8em;
    font-weight: 800;
    font-style: italic;

    color: #ef476f;
    span {
      color: #ff8360;
    }
  }
  @media (max-width: 560px) {
    .logo {
      font-size: 2em;
    }
  }
`;
export default Logo;
