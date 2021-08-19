import React from 'react'
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity;
}

export const ActivityDetails = ({activity}: Props) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}
