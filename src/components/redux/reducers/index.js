import { SAVERECIPE } from '../actions/action'

const initialState = {
  recipes: [], 
}

function recipeReducer(state = initialState, action) {
  switch(action.type) {
    case SAVERECIPE:
      return {
        recipes: [...state.recipes, action.content]
      };
    default:
      return state;
  }
}

export default recipeReducer;