/*
 * Copyright (c) 2020. Saumya Jain
 */

import {getRecipes} from "./apiActions";

const capitalize = (s) => {
    if (typeof s !== 'string')
        return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export { capitalize, getRecipes }
