import React from 'react';
import { Link } from "gatsby";
import { formatDate } from '../utils';

const BlogPreview = ({ node, theme }) => (
  <section
    style={{
      marginBottom: '3.75rem'
    }}
  >
    <div
      style={{
        color: theme.textColorLight,
        fontSize: '0.875rem',
        marginBottom: '0.5rem'
      }}
    >
      {formatDate(node.frontmatter.date)}
    </div>
    <h2>
      <Link
        to={node.fields.slug}
        style={{
          textDecoration: 'none'
        }}
      >
        {node.frontmatter.title}
      </Link>
    </h2>
    <p>{node.frontmatter.spoiler}</p>
    <div style={{
      marginTop: '1rem'
    }}>
      <Link
        to={node.fields.slug}
        style={{
          color: theme.textColor,
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Read more →
      </Link>
    </div>
  </section>
);

export default BlogPreview;
