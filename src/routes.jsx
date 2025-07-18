import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateCampaign from '../src/components/dashboard/CreateCampaign';
import Campaigns from './pages/Campaigns'
import Inbox from './pages/Inbox'
import SettingsProfile from './pages/SettingsProfile';
import FieldMapper from './components/campaigns/FieldMapper';
// import Settings from './pages/Settings'
import Login from './pages/Login'
// import MainLayout from './components/common/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <MainLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/campaigns', element: <Campaigns /> },
      { path: '/inbox', element: <Inbox /> },
    //   { path: '/settings', element: <Settings /> }
    { path: 'field-mapper', element: <FieldMapper /> },

    ]
  },
   {
    path: '/create-campaign',
    element: <CreateCampaign />,
  },
  {
   path:"/settings" ,
   element: <SettingsProfile  />
  },
  
  {
    path: '/login',
    element: <Login />
  }
])

export default router