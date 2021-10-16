import CustomTable from '../CustomTable';

const MessageList = () => {
  const data = [
    {
      id: 1,
      title: 'gorem ipsum dolor sit, amet consectetur',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis deserunt eveniet rerum mollitia sequi maiores perferendis fugiat sed minus. Aspernatur fugit quam debitis reiciendis. Ad ipsum maiores voluptas sapiente eum.',
    },
    {
      id: 2,
      title: 'Ad ipsum maiores voluptas sapiente eum.',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis deserunt eveniet rerum mollitia sequi maiores perferendis fugiat sed minus. Aspernatur fugit quam debitis reiciendis. Ad ipsum maiores voluptas sapiente eum.',
    },
    {
      id: 3,
      title: 'Aspernatur fugit quam debitis reiciendis',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis deserunt eveniet rerum mollitia sequi maiores perferendis fugiat sed minus. Aspernatur fugit quam debitis reiciendis. Ad ipsum maiores voluptas sapiente eum.',
    },
  ];

  const header = [
    { title: 'Message Title', prop: 'title', sortable: true },
    { title: 'Message Content', prop: 'content', sortable: true },
  ];

  return (
    <section>
      <div className='card shadow-sm py-3'>
        <div className='card-body'>
          <CustomTable
            tableHeaders={header}
            tableBody={data}
            rowsPerPage={5}
            rowsPerPageOption={[5, 10, 15, 20]}
          />
        </div>
      </div>
    </section>
  );
};

export default MessageList;
