import { z } from 'zod';

const ContactSchema = z.object({
  honeypot: z.string().length(0),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export default ContactSchema;
