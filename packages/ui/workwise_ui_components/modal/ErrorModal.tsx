/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import {
    Dialog,
    Stack,
    Typography,
    Box,
    DialogProps,
    TypographyProps,
    PaperProps,
} from '@mui/material';
import { Button } from '../buttons';

type Props = {
    titleProps?: TypographyProps;
    bodyProps?: TypographyProps;
    paperProps?: PaperProps;
    paperWidth?: string;
    open?: boolean;
    onClose?: () => void;
    icon?: React.ReactNode;
    title: string;
    body: string;
    actions?: React.FC<{ onClose?: () => void }>;
};

export const ErrorModal: React.FC<Props> = ({
    titleProps = {},
    bodyProps = {},
    paperProps = {},
    open = false,
    onClose,
    icon,
    title,
    body,
    actions: Actions,
}) => {
    const handleClose: DialogProps['onClose'] = (_event, reason) => {
        if(reason === 'backdropClick') return;
        onClose?.()
    }
    return (
        <Dialog
        maxWidth='xl'
        open={open}
        fullWidth
        onClose={handleClose}
        disableEscapeKeyDown
        BackdropProps={{
            style: {
                opacity: 0
            }
        }}
        PaperProps={{
            ...paperProps,
            sx: {
                py: 2,
                px: 1,
                alignSelf: 'flex-end',
                mx: 0,
                maxWidth: (theme) => theme.breakpoints.values.sm,
                ...paperProps.sx
            }
        }}
        >
            <Stack direction='row' gap={1} justifyContent='flex-start'>
                <Box mt={0} pt={0}>
                    {icon}
                </Box>
                <Stack>
                    <Typography variant='caption' fontWeight='bold' mb={1} {...titleProps}>
                        {title}
                    </Typography>
                    <Typography variant='caption' color='textSecondary' {...bodyProps}>
                        {body}
                    </Typography>
                    {Actions && <Actions onClose={onClose} />}
                </Stack>
            </Stack>
        </Dialog>
    )
}