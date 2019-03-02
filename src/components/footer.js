import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            theme {
              maxWidth,
              textColorLight
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { theme }}}) => (
      <footer>
        <div
          style={{
            margin: '0 auto',
            maxWidth: theme.maxWidth,
            padding: '0 1rem',
            color: theme.textColorLight,
            fontSize: '0.875rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '4rem'
          }}
        >
          Julia Rechkunova / @jughosta, © {new Date().getFullYear()}
        </div>
      </footer>
    )}
  />
);

export default Footer;
