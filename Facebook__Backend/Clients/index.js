import { createClient } from "@sanity/client";
import ImageUrl from "@sanity/image-url";

export const client = new createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_PROJECT_TOKEN,
  dataset: 'project dataset',
  apiVersion: '2023-03-09',
  useCdn: false,
})

const builder = ImageUrl(client);

export const urlFor = (source) => builder.image(source);
