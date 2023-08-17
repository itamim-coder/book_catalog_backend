import { z } from 'zod'

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string().nonempty('Title is required'),
    author: z.string().nonempty('Author is required'),
    genre: z.string().nonempty('Genre is required'),
    publicationDate: z.string().nonempty('Invalid publication date'),
    reviews: z.array(z.string()).default([]).optional(),
  }),
})

import { z } from 'zod'

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationDate: z.string().optional(),
    reviews: z.array(z.string()).default([]).optional(),
  }),
})

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
}
