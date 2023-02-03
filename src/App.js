import Auth from './pages/Auth/Auth';
import Navbar from './layout/Navbar';
import Account from './pages/Account/Account';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getTheCurrentUser from './store/slices/action-creators/getTheCurrentUser';

function App() {
  //_______________________________
  //User authentication observer
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheCurrentUser());
  });
  //________________________________

  return (
    <Fragment>
      {isAuthenticated && <Navbar />}
      <main>
        {isAuthenticated && <Account />}
        {!isAuthenticated && <Auth />}
      </main>
    </Fragment>
  );
}

export default App;
