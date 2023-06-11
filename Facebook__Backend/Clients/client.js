import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'nuhfhosf',
  dataset: 'production',
  token: process.env.SANITY_PROJECT_TOKEN,
  useCdn: false,
  apiVersion: '2022-09-20',
});

// const builder = imageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)

export default client;
