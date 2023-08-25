/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { useState, MouseEvent, ReactElement } from 'react';
import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LockIcon from '@mui/icons-material/Lock';
import Image from 'next/image';
import { MetrobankLogo } from 'ui/icons';
import CatalogLayout from '~/pages/Layouts/CatalogLayout';

const pages = ['SAVE', 'MANAGE', 'UPGRADE', 'INVEST', 'PROTECT', 'LEARN'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ProductCatalogAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static' sx={{ backgroundColor: '#FFFFFF'}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Grid item xs={12} md={1}>
                        <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
                                <MenuIcon sx={{ color: 'black' }} />
                            </IconButton>
                            <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign='center'>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', mr: 1, width: '25%'}}>
                        <MetrobankLogo width={150} />
                    </Grid>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: 'black',
                                display: 'block',
                                fontSize: '15px',
                                fontWeight: '400',
                                paddingRight: '30px'
                            }}
                            >{page}</Button>
                        ))}
                    </Box>

                    <Grid container item xs={12} display='flex' justifyContent='end'>
                        <Grid display='flex' alignItems='center'>
                            <Button>
                                {/* <Image /> */}
                            </Button>
                        </Grid>
                        <Button
                        size='small'
                        variant='contained'
                        startIcon={<LockIcon />}
                        sx={{ background: '#059ED8', borderRadius: '9999px'}}
                        >LOGIN</Button>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ProductCatalogAppBar