/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { AxiosError } from "axios";
import { useEffect, useRef } from 'react'
import { useAccessToken, useRefreshToken } from "./useAuthentication";
import Http from "../http-client";
import { httpClient, useApiCallBack } from "./useApi";
import { RefreshTokenTypes } from "../types/refreshTokenTypes";

export const useRefreshTokenHandler = (logout: AsyncFunction) => {
    const [accessToken, setAccessToken] = useAccessToken()
    const [refreshToken, setRefreshToken] = useRefreshToken()
    const retryInProgressRequest = useRef<Promise<void> | null>()
    const refreshTokenCall = useApiCallBack(async (api, args: RefreshTokenTypes) => await api.authentication.refreshToken(args))

    useEffect(() => httpClient.setupMiddlewareOptions({ onErrorHandler: handleRetry }), [])

    const handleRetry = async (err: AxiosError | any, http: Http) => {
        if(err.response?.status !== 401){
            return Promise.reject(err)
        }

        if(err.response?.status === 401) { // adjust backend side create validation when token is invalid.
            return logout()
        }
        if (!retryInProgressRequest.current) {
            retryInProgressRequest.current = refresh(err).then(() => {
              retryInProgressRequest.current = null;
            });
        }
        try {
            await retryInProgressRequest.current;
            http.options?.onRequest?.(err.config);
      
            return http.client(err.config);
          } catch {
            retryInProgressRequest.current = null;
          }
        return Promise.reject(err)
    }

    const refresh = async (error: AxiosError): Promise<void> => {
        if(accessToken && refreshToken){
            try {
                const result: any = await refreshTokenCall.execute({ AccessToken: accessToken, RefreshToken : refreshToken })
                setAccessToken(result.data.accessToken)
                setRefreshToken(result.data.refreshToken)
                return Promise.resolve()
            } catch (error) {
                throw error;
            }
        }
        return Promise.reject(error)
    }
}