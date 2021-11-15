import Form from '../../components/presetMessage/Form';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import { BiMessageAdd } from 'react-icons/bi';

const CreatePresetMessagePage = () => {
  const data = {
    title: 'Create Preset Message',
    metaData: {
      title: 'Create Preset Message',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={BiMessageAdd} />
      <Form create />
    </Layout>
  );
};

export default CreatePresetMessagePage;
