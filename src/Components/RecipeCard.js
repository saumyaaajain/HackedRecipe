/*
 * Copyright (c) 2020. Saumya Jain
 */

import React from "react";
import {Link} from "react-router-dom";
import './Card.css';
import './Button.css';

export const RecipeCard = (recipe) => {
    return (
        <div
            // id={recipe.id}
            className='newsCard news-Slide-up'
            style={{
                "backgroundImage": `url(${recipe.image})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
            }}>
            {recipe.label.length > 0 && <div className="type-card">{recipe.label}</div>}
            <div className='newsCaption'>
                <h2 className='newsCaption-title'>{recipe.name}</h2>
                <h4 className='newsCaption-title'>{recipe.label}</h4>
                <p className='newsCaption-content'>
                    {recipe.description}
                </p>
                <Link to={`/${recipe.id}`} >
                    <div className="button">
                        <span className="button__mask"/>
                        <span className="button__text">View More</span>
                        <span className="button__text button__text--bis">View More</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}