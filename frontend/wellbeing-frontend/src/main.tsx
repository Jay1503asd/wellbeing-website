import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import RootPage from './pages/root/root'
import Dashboard from './pages/dashboard/dashboard'
import './index.css'
const RemoveTrailingSlash = ({ ...rest }) => {
  const location = useLocation();

  // If the last character of the url is '/'
  if (location.pathname.match('/.*/$')) {
      return (
          <Navigate
              replace
              {...rest}
              to={{
                  pathname: location.pathname.replace(/\/+$/, ''),
                  search: location.search,
              }}
          />
      );
  } else return null;
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RemoveTrailingSlash />
      <Routes>
        <Route path="" element={<RootPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>  
    </BrowserRouter>
    

  </React.StrictMode>,
)
