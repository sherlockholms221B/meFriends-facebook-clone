//the integration of sanity cms
//the file holds the configuration required for validation and accessing of data
//from sanity cms
//Don't change anything if you don't knw what you are doing.

import { createClient } from '@sanity/client'
import ImageUrl from '@sanity/image-url'

export const client = createClient({
  projectId: 'nuhfhosf',
  token: process.env.SANITY_PROJECT_TOKEN,
  dataset: 'production',
  apiVersion: '2023-03-09',
  useCdn: false,
})

const builder = ImageUrl(client)

export const urlFor = (source) => builder.image(source)
