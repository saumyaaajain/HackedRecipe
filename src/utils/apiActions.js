/*
 * Copyright (c) 2020. Saumya Jain
 */

const getRecipes = () => fetch('https://bold-paper-259c.saumya.workers.dev').then((response) => response.json())

export { getRecipes };
