/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import { AuthenticationApi } from "./api/auth/api";
import { BaseApi } from "./api/base/api";
import { CommonsApi } from "./api/common/api";

export class Api {
    constructor(
        readonly authentication: AuthenticationApi,
        readonly base: BaseApi,
        readonly commons: CommonsApi
    ) {}
}