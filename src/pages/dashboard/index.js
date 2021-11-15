import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
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
      <PageTitle title={data.title} Icon={RiDashboardLine} />
    </Layout>
  );
};

export default DashboardPage;
