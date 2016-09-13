/**

 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css'
import { title, html } from './index.md';



class ResultsPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ul>
          <li><a href="RegressionTestReport.html">Automated Regression Testing Results</a> </li>
        </ul>
      </Layout>
    );
  }

}

export default ResultsPage;

