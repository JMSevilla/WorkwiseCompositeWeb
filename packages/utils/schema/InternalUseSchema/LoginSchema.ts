import { z } from "zod";

const DEFAULT_USERNAME_ERROR_MESSAGE = 'Please provide username.';
const DEFAULT_PASSWORD_ERROR_MESSAGE = 'Please provide password.';

export const schema = z.object({
    username: z.string({ required_error: DEFAULT_USERNAME_ERROR_MESSAGE })
    .trim()
    .min(1, DEFAULT_USERNAME_ERROR_MESSAGE),
    password: z
    .string({ required_error: DEFAULT_PASSWORD_ERROR_MESSAGE })
    .trim()
    .min(1, DEFAULT_PASSWORD_ERROR_MESSAGE)
})

export type FormData = z.infer<typeof schema>