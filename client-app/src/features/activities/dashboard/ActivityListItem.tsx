import React, { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Item, ItemDescription, ItemExtra, ItemHeader, ItemMeta, Label } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';

interface Props {
    activity: Activity;
}

export const ActivityListItem = ({activity}: Props) => {
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
    return (
        <>
            <Item key={activity.id}>
                <Item.Content>
                    <ItemHeader as='a'>{activity.title}</ItemHeader>
                    <ItemMeta>{activity.date}</ItemMeta>
                    <ItemDescription>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>
                    </ItemDescription>
                    <ItemExtra>
                        <Button 
                            as={Link} to={`/activities/${activity.id}`}
                            floated='right' 
                            content='View' 
                            color='blue' 
                        />
                        <Button 
                            loading={loading && target === activity.id} 
                            name={activity.id} 
                            onClick={(e) => handleActivityDelete(e, activity.id)} 
                            floated='right' 
                            content='Delete' 
                            color='red' 
                        />
                        <Label basic content={activity.category} />
                    </ItemExtra>
                </Item.Content>
            </Item>
        </>
    )
}

export default ActivityListItem;
