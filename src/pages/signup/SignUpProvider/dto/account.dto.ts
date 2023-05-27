import { z } from "zod";

export const accountDto = z.object({
  login: z.string().min(5),
  password: z
    .string()
    .min(8, "At least 8 characters in length")
    .regex(new RegExp(".*[a-z].*"), "At least 1 lowercase character")
    .regex(new RegExp(".*\\d.*"), "At least 1 number"),
  confirm_password: z.string(),
});

export type TAccount = z.infer<typeof accountDto>;