/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const http = axios.create()
export const commonsApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_SECURED_API_BASE_URL })

type RequestHandlerCallback = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

export const buildRequestHandler = 
    (callbackFn: RequestHandlerCallback) => async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await callbackFn(req, res)
        } catch (error) {
            if(error instanceof AxiosError) {
                res
                .status(error.response?.status ?? 500)
                .json(error.response?.data ?? 'Something went wrong')
                return;
            }
            res.status(500).json('Something went wrong')
        }
    }


export default http;