import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        docs: defineCollection({
            source: '**',
            type: 'page'
            // schema: z.object({
            //     tags: z.array(z.string()),
            //     image: z.string(),
            //     date: z.date()
            // })
        })
    }
})
