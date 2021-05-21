/*
 * Copyright (c) 2020. Saumya Jain
 */

import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import RecipeDetails from "./RecipeDetails";

function DetailsModal({id}) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            size='large'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color='teal'>View More</Button>}
        >
            <Modal.Header>
                Choose Your Favourite Dish
            </Modal.Header>
            <Modal.Content>
                <RecipeDetails
                    id={id}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button
                    color='black'
                    onClick={() => setOpen(false)}
                >
                        Close
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default DetailsModal
