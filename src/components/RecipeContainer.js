import React from "react";
import styled from "styled-components";
import SingleRecipe from "./SingleRecipe";

const RecipeContainer = ({ recipes = [] }) => {
  return (
    <MainWrapper>
      <h1 className="title-search">
        You have <span>{recipes.length} </span>
        results
      </h1>
      <Wrapper>
        {recipes.map((recipe) => {
          return <SingleRecipe key={recipe.id} {...recipe} />;
        })}
      </Wrapper>
    </MainWrapper>
  );
};

const Wrapper = styled.section`
  justify-self: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 3em;
  justify-content: space-around;
  gap: 1em;
`;

const MainWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  text-align: center;
  h1 {
    position: relative;
    display: inline-block;
  }
  h1::after {
    content: "";
    position: absolute;
    right: -15px;
    left: -15px;
    bottom: -12px;
    height: 5px;
    border-radius: 10px;
    background: #5fad41;
  }
  span {
    color: #e18335;
  }
`;

export default RecipeContainer;
