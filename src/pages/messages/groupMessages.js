import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import GroupMessageForm from '../../components/groupMessage/GroupMessageForm';

const GroupMessagePage = () => {
  return (
    <Layout>
      <PageTitle title='Group Message' />
      <GroupMessageForm />
    </Layout>
  );
};

export default GroupMessagePage;