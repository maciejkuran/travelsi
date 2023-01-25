import classes from './AuthView.module.css';
import authImg from '../../assets/img/login-image.jpg';
import SignIn from './SignIn';

const AuthView = () => {
  return (
    <section className={classes['auth-view']}>
      <div className={classes['auth-view__img']}>
        <img src={authImg} alt="travelsy"></img>
      </div>
      <div className={classes['auth-view__auth-window']}>
        <SignIn />
      </div>
    </section>
  );
};

export default AuthView;
