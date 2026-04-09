import { z } from 'zod';

/**
 * Zod schema for the NewRequestRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const newRequestRequest = z.lazy(() => {
  return z.object({
    userid: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {NewRequestRequest} newRequestRequest
 * @property {string}
 */
export type NewRequestRequest = z.infer<typeof newRequestRequest>;

/**
 * Zod schema for mapping API responses to the NewRequestRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newRequestRequestResponse = z.lazy(() => {
  return z
    .object({
      userid: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userid: data['userid'],
    }));
});

/**
 * Zod schema for mapping the NewRequestRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const newRequestRequestRequest = z.lazy(() => {
  return z
    .object({
      userid: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userid: data['userid'],
    }));
});
