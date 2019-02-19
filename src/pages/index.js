import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPreview from '../components/blog-preview';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            theme {
              accentColor,
              textColor,
              textColorLight,
              borderColor,
              cardBackgroundColor,
              boxShadow
            }
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges }, site: { siteMetadata: { theme }} }) => (
      <Layout isIndexPage>
        <SEO title="Home" keywords={['web', 'frontend', 'react', 'react-native', 'javascript', 'es6', 'css', 'flutter']} />
        <ul style={{
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }}>
          {
            edges.map(({ node }) => (
              <li
                key={node.id}
                style={{
                  display: 'block'
                }}
              >
                <BlogPreview
                  node={node}
                  theme={theme}
                />
              </li>
            ))
          }
        </ul>
      </Layout>
    )}
  />
);

export default IndexPage;
