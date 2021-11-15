import React from 'react';
import { RiFileList3Line } from 'react-icons/ri';
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
      <PageTitle title={data.title} Icon={RiFileList3Line} />
      <ContactList />
    </Layout>
  );
};

export default ContactListPage;
