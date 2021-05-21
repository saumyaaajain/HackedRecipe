/*
 * Copyright (c) 2020. Saumya Jain
 */

import React from 'react';
import {Card, Icon} from 'semantic-ui-react'
import {
    Link,
} from "react-router-dom";
import Image from '../Wrapper/LazyLoadImage'
import { capitalize } from '../utils/'
import {colorEnums} from "../constants";
import DetailsModal from "./DetailsModal";

const RecipePreview = (
    {id, name, image, label, price, description, category}
    ) => {
    return (
        <Card
            raised
            color={colorEnums[
                Math.floor(Math.random() * colorEnums.length)
                ]}
        >
            <Link
                to={`/${id}`}
            >
                <Image
                    src={image}
                    wrapped
                />
            </Link>
            <Card.Content>
                <Card.Header>
                    {name}
                </Card.Header>
                <Card.Meta>
                    <span>
                        {label
                            ? `${capitalize(category)} - ${capitalize(label)}`
                            : capitalize(category) }
                    </span>
                    {label === 'Hot' &&
                        <Icon
                            color={"red"}
                            name='fire'
                        />
                    }
                    {label === 'New' &&
                        <Icon
                            color={"red"}
                            name='angle double up'
                        />
                    }
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content
                extra
            >
                <span
                    style={{color: "green"}}>
                    {price}
                </span>
                <DetailsModal
                    id={id}
                />
            </Card.Content>
        </Card>
    )
}

export default RecipePreview;
