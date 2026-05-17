import { z } from "zod";

export const userSchema = z.object({
  user: z.object({
    email: z.string(),
    username: z.string(),
    bio: z.string().nullable(),
    image: z.string().nullable(),
    token: z.string(),
  }).strict(),
  });
  

  export const ArtichleSchema = z.object({
     "article": z.object({ 
        "slug": z.string(),
        "title": z.string(),
        "description": z.string(),
        "body": z.string(),
        "tagList": z.array(z.string()),
        "createdAt": z.string(),
        "updatedAt": z.string(),
        "favorited": z.boolean(),
        "favoritesCount": z.number(),
        "author": z.object({
            "username": z.string(),
            "bio": z.string().nullable(),
            "image": z.string().nullable(),
            "following": z.boolean()
        })
    })
  });
  

  export type User = z.infer<typeof userSchema>;


  export type Article = z.infer<typeof ArtichleSchema>;