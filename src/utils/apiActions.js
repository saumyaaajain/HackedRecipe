/*
 * Copyright (c) 2020. Saumya Jain
 */

const getRecipes = () =>
    fetch('https://recipe-json.herokuapp.com/recipes')
        .then((response) => {
            return response.json();
})

export { getRecipes };
