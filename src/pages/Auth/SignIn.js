import classes from './SignIn.module.css';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Form/Input';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/ui-slice';

const SignIn = () => {
  const dispatch = useDispatch();

  const switchToSignUpHandler = e => {
    e.preventDefault();
    dispatch(uiActions.isRegistering());
  };

  return (
    <Card className={classes['signin']}>
      <p className={classes['signin__welcome-back']}>
        Welcome back<span className={classes['signin__dot']}></span>
      </p>
      <h3>Sign In</h3>
      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input attributes={{ id: 'email', type: 'email', placeholder: 'Email address' }}></Input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input attributes={{ id: 'password', type: 'password', placeholder: 'Password' }}></Input>
          <a href="#">Forgot password?</a>
        </div>

        <PrimaryButton attributes={{ type: 'submit' }} className={classes['signin__button']}>
          SIGN IN
        </PrimaryButton>
      </form>

      <p className={classes['signin__register-action']}>
        Don't have an account?{' '}
        <a onClick={switchToSignUpHandler} href="">
          Sign Up
        </a>
      </p>

      <div className={classes['signin__disclaimer']}>
        <p>
          👋 Hi, please note it's a demo version made just for learning purposes. Copyright©
          maciejkuran.com
        </p>
      </div>
    </Card>
  );
};

export default SignIn;
