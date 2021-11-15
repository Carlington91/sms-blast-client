import { useParams } from 'react-router-dom';
import Form from '../../components/presetMessage/Form';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import { useEffect } from 'react';
import { useMessage } from '../../context/message/messageContext';

const EditPresetMessagePage = () => {
  const { fetchPresetMessage, presetMessage } = useMessage();
  const { id } = useParams();

  useEffect(() => {
    if (presetMessage._id !== id) {
      fetchPresetMessage(id);
    } else {
      return;
    }
    return () => fetchPresetMessage(id);
  }, [id, fetchPresetMessage, presetMessage._id]);

  // console.log('id:', presetMessage);

  const data = {
    title: 'Preset Message',
    metaData: {
      title: 'Preset Message',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />
      <Form presetMessageData={presetMessage} />
    </Layout>
  );
};

export default EditPresetMessagePage;
