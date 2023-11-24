/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CatalogLayout from '~/pages/Layouts/CatalogLayout';
import { ReactElement } from 'react';

function ProductCatalogHeader(){
    return (
        <Grid container item xs={12} display={['none', , 'flex']} alignItems='center' height='40px'>
            <Grid container item md={9} display='flex' justifyContent='end' alignItems='center'>
                <Grid item>
                    <Typography textAlign='end' fontSize='15px'>
                        WORKWISE PRODUCTIVITY
                    </Typography>
                </Grid>
                <Grid display='flex' item alignItems='center'>
                    <ExpandMoreIcon />
                </Grid>
                <Grid item md={1}>
                    <Typography textAlign='end'></Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductCatalogHeader