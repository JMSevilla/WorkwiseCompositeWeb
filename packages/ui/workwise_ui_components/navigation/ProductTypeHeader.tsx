/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Stack, Typography } from '@mui/material';

export const ProductTypeHeader: React.FC<{ productType: string }> = ({ productType }) => {
    return (
        <Stack direction='row' boxShadow='0 4px 8px rgba(210, 210, 210, 0.25)' justifyContent='center'>
            <Stack
            justifyContent='space-round'
            alignItems='space-around'
            textAlign='center'
            maxWidth='70%'
            p={2}
            >
                <Typography fontSize='0.9rem' color={(theme) => theme.palette.text.secondary}>
                    You are applying for a
                </Typography>
                <Typography fontWeight='bold' color='secondary'>
                    {productType}
                </Typography>
            </Stack>
        </Stack>
    )
}