import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { UPDATE_TEXT, FETCH_RECIPES } from "../actions/types";

const SearchField = ({ input_text, dispatch, recipe_search }) => {
  const scroll = () => {
    return window.scrollTo({ top: 850, behavior: "smooth" });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: UPDATE_TEXT, payload: e.target.value });
  };

  const fetchRecipes = async (url) => {
    const response = await fetch(`${url}${input_text}`);
    const { results } = await response.json();
    const final = results.filter(
      (recipe) =>
        recipe.image !=
        "https://spoonacular.com/recipeImages/667707-312x231.jpg"
    );
    dispatch({ type: FETCH_RECIPES, payload: final });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(recipe_search);
    setTimeout(() => {
      scroll();
    }, 700);
  };

  return (
    <Wrapper>
      <h1 className="title-form">Search your favourite Recipes...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="recipes awaits..."
          value={input_text}
          onChange={handleChange}
        />
        <button type="submit" className="btn search-btn">
          Search
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .title-form {
    font-size: 3em;
    margin: 2em 2.5em;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;

    letter-spacing: 5px;
  }
  form {
    margin-right: 4rem;
  }
  .form-input {
    padding: 1em 1.5em;

    width: calc(100vw - 28em);
    border-radius: 10px 0 0 10px;
    height: 3rem;
    border: none;
  }
  .form-input::placeholder {
    font-family: monospace;
    font-style: italic;
  }
  .search-btn {
    font-size: 1em;
    border-radius: 0 10px 10px 0;
    padding: 0.6em 1em 0.85em 1em;
    background: #f26419;
    transition: var(--transition);
    height: 3rem;
  }
  .search-btn:hover {
    background: #9a3c09;
  }
  @media (min-width: 1024px) {
    .title-form {
      margin: 1.5em 2em;
    }

    .form-input {
      width: 30em;
    }
  }
  @media (max-width: 560px) {
    .title-form {
      font-size: 3em;
    }
    form {
      display: grid;
      grid-template-rows: 3em 3em;
      grid-template-columns: 150%;
      align-items: center;
      justify-content: center;
      margin-right: 1em;
    }
    .form-input {
      border-radius: 8px;
      width: 100%;
      height: 3em;
      margin-bottom: 0;
    }
    .search-btn {
      width: 30%;
      border-radius: 8px;
      justify-self: center;
      height: 100%;
      margin-top: 1em;
      padding: 0.5em 0.5em;
    }
  }
  @media (max-width: 440px) {
    .search-btn {
      height: 150%;
      width: 20%;
      font-size: 1.5em;
      margin-top: 2.8em;
    }
    .form-input {
      width: 50%;
      margin-left: 8em;
    }
    .title-form {
      margin: auto 1em 4em 1.5em;
      font-size: 3.5em;
    }
  }
  @media (min-width: 1921px) {
    form {
      display: grid;
      grid-template-columns: 80% 20%;
      align-items: center;
    }
    .search-btn {
      height: 100%;
      width: 100%;
      grid-column: 2;
      margin: 0;
    }
    .form-input {
      height: 100%;
      margin: 0;
      grid-column: 1;

      margin-left: 8em;
    }
  }
`;

const mapStateToProps = (state) => {
  const { input_text, recipe_search } = state;
  return {
    input_text,
    recipe_search,
  };
};

export default connect(mapStateToProps)(SearchField);
