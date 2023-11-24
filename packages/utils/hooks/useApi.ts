/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { Api } from "../api";
import {
    useAsyncCallback
} from 'react-async-hook'
import { AuthenticationApi } from "../api/auth/api";
import { BaseApi } from "../api/base/api";
import { CommonsApi } from "../api/common/api";
import { config } from "../config";
import { AxiosInstance } from "axios";
import { getItem } from "../local-storage";
import Http, { HttpOptions } from "../http-client";

const HTTP_OPTIONS: HttpOptions = {
    headers: {
        "Content-Type": "application/json"
    },
    onRequest: (req: any) => {
        const accessToken = getItem<string | undefined>('AT')
        if(req.headers && accessToken) req.headers.Authorization = `Bearer ${accessToken}`
    }
}

export const httpClient = new Http({ ...HTTP_OPTIONS, baseURL: 'http://localhost:4000/api/v1' })

export const useApiCallBack = <R, A extends unknown>(asyncFn: (api: Api, args: A) => Promise<R>) =>
    useAsyncCallback(async (args?: A) => {
        try {
            return await asyncFn(createApi(httpClient.client), args as A)
        } catch (error) {
            handleError(error)
        }
    })

function createApi(client: AxiosInstance){
    return new Api(
        new AuthenticationApi(client),
        new BaseApi(client),
        new CommonsApi(client)
    )
}

function handleError(e: any) {
    const rawErrors = e.response.data?.errors
    return Array.isArray(rawErrors) ? rawErrors.map(e => e.code ?? 'Something went wrong') : ['Something went wrong']
}