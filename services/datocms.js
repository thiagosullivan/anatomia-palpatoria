const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = 'dc5ce592ef90b169ed9d4cd4b00a5a';

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}


export async function getAllPostagens() {
  const data = await fetchCmsAPI(`
    {
      allPosts {
        id
        title
        slug
        author
        date
        theme {
          themeOption
        }
        resume
        postImg {
          id
          url
        }
        postText
      }
    }
  `);

  return data.allPosts
}

export default { getAllPostagens };