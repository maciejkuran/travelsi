import classes from './Auth.module.css';
import authImg from '../../assets/img/login-image.jpg';
import SignIn from './SignIn';

const Auth = () => {
  return (
    <section className={classes['auth']}>
      <div className={classes['auth__img']}>
        <img src={authImg} alt="travelsy"></img>
      </div>
      <div className={classes['auth__auth-window']}>
        <SignIn />
      </div>
    </section>
  );
};

export default Auth;
