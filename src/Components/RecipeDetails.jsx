/*
 * Copyright (c) 2020. Saumya Jain
 */

import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {capitalize, getRecipes} from "../utils";
import {Icon} from "semantic-ui-react";
import LazyLoadImage from "../Wrapper/LazyLoadImage";

async function getRecipe(currentId) {
    let recipes = await getRecipes().then((data) => data)
    return recipes.filter(({id}) => Number(id) === Number(currentId))[0]
}

function RecipeDetails(props) {
    let {id} = useParams();
    if(props.id){
        id = props.id
    }
    const [currentRecipe, setcurrentRecipe] = useState({})
    useEffect(() => {
        getRecipe(id).then((recipes) => {
            setcurrentRecipe(recipes)
        })
    }, [id])
    const {
        name, image, label, price, description, category
    } = currentRecipe
    return (
        <div id="container">
            <div className="product-details">
                <h1>{name}</h1>
                <p className="information">{description}</p>
                <ul>
                    {label && <li>{capitalize(label)}</li>}
                    {category && <li>{capitalize(category)}</li>}
                </ul>
                <div className="control">
                    <Link to="/pay" className="btn">
                        <span className="price">$ {price}</span>
                        <Icon name='money' />
                    </Link>
                </div>
            </div>
            <div className="product-image">
                <LazyLoadImage src={image} />
            </div>
        </div>
)
}

export default RecipeDetails;
