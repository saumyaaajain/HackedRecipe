/*
 * Copyright (c) 2020. Saumya Jain
 */

const getRecipes = () => fetch('https://coda.saumyajain.com/api/').then((response) => response.json())

export { getRecipes };
