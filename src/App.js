import Auth from './pages/Auth';
import Posts from './pages/Posts/index';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getTheCurrentUser from './store/slices/action-creators/getTheCurrentUser';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'auth', element: <Auth /> },
  { path: 'posts', element: <Posts /> },
]);

function App() {
  //_______________________________
  //User authentication observer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheCurrentUser());
  });
  //________________________________

  return <RouterProvider router={router} />;
}

export default App;
