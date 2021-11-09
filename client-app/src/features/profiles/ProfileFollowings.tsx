import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { CardGroup, Grid, GridColumn, Header, TabPane } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { ProfileCard } from './ProfileCard';

export const ProfileFollowings = observer(() => {
    const {profileStore} = useStore();
    const {profile, followings, loadFollowings, loadingFollowings} = profileStore;

    useEffect(() => {
        loadFollowings('following');
    }, [loadFollowings]);

    return (
        <TabPane loading={loadingFollowings}>
            <Grid>
                <GridColumn width={16}>
                    <Header floated='left' icon='user' content={`People following ${profile?.displayName}`} />
                </GridColumn>
                <GridColumn width={16}>
                    <CardGroup itemsPerRow={4}>
                        {followings.map(profile => (
                            <ProfileCard key={profile.username} profile={profile} />
                        ))}
                    </CardGroup>
                </GridColumn>
            </Grid>
        </TabPane>
    )
});
