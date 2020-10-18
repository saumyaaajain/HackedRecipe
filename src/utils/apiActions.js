/*
 * Copyright (c) 2020. Saumya Jain
 */

const getRecipes = () => fetch('http://starlord.hackerearth.com/recipe').then((response) => response.json())

export { getRecipes };
