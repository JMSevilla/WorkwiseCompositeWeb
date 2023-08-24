/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import {
    Stack,
    FormControlLabel,
    Checkbox as MuiCheckbox,
    CheckboxProps,
    FormControl,
    FormLabel,
    FormGroup,
    Typography,
    TypographyProps,
} from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { ControlledField, FormHelperText } from '.';

type Props = CheckboxProps & {
    label?: string
    helperText?: string
    error?: boolean
    showErrorMessage?: boolean
}

export const Checkbox: React.FC<Props> = ({
    label,
    helperText,
    error,
    showErrorMessage = true,
    ...rest
}) => {
    return (
        <Stack gap={1}>
            <FormControlLabel 
                sx={{ color: (theme) => (error ? theme.palette.error.main : 'currentColor')}}
                control={<MuiCheckbox {...rest} />}
                label={label}
            />
            {helperText && showErrorMessage && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
            )}
        </Stack>
    )
}

type ControlleCheckboxProps<T extends FieldValues> = ControlledField<T> & Props;

export function ControlledCheckboxProps<T extends FieldValues>({
    control,
    name,
    shouldUnregister,
    ...rest
}: ControlleCheckboxProps<T>){
    return (
        <Controller 
            control={control}
            name={name}
            shouldUnregister={shouldUnregister}
            render={({ field: { onChange, onBlur, value }, fieldState: { error }}) => (
                <Checkbox 
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value ?? false}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    {...rest}
                />
            )}
        />
    )
}

export type OptionType = { label?: string; value?: string;}

export type ControlledCheckboxGroupProps<T extends FieldValues> = ControlledField<T> & {
    label?: string
    options?: OptionType[]
    labelProps?: TypographyProps
    checkboxProps?: CheckboxProps
}

export function ControlledCheckboxGroup<T extends FieldValues>({
    control,
    name,
    label,
    options = [],
    labelProps = {},
    checkboxProps = {},
}: ControlledCheckboxGroupProps<T>){
    return (
        <FormControl sx={{ ml: 2 }} component='fieldset' variant='standard'>
            {label && <FormLabel component='legend'>{label}</FormLabel>}
            <FormGroup>
                <Controller 
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <>
                            {options.map((option) => (
                                <FormControlLabel 
                                    key={option.value}
                                    label={<Typography {...labelProps}>{option.label}</Typography>}
                                    control={
                                        <Checkbox 
                                            value={option.value}
                                            checked={field?.value?.some(
                                                (existingValue: any) => existingValue === option.value
                                            )}
                                            onChange={(event, checked) => {
                                                if(checked){
                                                    field.onChange([...(field?.value ?? []), event.target.value])
                                                } else {
                                                    field.onChange(
                                                        field.value.filter((value: any) => value !== event.target.value)
                                                    )
                                                }
                                            }}
                                            {...checkboxProps}
                                        />   
                                    }
                                />
                            ))}
                        </>
                    )}
                />
            </FormGroup>
        </FormControl>
    )
}