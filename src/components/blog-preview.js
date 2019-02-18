import React from 'react';
import { Link } from "gatsby";

const BlogPreview = ({ node, theme }) => (
  <section
    style={{
      border: `1px solid ${theme.borderColor}`,
      borderLeft: `4px solid ${theme.accentColor}`,
      borderRadius: '6px',
      padding: '1.5rem 2.25rem',
      background: theme.cardBackgroundColor,
      marginBottom: '1.5rem'
    }}
  >
    <div style={{
      marginBottom: '1rem'
    }}>
      <h2>
        <Link
          to={node.fields.slug}
          style={{
            textDecoration: 'none'
          }}
        >
          {node.frontmatter.title}
        </Link>
        <div
          style={{
            color: theme.textColorLight,
            fontSize: '0.875rem',
            fontWeight: 'normal'
          }}
        >
          {node.frontmatter.date}
        </div>
      </h2>
    </div>
    <p>{node.excerpt}</p>
  </section>
);

export default BlogPreview;
