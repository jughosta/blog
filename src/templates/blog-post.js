import React from 'react';
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from '../components/seo';
import Feedback from '../components/feedback/feedback';
import { formatDate } from '../utils';

const BlogPost = ({ data: { markdownRemark, site: { siteMetadata: { theme }} }}) => (
  <Layout isIndexPage={false}>
    <SEO title={markdownRemark.frontmatter.title} />
    <article>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto'
      }}>
        <header style={{
          marginBottom: '1rem'
        }}>
          <h1>
            {markdownRemark.frontmatter.title}
          </h1>
        </header>
        <div
          style={{
            marginTop: '1.5rem',
            borderTop: `4px solid ${theme.accentColor}`,
            paddingTop: '1.5rem',
            width: '6rem'
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1.5rem',
            color: theme.textColorLight,
            fontSize: '0.875rem',
            minHeight: '2rem'
          }}
        >
          <span>
            {formatDate(markdownRemark.frontmatter.date)}
          </span>
          <Feedback
            width="1rem"
          />
        </footer>
      </div>
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
        date
      }
    }
    site {
      siteMetadata {
        theme {
          accentColor,
          textColor,
          textColorLight
        }
      }
    }
  }
`;
