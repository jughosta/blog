import { Link } from 'gatsby';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = ({ isIndexPage }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            theme {
              maxWidth,
              accentColor
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, theme }}}) => (
      <header>
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
            {
              isIndexPage ?
                title :
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    marginRight: '1rem'
                  }}>
                    ←
                  </div>
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
            }
          </div>
        </div>
      </header>
    )}
  />
);

export default Header;
