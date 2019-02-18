import { Link } from 'gatsby';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
          <h2 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: theme.accentColor,
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
          </h2>
        </div>
      </header>
    )}
  />
);

export default Header;
