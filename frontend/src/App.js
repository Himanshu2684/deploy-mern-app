import { Route, Routes} from 'react-router-dom';
import './App.css';
import Sign from './components/Sign';
import Register from './components/Register';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState('')

  useEffect(()=>{
    const jwtToken = localStorage.getItem('jwtToken')
    setIsAuth(jwtToken)
  },[isAuth])

  return (
    <div className="h-full w-full">
        <Routes>
          <Route path="/" element={<Sign />} />
          
          {/* Routes for other pages */}
          <Route path="/sign" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Route for dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuth !== ''}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
