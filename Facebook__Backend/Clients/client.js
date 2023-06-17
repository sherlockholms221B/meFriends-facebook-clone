import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'nuhfhosf',
  dataset: 'production',
  token: process.env.SANITY_PROJECT_TOKEN,
  useCdn: false,
  apiVersion: '2022-09-20',
});

export default client;
