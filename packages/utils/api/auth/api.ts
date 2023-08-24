/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import {
    AxiosInstance
 } from 'axios'
import { RefreshTokenTypes } from '../../types/refreshTokenTypes';

 export class AuthenticationApi {
    constructor(private readonly axios: AxiosInstance) {}
    public refreshToken(args: RefreshTokenTypes){
      return this.axios.post<RefreshTokenTypes>('/auth/refresh-token', args)
    }
 }