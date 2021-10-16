import React from 'react';
import ContactList from '../../components/contact/ContactList';
import Layout from '../../components/layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';

const ContactListPage = () => {
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
      <ContactList />
    </Layout>
  );
};

export default ContactListPage;
