import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: 'nuhfhosf',
  dataset: 'production',
  token:
    'skgSYa0erssoHjaMqTivWgArMrcJNar9poGYwnPwA260uN70ELqszfccvVf4ZuULFko4MQtLTplJDHXuGLOJy19M5sWaCErleOQGuCpcw3DrfpFpyEf8NABR93CrI1YJjiVKH2NzhkMmQPzS9fljyvvLKPfNyOXWOmvNl9rWZNChxANiLid4',
  useCdn: true,
  apiVersion: '2022-09-20',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
