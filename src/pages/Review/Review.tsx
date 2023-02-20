import { useParams } from 'react-router-dom';

const ReviewPage = () => {
  const { id } = useParams();
  return <div>ReviewPage with id: {id}</div>;
};

export default ReviewPage;
