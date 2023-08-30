/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import {
    Dialog,
    Select,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Radio,
    Stack,
    Button,
    Typography,
} from '@mui/material';
import { useState, Fragment, useEffect } from 'react';
import { hooks } from 'utils'
import { BaseSelectFieldProps, SingleOption } from '.';

export type ModalSelectFieldProps = BaseSelectFieldProps & {
    options: SingleOption[]
    selectButtonLabel?: string
    closeButtonLabel?: string
    header?: string
    subheader?: string
}

export const ModalSelectField: React.FC<ModalSelectFieldProps> = ({
    options,
    onChange,
    selectButtonLabel = 'Select',
    closeButtonLabel = 'Close',
    header,
    subheader,
    ...rest
}) => {
    const [isModalOpen, toggleOpen, { setValueFalse: closeModal }] = hooks.useToggle()
    const [selectedOption, setSelectedOption] = useState<string>(rest.value ?? '')

    const handleSelect = (value: string) => () => setSelectedOption(value)
    const handleClose = () => closeModal()
    const handleChange = () => {
        onChange?.(selectedOption)
        closeModal()
    }

    useEffect(() => {
        if(!isModalOpen){
            setSelectedOption('')
            return;
        }
        setSelectedOption(rest.value ?? '')
    }, [rest.value, isModalOpen])

    return (
        <>
            <Select
            sx={{ width: '100%', color: !rest.value ? 'gray' : 'currentcolor' }}
            size='small'
            onClick={() => toggleOpen()}
            open={false}
            displayEmpty
            {...rest}
            >
                {!rest.value && (
                    <option selected value='' disabled>
                        {rest.placeholder ?? ''}
                    </option>
                )}
                {options.map((option, i) => {
                    return (
                        <option key={i} value={option.value}>{option.label}</option>
                    )
                })}
            </Select>
            <Dialog
            open={isModalOpen}
            onClose={handleClose}
            fullWidth
            maxWidth='xs'
            PaperProps={{ sx: { m: [2,3], width: '100%' }}}
            >
                <Stack px={2} py={3} gap={1}>
                    {header && <Typography fontWeight='bold'>{header}</Typography>}
                    {subheader && (
                        <Typography variant='body2' color='text.secondary'>{subheader}</Typography>
                    )}
                    <List
                    sx={{
                        height: '60vh',
                        overflowY: 'auto'
                    }}
                    >
                        {options.map((option, i) => (
                            <Fragment key={i}>
                                <ListItemButton onClick={handleSelect(option.value)}>
                                    <ListItemText primary={option.label} />
                                    <Radio checked={selectedOption === option.value} />
                                </ListItemButton>
                                <Divider component='li' />
                            </Fragment>
                        ))}
                    </List>
                    <Button
                    color='primary'
                    disabled={!selectedOption}
                    onClick={handleChange}
                    fullWidth
                    variant='contained'
                    >{selectButtonLabel}</Button>
                    <Button color='primary' variant='text' onClick={handleClose}>{closeButtonLabel}</Button>
                </Stack>
            </Dialog>
        </>
    )
}