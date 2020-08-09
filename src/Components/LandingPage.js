/*
 * Copyright (c) 2020. Saumya Jain
 */

import React, {useEffect, useState} from 'react';
import {Card, Icon, Input, Segment} from 'semantic-ui-react'
import RecipePreview from "./RecipePreview";
import {getRecipes} from '../utils'
import 'semantic-ui-css/semantic.min.css';
import {RecipeCard} from "./RecipeCard";

const recipeCards = (recipes) => recipes.sort((a, b) => {
    if (a.label === 'Hot' || a.label === 'New') {
        return false
    } else {
        return true
    }
}).map((item) => <RecipePreview key={item.id + 10000} {...item} />)

function LandingPage() {
    const [generatedRecipes, setGeneratedRecipes] = useState([])
    const [source, setSource] = useState([])
    useEffect(() => {
        getRecipes().then((recipes) => {
            setSource(recipes)
            setGeneratedRecipes(recipeCards(recipes))
        })
    }, [])
    return (
        <div className={'Landing-Page'}>
            <Segment clearing>
                <Input
                    size={'large'}
                    icon={<Icon name='search' inverted circular link/>}
                    placeholder='Filter...'
                    onChange={({target}) => {
                        setGeneratedRecipes(recipeCards(source.filter(({name}) => {
                            return name.toLowerCase().includes(target.value.toLowerCase())
                        })))
                    }}
                    // temp0.filter(({name}) => name.toLowerCase().includes(a.toLowerCase()))
                />
            </Segment>
            <div className="ui grid">
                {/*{generatedRecipes}*/}
                {generatedRecipes.map((recipe) => {
                    // console.log(recipe);
                    return <RecipeCard {...recipe}/>
                })}
            </div>
        </div>
    );
}

export default LandingPage;
