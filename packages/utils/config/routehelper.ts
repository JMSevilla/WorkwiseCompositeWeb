/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

export type PathProps = {
    pathId: number
    path: string
    isAccountSetup?: boolean
    contentKey?: string | undefined
}

export const getContentKey = async () => {
    const result = await fetch('http://localhost:4000/api/v1/cms/get-all-cms')
    return ((await result.json() ?? null))
}