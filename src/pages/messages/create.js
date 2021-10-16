import Form from '../../components/message/Form';
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';

const CreateMessagePage = () => {
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
      <Form />
    </Layout>
  );
};

export default CreateMessagePage;
