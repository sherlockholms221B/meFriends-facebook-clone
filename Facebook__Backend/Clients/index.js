import { createClient } from "@sanity/client";
import ImageUrl from "@sanity/image-url";

export const client = new createClient({
  projectId: "projectId",
  token: "token",
  dataset: "project dataset",
  apiVersion: "api version",
  useCdn: false,
});

const builder = ImageUrl(client);

export const urlFor = (source) => builder.image(source);
