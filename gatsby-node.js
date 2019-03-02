/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { getMediumPostSlug } = require('./src/utils');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      
      allFeedMedium (limit: 2) {
        edges {
          node {
            link
            pubDate
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug
        },
      });

      console.log(JSON.stringify(node.fields, null, '\t'));
    });

    result.data.allFeedMedium.edges.forEach(({ node }) => {
      const slug = getMediumPostSlug(node);

      createPage({
        path: slug,
        component: path.resolve('./src/templates/medium-post.js'),
        context: {
          link: node.link,
          slug
        },
      });

      console.log(JSON.stringify({ ...node, slug }, null, '\t'));
    });
  });
};
