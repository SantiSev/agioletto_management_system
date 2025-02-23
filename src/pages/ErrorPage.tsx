import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Access Denied</h1>
      <p>You don't have permission to access this page. Please log in first.</p>
      <Link to="/" className="btn">
        Go to Login
      </Link>
    </div>
  );
};

export default ErrorPage;
