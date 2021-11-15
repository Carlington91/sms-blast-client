import React, { useEffect } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { useHistory } from 'react-router';
import Form from '../../components/contact/Form';
import Layout from '../../components/layout/Layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';
import { useContact } from '../../context/contact/contactContext';
import { useGroup } from '../../context/group/groupContext';

const EditContactPage = () => {
  const { contact, fetchContact } = useContact();
  const { groups, fetchGroups } = useGroup();
  const { location } = useHistory();
  const id = location && location.search.split('=')[1];

  useEffect(() => {
    fetchGroups();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id !== contact?._id) {
      fetchContact(id);
    } else {
      return;
    }
    return () => fetchContact(id);
    //eslint-disable-next-line
  }, [id, contact, fetchContact]);

  const data = {
    title: 'Edit Contact',
    metaData: {
      title: 'Edit Contact',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={BiUserPlus} />

      <Form contact={contact} groups={groups} edit />
    </Layout>
  );
};

export default EditContactPage;
