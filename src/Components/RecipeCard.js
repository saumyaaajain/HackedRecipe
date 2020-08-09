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
            id={recipe.props.id}
            className='newsCard news-Slide-up'
            style={{
                "backgroundImage": `url(${recipe.props.image})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
            }}>
            {recipe.props.label.length > 0 && <div className="type-card">{recipe.props.label}</div>}
            <div className='newsCaption'>
                <h2 className='newsCaption-title'>{recipe.props.name}</h2>
                <h4 className='newsCaption-title'>{recipe.props.label}</h4>
                <p className='newsCaption-content'>
                    {recipe.props.description}
                </p>
                <Link to={`/${recipe.props.id}`} >
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