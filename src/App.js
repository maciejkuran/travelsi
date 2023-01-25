import AuthView from './components/Auth/AuthView';
import Navbar from './components/Layout/Navbar';
import Account from './components/Account/Account';

import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      {/* <Navbar />
      <Account /> */}
      <AuthView />
    </Fragment>
  );
}

export default App;
