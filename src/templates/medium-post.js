import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Feedback from '../components/feedback/feedback';

import { formatDate } from '../utils';

const MediumPost = ({ data: { feedMedium, site: { siteMetadata: { theme }} }}) => (
  <Layout isIndexPage={false}>
    <SEO title={feedMedium.title} />
    <article>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto'
      }}>
        <header style={{
          marginBottom: '1rem'
        }}>
          <h1>
            {feedMedium.title}
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
        <div dangerouslySetInnerHTML={{ __html: feedMedium.content.encoded }} />
        <div
          style={{
            marginTop: '1.5rem',
            color: theme.textColorLight,
            fontSize: '0.875rem',
          }}
        >
          Originally published by <Link to="/">@jughosta</Link> on <a href={feedMedium.link.split('?')[0]} target="_blank" rel="noopener">Medium</a>.
        </div>
        <footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: theme.textColorLight,
            fontSize: '0.875rem',
            minHeight: '2rem'
          }}
        >
          <span>
            {formatDate(feedMedium.pubDate)}
          </span>
          <Feedback
            width="1rem"
          />
        </footer>
      </div>
    </article>
  </Layout>
);

export default MediumPost;

export const query = graphql`
  query($link: String!) {
    feedMedium(link: { eq: $link }) {
      title
      link
      pubDate
      categories
      content {
        encoded
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
