import classes from './SignIn.module.css';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Form/Input';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/ui-slice';
import useInput from '../../hooks/useInput';
import { validateEmail, validatePassword } from '../../utils/helpers';
import signIn from '../../store/slices/action-creators/signIn';

const SignIn = () => {
  const dispatch = useDispatch();
  const [markupInvalidForm, setMarkupInvalidForm] = useState('');
  const { notificationStatus, notificationType, notificationMessage } = useSelector(
    state => state.ui
  );

  //email input
  const {
    getInputHandler: getEmailInputHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    hasError: emailHasError,
  } = useInput(validateEmail);
  //password input
  const {
    getInputHandler: getPasswordInputHandler,
    onBlurInputHandler: onBlurPasswordInputHandler,
    inputValue: passwordInputValue,
    inputIsValid: passwordInputIsValid,
    hasError: passwordHasError,
  } = useInput(validatePassword);

  const switchToSignUpHandler = e => {
    e.preventDefault();
    dispatch(uiActions.isRegistering());
  };

  let formIsValid = emailInputIsValid && passwordInputIsValid;

  const signInHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      setMarkupInvalidForm('⚠ Provide your credentials in order to sign in');
      return;
    }

    setMarkupInvalidForm('');
    dispatch(signIn(emailInputValue, passwordInputValue));
  };

  //rendering condtionally status 'signIn' notifications when form submitted
  let statusNotificationMarkup;

  if (notificationType === 'signin' && notificationStatus === 'loading')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'signin' && notificationStatus === 'success')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'signin' && notificationStatus === 'error')
    statusNotificationMarkup = <span className="notification">{notificationMessage}</span>;

  return (
    <Card className={classes['signin']}>
      <p className={classes['signin__welcome-back']}>
        Welcome back<span className={classes['signin__dot']}></span>
      </p>
      <h3>Sign In</h3>
      <form onSubmit={signInHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input
            attributes={{
              id: 'email',
              type: 'email',
              placeholder: 'Email address',
              onChange: getEmailInputHandler,
              onBlur: onBlurEmailInputHandler,
            }}
          ></Input>
          {emailHasError && <span className="notification">👉 Provide correct email address</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            attributes={{
              id: 'password',
              type: 'password',
              placeholder: 'Password',
              onChange: getPasswordInputHandler,
              onBlur: onBlurPasswordInputHandler,
            }}
          ></Input>
          {passwordHasError && (
            <span className="notification">🔑 Password must contain at least 8 characters</span>
          )}
          <a href="#">Forgot password?</a>
        </div>

        <PrimaryButton attributes={{ type: 'submit' }} className={classes['signin__button']}>
          SIGN IN
        </PrimaryButton>
        {statusNotificationMarkup}
        <span className="notification">{markupInvalidForm}</span>
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
