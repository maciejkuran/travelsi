import classes from './index.module.css';
import authImg from '../../assets/img/login-image.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.auth);
  const { isLogging, isRegistering, isResettingPassword } = useSelector(state => state.ui);

  //Redirect to posts page if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/posts');
    }
  }, [isAuthenticated]);

  return (
    <section className={classes['auth']}>
      <div className={classes['auth__img']}>
        <img src={authImg} alt="travelsy"></img>
      </div>
      <div className={classes['auth__auth-window']}>
        {isLogging && <SignIn />}
        {isRegistering && <SignUp />}
        {isResettingPassword && <ResetPassword />}
      </div>
    </section>
  );
};

export default Auth;
