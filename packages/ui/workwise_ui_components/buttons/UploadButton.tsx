/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Button, ButtonProps } from '@mui/material';

interface Props {
    text?: string
    onChange?: (event: any) => void
}

export const UploadButton: React.FC<Props> = ({
    text, onChange
}) => {
    return (
        <Button
        component='label'
        sx={{ mx: 'auto', mt: 2, width: [, 250, 250] }}
        color='primary'
        variant='contained'
        fullWidth
        >
            {text}
            <input type='file' hidden onChange={onChange} />
        </Button>
    )
}