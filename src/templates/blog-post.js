import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPost = ({ data: { markdownRemark, site: { siteMetadata: { theme }} }}) => (
  <Layout>
    <article
      style={{
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '6px',
        padding: '1.5rem 2.25rem',
        background: theme.cardBackgroundColor
      }}
    >
      <header style={{
        marginBottom: '1rem'
      }}>
        <h1>
          {markdownRemark.frontmatter.title}
          <div
            style={{
              color: theme.textColorLight,
              fontSize: '0.875rem',
              fontWeight: 'normal'
            }}
          >
            {markdownRemark.frontmatter.date}
          </div>
        </h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </article>
  </Layout>
);

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
    site {
      siteMetadata {
        theme {
          textColor,
          textColorLight,
          borderColor,
          cardBackgroundColor
        }
      }
    }
  }
`;
