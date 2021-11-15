const PageTitle = ({ title, Icon }) => {
  return (
    <section className='page-title my-4 d-flex align-items-center'>
      <span className='icon fs-4 p-1 pt-0 bg-primary rounded text-white me-2'>
        {Icon && <Icon />}
      </span>
      <h2 className='fs-4 fw-bold'>{title}</h2>
    </section>
  );
};

export default PageTitle;
