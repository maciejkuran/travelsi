import AuthView from './components/Auth/AuthView';
import Navbar from './components/Layout/Navbar';
import Account from './components/Account/Account';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && <Navbar />}
      {isAuthenticated && <Account />}
      {!isAuthenticated && <AuthView />}
    </Fragment>
  );
}

export default App;
