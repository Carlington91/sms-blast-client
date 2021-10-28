import React from 'react';
import Layout from '../../components/layout/Layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';

const DashboardPage = () => {
  const data = {
    title: 'Dashboard',
    metaData: {
      title: 'Dashboard',
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
