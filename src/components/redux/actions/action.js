export const SAVERECIPE = 'SAVERECIPE';

export function saveRecipe(content) {
  return {
    type: SAVERECIPE,
    content
  }
}
