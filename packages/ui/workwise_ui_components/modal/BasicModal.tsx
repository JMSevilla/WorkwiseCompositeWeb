/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Modal, Typography, Box, Grid } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    overflow: 'auto',
};

type ModalProps = {
    toggleModal?: () => void;
    openModal: boolean;
    content: React.ReactNode;
    sx?: any;
    hasCloseButton?: boolean;
    renderCloseButton?: React.FC;
    onCloseModal?: any;
};

const CloseButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <>
            <CloseRounded />
            <Typography fontSize={14} fontWeight='600' sx={{ color: '#000000'}}>
                Close
            </Typography>
        </>
    )
}

function BasicModal(props: ModalProps){
    const {
        openModal,
        toggleModal,
        content,
        sx,
        hasCloseButton,
        renderCloseButton: CustomCloseButton,
        onCloseModal,
    } = props;

    return (
        <Modal
        open={openModal}
        onClose={() => {
            toggleModal?.()
            onCloseModal?.()
        }}
        >
            <Box sx={{ ...style, ...sx }}>
                {hasCloseButton && (
                    <Grid mt={1} container xs={12} display='flex' justifyContent='end'>
                        <Grid 
                        xs={1}
                        display='flex'
                        alignItems='center'
                        onClick={() => toggleModal?.()}
                        sx={{ cursor: 'pointer', height: '100%'}}
                        >
                            {CustomCloseButton ? <CustomCloseButton /> : <CloseButton /> }
                        </Grid>
                    </Grid>
                )}
                {content}
            </Box>
        </Modal>
    )
}