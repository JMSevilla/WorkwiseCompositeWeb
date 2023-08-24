/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { createContext, useContext } from 'react'

type ContextValue = {}

const GlobalContext = createContext<ContextValue>(undefined as any)

export const GlobalProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <GlobalContext.Provider
        value={{}}
        >{children}</GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    if(!GlobalContext) {
        throw new Error("Global context must used.")
    }
    return useContext(GlobalContext)
}