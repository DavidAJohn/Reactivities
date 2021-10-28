import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { Button, Card, CardGroup, Grid, GridColumn, Header, Image, TabPane } from 'semantic-ui-react';
import { PhotoUploadWidget } from '../../app/common/imageUpload/PhotoUploadWidget';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';

interface Props {
    profile: Profile;
}

export const ProfilePhotos = observer(({profile}: Props) => {
    const {profileStore: {isCurrentUser, uploadPhoto, uploading}} = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);

    const handlePhotoUpload = (file: Blob) => {
        uploadPhoto(file)
            .then(() => setAddPhotoMode(false));
    }
    
    return (
        <TabPane>
            <Grid>
                <GridColumn width={16}>
                    <Header floated='left' icon='image' content='Photos' />
                    {isCurrentUser && (
                        <Button 
                            floated='right' 
                            basic 
                            content={addPhotoMode ? 'Cancel' : 'Add Photo'} 
                            onClick={() => setAddPhotoMode(!addPhotoMode)}
                        />
                    )}
                </GridColumn>
                <GridColumn width={16}>
                    {addPhotoMode ? (
                        <PhotoUploadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                    ) : (
                        <CardGroup itemsPerRow={5}>
                            {profile.photos?.map(photo => (
                                <Card key={photo.id}>
                                    <Image src={photo.url} />
                                </Card>
                            ))}
                        </CardGroup>
                    )}
                </GridColumn>
            </Grid>
        </TabPane>
    )
});
