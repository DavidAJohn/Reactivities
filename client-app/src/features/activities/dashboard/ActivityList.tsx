import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

const ActivityList = observer(() => {
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
    return (
        <Segment>
            <ItemGroup divided>
                {activitiesByDate.map(activity => (
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
                ))}
            </ItemGroup>
        </Segment>
    )}
);

export default ActivityList;