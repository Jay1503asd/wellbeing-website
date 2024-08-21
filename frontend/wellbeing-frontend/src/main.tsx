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
import SurveyHome from './pages/survey/survey';
import { SurveyParent } from './components/surveyParent'; // Import SurveyParent
import StrategiesPage from './components/strategies';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import ProfilePage from './pages/profile/profile';

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
        <Route path="/surveys" element={<SurveyHome />} />
        <Route path="/surveys/*" element={<SurveyParent />} />
        <Route path = "/strategies" element={<StrategiesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/register" element={<RegisterPage />} />
        <Route path = "/profile" element={<ProfilePage />} />
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>,
);
