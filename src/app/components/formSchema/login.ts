import * as z from 'zod';


export const loginSchema = z.object({
  username: z.string()
    .nonempty({ message: 'That field is required' })
    .min(3, 'Field must contain at least 3 characters'),
  password: z.string()
    .nonempty({ message: 'That field is required' })
    .min(3, 'Field must contain at least 3 characters'),
});