import z from "zod";
import { getTranslations } from "next-intl/server";
//this is just an example, you should export every schema then use in your app globally


export const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1,{message:"Required"}),
})