import { z } from "zod";

export const contacto = z.object({
    name: z.string().min(2, 'El mensaje debe tener nombre de al menos dos caracteres'),
    email: z.string().email('Email invalido').min(1, 'El email es obligatorio'),
    subject: z.string().min(1, 'El mensaje debe tener un asunto'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export type ContactoValues = z.infer<typeof contacto>;