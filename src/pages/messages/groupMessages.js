import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/pageTitle';
import MetaData from '../../components/MetaData';
import GroupMessageForm from '../../components/groupMessage/GroupMessageForm';
import { RiMessage2Line } from 'react-icons/ri';

const GroupMessagePage = () => {
  const data = {
    title: 'Group Message',
    metaData: {
      title: 'Group Message',
    },
  };

  return (
    <Layout>
      <MetaData metaData={data.metaData} />
      <PageTitle title={data.title} Icon={RiMessage2Line} />
      <GroupMessageForm />
    </Layout>
  );
};

export default GroupMessagePage;
