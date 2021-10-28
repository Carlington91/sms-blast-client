import Layout from '../../components/layout/Layout';
import MessageList from '../../components/presetMessage/MessageList';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';

const MessagesPage = () => {
  const data = {
    title: 'Preset Messages',
    metaData: {
      title: 'Preset Messages',
    },
  };
  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} />
      <MessageList />
    </Layout>
  );
};

export default MessagesPage;
