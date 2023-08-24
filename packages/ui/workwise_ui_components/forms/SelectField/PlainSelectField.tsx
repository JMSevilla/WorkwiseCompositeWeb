/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Select } from '@mui/material';
import { BaseSelectFieldProps, SelectOption } from '.';

export type PlainSelectFieldProps = BaseSelectFieldProps & {
    options: SelectOption[]
}

export const PlainSelectField: React.FC<PlainSelectFieldProps> = ({ options, ...rest }) => {
    return (
        <Select native size='small' {...rest}>
            <option value='' disabled hidden />
            {options.map((option, i) => {
                if('groupLabel' in option) {
                    const { groupLabel, options } = option;
                    return (
                        <optgroup key={i} label={groupLabel}>
                            {options.map((o, j) => (
                                <option key={j} value={o.value}>
                                    {o.label}
                                </option>
                            ))}
                        </optgroup>
                    )
                }
                return (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </Select>
    )
}