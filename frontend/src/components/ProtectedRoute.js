import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/sign" />;
}

export default ProtectedRoute;