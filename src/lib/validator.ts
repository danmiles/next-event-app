import * as z from 'zod';

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(500, 'Description must be less than 800 characters'),
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(500, 'Location must be less than 800 characters'),
  imageUrl: z.string().min(1,'Please select an image for your event'),
  startDateTime: z.date().min(new Date(), 'Start date must be in the future'),
  endDateTime: z.date().min(new Date(), 'End date must be in the future'),
  categoryId: z.string().min(1,'Please select an category for your event or create a new one'),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
