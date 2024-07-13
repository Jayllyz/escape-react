import { z } from 'zod';

export const EmployeeLoginSchema = z.object({
  email: z.string().email({ message: "Format d'email invalide" }),
  password: z.string(),
});
