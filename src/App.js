import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { MainMenu, SingleRecipes } from "./pages";
import { NavBar } from "./components";
import { recipesReducer } from "./reducers/recipesReducer";

const initialState = {
  input_text: "",
  recipe_search:
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=842d053de45f49cfa0acde61ec528349&number=300&limitLicence=true&query=",

  meal_type:
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=842d053de45f49cfa0acde61ec528349&number=20&limitLicence=true&type=",

  recipes: [],
  breakfast_recipes: [],
  lunch_recipes: [],
  dinner_recipes: [],
  dessert_recipes: [],
  total_recipes: 0,
  single_recipe: {
    instructions: "",
    title: "",
    id: null,
    extendedIngredients: [],
    summary: "",
    dishTypes: [],
    image: "",
    readyInMinutes: 0,
    servings: 0,
  },

  searched: false,
};

const store = createStore(
  recipesReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>
          <Route exact path="/:id" children={<SingleRecipes />} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
