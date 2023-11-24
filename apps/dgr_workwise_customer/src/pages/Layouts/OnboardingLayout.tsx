import { ProductTypeHeader, NavBar } from 'ui'
import { PropsWithChildren, useState, useEffect } from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const CloseButton = () => {
    return (
      <IconButton>
        <Close />
      </IconButton>
    );
};

const OutsideLayout: React.FC<React.PropsWithChildren<{title?: string}>> = ({
    children, title
}) => {
    return (
        <>
            <NavBar title={title ?? 'Workwise'} rightAdornment={CloseButton} />
            <ProductTypeHeader productType='Business Account' />
            <Box flex={1} height='100%' minWidth={300}>
                {children}
            </Box>
        </>
    )
}

export default OutsideLayout