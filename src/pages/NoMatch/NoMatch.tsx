import { Link } from 'react-router-dom';

const NoMatchPage = () => (
  <div>
    <h1>PAGE NOT FOUND</h1>
    <Link to="/">Go to the home page</Link>
  </div>
);

export default NoMatchPage;
