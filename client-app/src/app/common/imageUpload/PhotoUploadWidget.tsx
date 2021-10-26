import React, { useState } from 'react'
import { Grid, GridColumn, Header, Image } from 'semantic-ui-react'
import { PhotoWidgetDropzone } from './PhotoWidgetDropzone'

export const PhotoUploadWidget = () => {
    const [files, setFiles] = useState<any>([]);
    
    return (
        <Grid>
            <GridColumn width={4}>
                <Header color='teal' content='Step 1 - Add Photo' />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header color='teal' content='Step 2 - Resize Image' />
                {files && files.length > 0 && (
                    <Image src={files[0].preview} />
                )}
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header color='teal' content='Step 3 - Preview & Upload' />
            </GridColumn>
        </Grid>
    )
}
