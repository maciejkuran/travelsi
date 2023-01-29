import Auth from './pages/Auth/Auth';
import Navbar from './layout/Navbar';
import Account from './pages/Account/Account';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

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
