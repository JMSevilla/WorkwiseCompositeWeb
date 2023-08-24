/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { useState } from "react";

type UseToggleReturn = [
    boolean,
    (_v?: boolean) => void,
    { setValueTrue: () => void; setValueFalse: () => void; }
]

export const useToggle = (initialValue = false): UseToggleReturn => {
    const [value, setValue] = useState(initialValue)

    const toggleValue = (newValue?: boolean): void => {
        setValue(newValue === undefined ? !value: newValue)
    }
    const setValueTrue = () => toggleValue(true)
    const setValueFalse = () => toggleValue(false)

    return [value, toggleValue, { setValueTrue, setValueFalse }]
}