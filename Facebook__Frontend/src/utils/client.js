import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: 'nuhfhosf',
  dataset: 'production',
  token: process.env.SANITY_PROJECT_TOKEN,
  useCdn: false,
  apiVersion: '2022-09-20',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
