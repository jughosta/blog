import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `frontend`, `react`]} />
    <h1>Hello world!</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
