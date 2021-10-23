import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { ProfileHeader } from './ProfileHeader'

export const ProfilePage = () => {
    return (
        <Grid>
            <GridColumn width={16}>
                <ProfileHeader />
            </GridColumn>
        </Grid>
    )
}
