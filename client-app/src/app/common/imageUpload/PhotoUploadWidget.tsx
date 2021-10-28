import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Grid, GridColumn, Header } from 'semantic-ui-react'
import { PhotoWidgetDropzone } from './PhotoWidgetDropzone'
import { Cropper } from 'react-cropper'
import { PhotoWidgetCropper } from './PhotoWidgetCropper'

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export const PhotoUploadWidget = ({loading, uploadPhoto}: Props) => {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    const onCrop = () => {
        if(cropper){
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])
    
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
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                )}
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header color='teal' content='Step 3 - Preview & Upload' />
                {files && files.length > 0 &&
                <>
                    <div className='img-preview' style={{minHeight: 200, overflow: 'hidden'}}></div>
                    <ButtonGroup width={2}>
                        <Button loading={loading} onClick={onCrop} positive icon='check' />
                        <Button disabled={loading} onClick={() => setFiles([])} icon='close' />
                    </ButtonGroup>
                </>
                }
            </GridColumn>
        </Grid>
    )
}
