//the integration of sanity cms
//the file holds the configuration required for validation and accessing of data
//from sanity cms
//Don't change anything if you don't knw what you are doing.

import { createClient } from '@sanity/client'
import ImageUrl from '@sanity/image-url'

export const client = createClient({
  projectId: 'nuhfhosf',
  token:
    'skoqXVa2VwL2HM7G0kAcIJaQ59dLgMUo3wxaeZbo6bK30QwOUdE7mNZE1IPzuYfV3ABJGxMDQKo5TxZQd5K7dXbi25ahSpICoGtfp9N5nbzyyc1GB2JI314YPmqt4yFhJVFJ6Hb1OEe0VAasayjkgoxsgdOou0Mlyif2RYFIBqVJy7SxaKWe',
  dataset: 'production',
  apiVersion: '2023-03-09',
  useCdn: false,
})

const builder = ImageUrl(client)

export const urlFor = (source) => builder.image(source)
