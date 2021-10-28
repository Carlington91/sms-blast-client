import React from 'react';
import ContactList from '../../components/contact/ContactList';
import Layout from '../../components/layout/Layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';

const ContactListPage = () => {
  const data = {
    title: 'Contacts',
    metaData: {
      title: 'Contacts',
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
