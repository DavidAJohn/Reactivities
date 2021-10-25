import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Grid, GridColumn } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { useStore } from '../../app/stores/store'
import { ProfileContent } from './ProfileContent'
import { ProfileHeader } from './ProfileHeader'

export const ProfilePage = observer(() => {
    const {username} = useParams<{username: string}>();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile} = profileStore;

    useEffect(() => {
        loadProfile(username);
    }, [loadProfile, username])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />

    return (
        <Grid>
            <GridColumn width={16}>
                {profile &&
                <ProfileHeader profile={profile} />
                }
                <ProfileContent />
            </GridColumn>
        </Grid>
    )
});
