/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { TextField, MaskInput, MaskInputProps, ControlledField } from '.';
import { InputAdornment, OutlinedInputProps } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { ChangeEventHandler } from 'react';
import { Controller, FieldValues } from 'react-hook-form';

const FORMAT = 'MM-DD-YYYY'
const FORMAT_IMASK = '00-00-0000'

const DatepickerMaskInput = React.forwardRef<HTMLElement, MaskInputProps>(function TextMaskCustom(
    props, ref
){
    return <MaskInput {...props} ref={ref} mask={FORMAT_IMASK} />
})

type AdornmentProps = {
    position: 'start' | 'end'
}

const Adornment: React.FC<AdornmentProps> = ({ position }) => {
    return (
        <InputAdornment position={position}>
            <CalendarTodayIcon style={{ fontSize: '1.1rem' }} />
        </InputAdornment>
    )
}

type Props = Pick<OutlinedInputProps, 'value' | 'label'> & {
    required?: boolean
    onBlur?: () => void
    onChange?: (_v: string) => void
    helperText?: string
    error?: boolean
    adornmentPosition?: AdornmentProps['position']
}

export const DatePicker: React.FC<Props> = ({
    label,
    onChange,
    onBlur,
    error,
    adornmentPosition = 'start',
    ...rest
}) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target?.value
        onChange?.(value?.replace(/\s+/g, ''))
    }

    const handleBlur = () => onBlur?.()

    return (
        <TextField 
            label={label}
            inputComponent={DatepickerMaskInput as any}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={FORMAT}
            error={Boolean(error)}
            startAdornment={adornmentPosition === 'start' && <Adornment position='start' />}
            endAdornment={adornmentPosition === 'end' && <Adornment position='end' />}
            {...rest}
        />
    )
}

type ControlledDatePickerProps<T extends FieldValues> = ControlledField<T> & Props;

export function ControlledDatePicker<T extends FieldValues>({
    control,
    name,
    shouldUnregister,
    ...rest
}: ControlledDatePickerProps<T>) {
    return (
        <Controller 
            control={control}
            name={name}
            shouldUnregister={shouldUnregister}
            render={({ field: { onChange, onBlur, value }, fieldState: { error }}) => (
                <DatePicker 
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    {...rest}
                />
            )}
        />
    )
}