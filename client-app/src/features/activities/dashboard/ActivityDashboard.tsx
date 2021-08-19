import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityList } from './ActivityList'

interface Props {
    activities: Activity[];
}

export const ActivityDashboard = ({activities}: Props) => {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} />
            </GridColumn>
            <GridColumn width='6'>
                {activities[0] && 
                    <ActivityDetails activity={activities[0]} />
                }
            </GridColumn>
        </Grid>
    )
}
