import React from 'react';
import Form from '../../components/contact/Form';
import UploadForm from '../../components/contact/UploadForm';
import Layout from '../../components/layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';

const CreateContactPage = () => {
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
      <Form />
      <div className='d-flex w-100 justify-content-center my-3'>
        <span className='fw-bold'> - OR - </span>
      </div>
      <UploadForm />
    </Layout>
  );
};

export default CreateContactPage;
