import { Link } from 'gatsby';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            theme {
              maxWidth,
              accentColor,
              cardBackgroundColor
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, theme }}}) => (
      <header
        style={{
          background: theme.cardBackgroundColor,
          borderTop: `4px solid ${theme.accentColor}`
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: theme.maxWidth,
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'center',
            height: '4rem'
          }}
        >
          <div style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>
            <Link
              to="/"
              style={{
                color: theme.accentColor,
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
          </div>
        </div>
      </header>
    )}
  />
);

export default Header;
