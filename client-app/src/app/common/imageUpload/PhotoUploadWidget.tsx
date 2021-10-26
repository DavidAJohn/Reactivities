import React from 'react'
import { Grid, GridColumn, Header } from 'semantic-ui-react'

export const PhotoUploadWidget = () => {
    return (
        <Grid>
            <GridColumn width={4}>
                <Header color='teal' content='Step 1 - Add Photo' />
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header color='teal' content='Step 2 - Resize Image' />
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header color='teal' content='Step 3 - Preview & Upload' />
            </GridColumn>
        </Grid>
    )
}
