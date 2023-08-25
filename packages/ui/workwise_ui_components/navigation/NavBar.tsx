/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { MetrobankLogo } from "../../icons/MetrobankLogoForTestPurposesOnly";
import { Stack, Box, Typography } from '@mui/material';

type Props = {
    title: string
    rightAdornment?: React.FC
}

export const NavBar: React.FC<Props> = ({ title, rightAdornment: RightAdornment }) => {
    return (
        <Stack
        direction='row'
        alignItems='center'
        borderBottom={(theme) => `1px solid ${theme.palette.grey[200]}`}
        px={[2, 3]}
        py={2}
        >
            <Box visibility={['hidden', 'visible']} flex={1}>
                <Box display={['none', 'block']}>
                    <MetrobankLogo width={150} />
                </Box>
            </Box>
            <Typography fontWeight='bold' textAlign='center' flex={[3, 1]}>
                {title}
            </Typography>
            <Stack direction='row' justifyContent='flex-end' flex={1}>
                {RightAdornment && <RightAdornment />}
            </Stack>
        </Stack>
    )
}