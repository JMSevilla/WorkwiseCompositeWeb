/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Grid, Typography, Button, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledTextField } from '../forms';
import { storedSchema } from 'utils'

type LoginProps = {
    handleSubmit: any
}

export default function Login(props: LoginProps) {
    const initialValues: storedSchema.FormData = {
        username: '',
        password: ''
    }

    const { handleSubmit } = props;

    const {
        control, handleSubmit: handleHookSubmit,
        formState: { isValid }
    } = useForm<storedSchema.FormData>({
        mode: 'all',
        resolver: zodResolver(storedSchema.schema),
        defaultValues: initialValues
    })

    const [showPassword, setShowPassword] = useState(true)
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    return (
        <Grid
        container
        spacing={0}
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '97vh' }}
        >
            <Grid item xs={4}>
                <Typography textAlign='center' pb={5} fontSize={32.44} fontWeight='500'>
                    Workwise
                </Typography>
                <form onSubmit={handleHookSubmit(() => handleSubmit())}>
                    <ControlledTextField 
                        fullWidth
                        control={control}
                        name='username'
                        required
                        label='Username'
                        shouldUnregister
                    />
                    <ControlledTextField 
                    type={showPassword ? 'password' : 'text'}
                    fullWidth
                    control={control}
                    name='password'
                    required
                    shouldUnregister
                    label='Password'
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickShowPassword}>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                    <Box mt={5}>
                        <Button type='submit' disabled={!isValid} fullWidth variant='contained'>
                            Login
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}


