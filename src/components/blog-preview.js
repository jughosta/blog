import React from 'react';
import { Link } from "gatsby";

const BlogPreview = ({ node, theme }) => (
  <section
    style={{
      marginBottom: '3.5rem'
    }}
  >
    <div
      style={{
        color: theme.textColorLight,
        fontSize: '0.875rem',
        marginBottom: '0.5rem'
      }}
    >
      {node.frontmatter.date}
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
