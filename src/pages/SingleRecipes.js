import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { FETCH_SINGLE_RECIPE } from "../actions/types";

const SingleRecipes = ({
  single_recipe: {
    title,
    extendedIngredients,
    summary,
    dishTypes,
    image,
    readyInMinutes,
    servings,
    instructions,
  },
  dispatch,
}) => {
  const { id } = useParams();

  const fetchSingleRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=842d053de45f49cfa0acde61ec528349`
    );
    const recipe = await response.json();
    dispatch({ type: FETCH_SINGLE_RECIPE, payload: recipe });
  };

  React.useEffect(() => {
    fetchSingleRecipe();
  }, []);

  return (
    <Wrapper className="section">
      <img src={image} alt={title} className="cover-image" />
      <section>
        <img src={image} alt={title} />
        <div className="info-container">
          <h2>Info</h2>
          <div>
            <span>{dishTypes[0]}</span>
            <span>{dishTypes[1]}</span>
            <span>Total time: {readyInMinutes} mins.</span>
            <span>yield: {servings}</span>
          </div>
        </div>
        <article className="ingredients-container">
          <ul>
            {extendedIngredients.map((item) => {
              return (
                <li key={item.id}>
                  <input type="checkbox" />
                  <h3>{item.original}</h3>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="summary">
          <h2>Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        </article>
        <article className="instructions">
          <h2>Instructions</h2>
          <div dangerouslySetInnerHTML={{ __html: instructions }}></div>
        </article>
      </section>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  const { single_recipe } = state;
  return {
    single_recipe,
  };
};

const Wrapper = styled.main`
  .cover-image {
    filter: blur(10px);
  }
  display: grid;
  place-items: center;
  section {
    margin: 3em;
    background: #fff;
    min-height: calc(100% - 6em);
    min-width: calc(100% - 6em);
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto 4em 70% auto;
    img {
      height: 100%;
      grid-column: 1;
      grid-row: 2 / 3;
    }
    .info-container {
      grid-column: 2;
      grid-row: 2;
    }
    .summary {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    .ingredients-container {
      grid-column: 2;
      grid-row: 3;
      ul {
        list-style: none;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 1em;
          h3 {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

export default connect(mapStateToProps)(SingleRecipes);
