import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPreview from '../components/blog-preview';

import { getMediumPostSlug } from '../utils';

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
                spoiler
                date
              }
            }
          }
        }
        allFeedMedium (limit: 2) {
          edges {
            node {
              id
              link
              title
              pubDate
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: markdownEdges }, allFeedMedium: { edges: mediumEdges }, site: { siteMetadata: { theme }} }) => (
      <Layout isIndexPage>
        <SEO title="Personal blog" keywords={['web', 'frontend', 'react', 'react-native', 'javascript', 'es6', 'css', 'flutter']} />
        <ul style={{
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }}>
          {
            markdownEdges.map(({ node }) => {
              if (node.fields.slug.startsWith('/draft')) {
                return;
              }
              return (
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
              );
            })
          }
          {
            mediumEdges.map(({ node }) => {
              return (
                <li
                  key={node.id}
                  style={{
                    display: 'block'
                  }}
                >
                  <BlogPreview
                    node={{
                      frontmatter: {
                        title: node.title,
                        date: node.pubDate,
                        spoiler: ''
                      },
                      fields: {
                        slug: getMediumPostSlug(node)
                      }
                    }}
                    theme={theme}
                  />
                </li>
              );
            })
          }
        </ul>
      </Layout>
    )}
  />
);

export default IndexPage;
