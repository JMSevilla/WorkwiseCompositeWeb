/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { createContext, useContext, useEffect, useState } from 'react'
import { NextRouter, useRouter as useNextRouter } from 'next/router';

type ContextValue = {
    shouldBeAccountSetup: boolean
    setShouldBeAccountSetup: any
}

type ContextPassDownValues = {
    expectBeAccountSetup: boolean
    path: any
}

const GlobalContext = createContext<ContextValue>(undefined as any)

export const GlobalProvider: React.FC<React.PropsWithChildren<{}> & ContextPassDownValues> = ({
    children, expectBeAccountSetup, path
}) => {
    const [shouldBeAccountSetup, setShouldBeAccountSetup] = useState(expectBeAccountSetup)
    const { push } = useNextRouter()
    function usePushRouter() {
        path?.length > 0 && path.map((i: any) => {
            return push(i?.path)
        })
    }
    useEffect(() => {
        usePushRouter()
    }, [])
    return (
        <GlobalContext.Provider
        value={{shouldBeAccountSetup, setShouldBeAccountSetup}}
        >{children}</GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    if(!GlobalContext) {
        throw new Error("Global context must used.")
    }
    return useContext(GlobalContext)
}