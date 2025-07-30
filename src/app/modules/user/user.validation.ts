import z, { object } from "zod";

export const createUserZodSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum 2 characters" })
    .max(50, { message: "Maximum 50 characters" }),

  email: z.string().email({ message: "Invalid email format" }),

  password: z
    .string()
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }),

  phone: z
    .string()
    .regex(/^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),

  address: z
    .string()
    .max(200, { message: "Address cannot exceed 200 characters." })
    .optional(),
});
