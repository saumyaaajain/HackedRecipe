/*
 * Copyright (c) 2020. Saumya Jain
 */

import {Header, Icon, Segment} from "semantic-ui-react";
import {Link,} from "react-router-dom";
import React from "react";

const DefaultHeader = () => (
    <Segment clearing>
        <Link
            to="/"
        >
            <Header
                as='h2'
                floated='left'
            >
                <Icon
                    name='utensil spoon'
                />
                <Header.Content>
                    Sam's Pizzeria
                    <Header.Subheader>
                        Select your space delicacy
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Link>
    </Segment>
)

export default DefaultHeader
