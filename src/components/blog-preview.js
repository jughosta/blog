import React from 'react';
import { Link } from "gatsby";

const BlogPreview = ({ node, theme }) => (
  <section
    style={{
      borderRadius: '4px',
      padding: '1.5rem 2.25rem',
      background: theme.cardBackgroundColor,
      marginBottom: '1rem'
    }}
  >
    <h2>
      <Link
        to={node.fields.slug}
      >
        {node.frontmatter.title}
      </Link>
    </h2>
    <p>{node.excerpt}</p>
    <div
      style={{
        color: theme.textColorLight,
        fontSize: '0.875rem',
        marginTop: '0.5rem'
      }}
    >
      {node.frontmatter.date}
    </div>
  </section>
);

export default BlogPreview;
