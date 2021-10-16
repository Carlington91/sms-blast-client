import React from 'react';
import Layout from '../components/layout';
import MetaData from '../components/MetaData';
import PageTitle from '../components/pageTitle';

const DashboardPage = () => {
  const data = {
    title: 'Groups',
    metaData: {
      title: 'Groups',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />
    </Layout>
  );
};

export default DashboardPage;
