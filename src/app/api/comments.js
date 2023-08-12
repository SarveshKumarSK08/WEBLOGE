// import { GraphQLClient, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
// const graphcmsToken = process.env.GRAPHCMS_TOKEN

// export default async function comments(req, res) {
//   if (req.method === 'POST') {
//     try {
//       console.log("Request body:", req.body); // Log the incoming request body
      
//       const graphQLClient = new GraphQLClient(graphqlAPI, {
//         headers: {
//           Authorization: `Bearer ${graphcmsToken}`,
//         },
//       });

//       const query = gql`
//         mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
//           createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
//             id
//           }
//         }
//       `;

//       const result = await graphQLClient.request(query, req.body);
//       console.log("GraphQL response:", result); // Log the GraphQL response
      
//       return res.status(200).json(result);
//     } catch (error) {
//       console.error('Error submitting comment in Comment file:', error);
//       return res.status(500).json({ error: 'Internal Server Error in Comment file' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed in Comment file' });
//   }
// }

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export  const submitComment = async (obj) => {
  try {
    console.log("Comment Object:", obj);

    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        Authorization: `Bearer ${graphcmsToken}`,
      },
    });

    const mutation = gql`
      mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
          id
        }
      }
    `;

    const variables = {
      name: obj.name,
      email: obj.email,
      comment: obj.comment,
      slug: obj.slug,
    };

    const result = await graphQLClient.request(mutation, variables);
    console.log("GraphQL response:", result);

    return result;
  } catch (error) {
    console.error("Error submitting comment in api comment in src:", error);
    throw error;
  }
};
