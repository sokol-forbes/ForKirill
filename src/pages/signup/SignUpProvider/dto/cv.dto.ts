import { z } from "zod";

export const cvDto = z.object({
  firstName: z.string().min(2),
  middleName: z.string().min(2),
  lastName: z.string().min(2),
  study: z.string(),
  skills: z.array(z.string())
})

export type TCV = z.infer<typeof cvDto>;