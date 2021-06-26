import {
  FETCH_RECIPES,
  FETCH_SINGLE_RECIPE,
  COUNT_TOTAL,
  FETCH_BREAKFAST,
  FETCH_LUNCH,
  FETCH_DINNER,
  FETCH_DESSERTS,
  UPDATE_TEXT,
} from "../actions/types";

const initialState = {
  recipes: [],
  breakfast_recipes: [],
  lunch_recipes: [],
  dinner_recipes: [],
  desserts_recipes: [],
};

export const recipesReducer = (state = initialState, action) => {
  if (action.type === UPDATE_TEXT) {
    return { ...state, input_text: action.payload };
  }
  if (action.type === FETCH_RECIPES) {
    return {
      ...state,
      searched: true,
      recipes: action.payload,
    };
  }
  if (action.type === FETCH_SINGLE_RECIPE) {
    return {
      ...state,
      single_recipe: { ...action.payload },
    };
  }

  return state;
};
