import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react'
import { Header, ItemGroup, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

const ActivityList = observer(() => {
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    <Segment>
                        <ItemGroup divided>
                            {activities.map(activity => (
                                <ActivityListItem key={activity.id} activity={activity} />
                            ))}
                        </ItemGroup>
                    </Segment>
                </Fragment>
            ))}
        </>
        
    )}
);

export default ActivityList;