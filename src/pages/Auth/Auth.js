import classes from './Auth.module.css';
import authImg from '../../assets/img/login-image.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';

import { useSelector } from 'react-redux';

const Auth = () => {
  const { isLogging, isRegistering } = useSelector(state => state.ui);

  return (
    <section className={classes['auth']}>
      <div className={classes['auth__img']}>
        <img src={authImg} alt="travelsy"></img>
      </div>
      <div className={classes['auth__auth-window']}>
        {isLogging && <SignIn />}
        {isRegistering && <SignUp />}
      </div>
    </section>
  );
};

export default Auth;
