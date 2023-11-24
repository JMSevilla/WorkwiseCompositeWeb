/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import axios from "axios";

const baseURL = 'http://localhost:4000/api/v1';

export async function initializedAccountSetup() {
    const response = await fetch(`${baseURL}/accounts/check-accounts`);
    return ((await response.json() ?? null))
}

export async function initializedCms() {
    const response = await fetch(`${baseURL}/cms/get-all-cms`)
    return ((await response.json() ?? null))
}

type CmsDto = {
    path: string
    contentKey: string
    access: number
    hasLoading: number
    isAccountSetup: number
}

export async function feedCms(cmsDto: CmsDto){
    const response = axios.post(`${baseURL}/cms/initialized-cms`, cmsDto)
    return (await response).data ?? null
}