import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'nuhfhosf',
  dataset: 'production',
  token:
    'skgSYa0erssoHjaMqTivWgArMrcJNar9poGYwnPwA260uN70ELqszfccvVf4ZuULFko4MQtLTplJDHXuGLOJy19M5sWaCErleOQGuCpcw3DrfpFpyEf8NABR93CrI1YJjiVKH2NzhkMmQPzS9fljyvvLKPfNyOXWOmvNl9rWZNChxANiLid4',
  useCdn: false,
  apiVersion: '2022-09-20',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
