import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3c3kvq28',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skJm1bqDF269HQ1lekmETlbk7hODVx0yEo2Q0U4YJCwgGRxZwzG9MHdAoI3u79xFyW1cuQf0snsYAE7vH6NcVrt1ETa3pPbb0kNOjeD9kYwL6oMNyJfyLeJCsK4xjIoEPopUsVEXQnswblsVVs2kC0me8OFgPsDCGfDhKT2uXeLVZJkL49av',

});
// process.env.REACT_APP_SANITY_TOKEN

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
