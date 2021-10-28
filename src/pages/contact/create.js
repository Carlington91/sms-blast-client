import React, { useEffect } from 'react';
import Form from '../../components/contact/Form';
import UploadForm from '../../components/contact/UploadForm';
import NavTabButton from '../../components/elements/NavTabButton';
import Layout from '../../components/layout/Layout';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';
import { useGroup } from '../../context/group/groupContext';

const CreateContactPage = () => {
  const { groups, fetchGroups } = useGroup();

  useEffect(() => {
    fetchGroups();
    //eslint-disable-next-line
  }, []);

  const data = {
    title: 'Add Contact',
    metaData: {
      title: 'Add Contact',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />

      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <NavTabButton
            target='#add-new-contact'
            label=' Add New Contact'
            className='active'
          />
          <NavTabButton
            target='#import-contact'
            label='Import Contact from CSV/Excel'
          />
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade show active'
          id='add-new-contact'
          role='tabpanel'
          aria-labelledby='add-new-contact-tab'
        >
          <Form groups={groups} />
        </div>
        <div
          className='tab-pane fade'
          id='import-contact'
          role='tabpanel'
          aria-labelledby='import-contact-tab'
        >
          <UploadForm groups={groups} />
        </div>
      </div>
    </Layout>
  );
};

export default CreateContactPage;
