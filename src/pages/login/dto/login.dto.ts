import { z } from "zod";

export const loginDto = z.object({
  username: z.string().min(2, { message: 'Invalid username' }),
  password: z.string(),
})

export type TLogin = z.infer<typeof loginDto>;
