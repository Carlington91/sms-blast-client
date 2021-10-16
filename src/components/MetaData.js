import { Helmet } from 'react-helmet';

const MetaData = ({ metaData }) => {
  const { title, desc } = metaData;
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={desc ? desc : 'Helmet application'} />
      <link rel='canonical' href='http://mysite.com/example' />
    </Helmet>
  );
};

export default MetaData;
