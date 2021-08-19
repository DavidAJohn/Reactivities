import React from 'react'
import { Button, Item, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activities: Activity[];
}

export const ActivityList = ({activities}: Props) => {
    return (
        <Segment>
            <ItemGroup divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <ItemHeader as='a'>{activity.title}</ItemHeader>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floated='right' content='View' color='blue' />
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </Item.Content>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}
