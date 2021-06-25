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
        <h1 className="title">{title}</h1>
        <img src={image} alt={title} />
        <div className="info-container">
          <ul>
            <fieldset>
              <legend>Dish type</legend>
              <li>{dishTypes[0]}</li>
              <li>{dishTypes[1]}</li>
            </fieldset>
            <fieldset>
              <li>Total time : {readyInMinutes} mins.</li>
              <li>yield : {servings}</li>
            </fieldset>
          </ul>
        </div>
        <article className="ingredients-container">
          <h2 className="heading">Ingredients</h2>
          <ul>
            {extendedIngredients.map((item) => {
              return (
                <li key={item.id} className="ingredient">
                  <input type="checkbox" />
                  <h3>{item.original}</h3>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="summary">
          <h2 className="heading">Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        </article>
        <article className="instructions">
          <h2 className="heading">Instructions</h2>
          <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
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
  max-height: 100vh;
  display: grid;
  place-items: center;

  .heading {
    margin-bottom: 50px;
    margin-top: 30px;
    display: inline-block;
    position: relative;
  }
  .heading::after {
    content: "";
    position: absolute;
    left: -15px;
    right: -15px;
    bottom: -15px;
    height: 5px;
    border-radius: 10px;
    background: #06d6a0;
  }

  .cover-image {
    filter: blur(10px);
  }
  section {
    text-align: center;
    margin: 3em;
    background: #fff;
    height: 290vh;
    min-width: calc(100% - 6em);
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 6em 30% 65vh 65vh 65vh;

    justify-content: center;
    align-items: center;

    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
    padding: 5em;
    border-radius: 10px;

    article {
      margin-bottom: 30px;
    }
    .title {
      grid-column: 1 / 3;
      grid-row: 1;
      text-align: center;
      font-size: 2em;
      position: relative;
      display: inline-block;
      margin-bottom: 4em;
      justify-self: center;
    }
    .title::after {
      content: "";
      position: absolute;
      left: -15px;
      right: -15px;
      bottom: -15px;
      height: 5px;
      border-radius: 10px;
      background: #06d6a0;
    }

    img {
      border-radius: 10px;

      height: 80%;
      width: 100%;
      grid-column: 1;
      grid-row: 2;
      object-fit: cover;
    }
    .info-container {
      grid-column: 2;
      grid-row: 2;
      ul {
        list-style: none;
      }
    }
    .summary {
      grid-column: 1 / 3;
      grid-row: 5;
      line-height: 1.5em;
    }
    .ingredients-container {
      margin-top: 2em;
      grid-column: 1 / 3;
      grid-row: 3;
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
    .instructions {
      grid-column: 1 / 3;
      grid-row: 4;
      line-height: 1.5em;
    }
    fieldset {
      margin: 15px;
      padding: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 20px;
      legend {
        padding: 0 5px;
      }
    }
    .ingredient {
      font-size: 0.7em;
    }
  }
`;

export default connect(mapStateToProps)(SingleRecipes);
