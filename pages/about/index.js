/**
 he
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default AboutPage;
