/*
 * Copyright (c) 2020. Saumya Jain
 */

import React, {useEffect, useState} from 'react';
import {Card, Icon, Input, Segment} from 'semantic-ui-react'
import {getRecipes} from '../utils'
import 'semantic-ui-css/semantic.min.css';
import {RecipeCard} from "./RecipeCard";

function LandingPage() {
    const [generatedRecipes, setGeneratedRecipes] = useState([])
    const [source, setSource] = useState([])

    useEffect(() => {
        getRecipes().then((recipes) => {
            setSource(recipes)
            setGeneratedRecipes(recipes)
        })
    }, [])

    return (
        <div
            className={'Landing-Page'}
        >
            <Segment
                clearing
            >
                <Input
                    size={'large'}
                    icon={
                        <Icon
                            name='search'
                            inverted circular link
                        />
                    }
                    placeholder='Filter...'
                    onChange={
                        ({target}) => {
                            setGeneratedRecipes(
                                source.filter(({name}) => {
                                    return name
                                        .toLowerCase()
                                        .includes(target
                                                    .value
                                                    .toLowerCase()
                                        )
                                })
                            )
                        }
                    }
                />
            </Segment>
            <div
                id="grid"
                className="ui grid"
            >
                {
                    generatedRecipes.map((recipe) => {
                        return (
                            <RecipeCard
                                id={recipe.id}
                                {...recipe}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default LandingPage;
