import React from "react";

import { connect } from "react-redux";
import styled from "styled-components";
import { SearchField } from "../components";
import { RecipeContainer } from "../components";

const MainMenu = ({ recipes }) => {
  return (
    <Wrapper>
      <section className="section section-center">
        <SearchField />
        <img
          src="/images/starter_image.jpg"
          alt="home-image-salmon"
          className="cover-image"
        />
      </section>
      {recipes.length > 0 ? <RecipeContainer recipes={recipes} /> : null}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

const mapStateToProps = (state) => {
  const { recipes } = state;
  return {
    recipes,
  };
};

export default connect(mapStateToProps)(MainMenu);
