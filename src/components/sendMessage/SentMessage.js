import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMessage } from '../../context/message/messageContext';

const SentMessage = () => {
  const { fetchSentMessage, sentMessage } = useMessage();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (sentMessage?._id !== id) fetchSentMessage(id);
  }, [id, fetchSentMessage, sentMessage?._id]);

  // console.log(sentMessage);
  return (
    <section>
      <div className='row'>
        <div className='col-sm-12 col-md-10'>
          <div className='card'>
            <div className='card-header'>
              <div className='d-flex justify-content-between'>
                <div>
                  Date sent:{' '}
                  <span className='fw-bold'>
                    {new Date(sentMessage?.createdAt).toLocaleDateString()}{' '}
                  </span>
                  <div>
                    Sent to:{' '}
                    <span className='fw-bold'>{sentMessage?.group?.name}</span>
                  </div>
                  <div>
                    Sent by:{' '}
                    <span className='fw-bold'>
                      {sentMessage?.sentBy?.firstname}
                    </span>
                  </div>
                </div>

                <div>
                  <button className='btn btn-primary' onClick={history.goBack}>
                    Back
                  </button>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p>{sentMessage?.message}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentMessage;
