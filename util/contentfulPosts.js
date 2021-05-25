import { createClient } from 'contentful';

const space = process.env.CF_SPACE_ID;
const accessToken = process.env.CF_DELIVERY_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

export const fetchEntries = async (filter) => {
  const entries = await client.getEntries(filter);
  if (entries.items) return entries.items;

  console.log('Error getting entries.');
};

export default { fetchEntries };
