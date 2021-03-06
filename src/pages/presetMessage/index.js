import Layout from '../../components/layout/Layout';
import MessageList from '../../components/presetMessage/MessageList';
import MetaData from '../../components/MetaData';
import PageTitle from '../../components/pageTitle';
import { BiMessageDetail } from 'react-icons/bi';

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
      <PageTitle title={data.title} Icon={BiMessageDetail} />
      <MessageList />
    </Layout>
  );
};

export default MessagesPage;
