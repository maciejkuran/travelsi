import classes from './SignUp.module.css';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Form/Input';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import { uiActions } from '../../store/slices/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { validateEmail, validatePassword, validatePasswordMatch } from '../../utils/helpers';
import { useState } from 'react';
import signUpUser from '../../store/slices/action-creators/signUp';

const SignUp = () => {
  const dispatch = useDispatch();
  const [markupInvalidForm, setMarkupInvalidForm] = useState('');

  const { notificationStatus, notificationType, notificationMessage } = useSelector(
    state => state.ui
  );
  //email input
  const {
    getInputHandler: emailInputHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    hasError: emailHasError,
  } = useInput(validateEmail);
  //password input
  const {
    getInputHandler: passwordInputHandler,
    onBlurInputHandler: onBlurPasswordInputHandler,
    inputValue: passwordInputValue,
    inputIsValid: passwordInputIsValid,
    hasError: passwordHasError,
  } = useInput(validatePassword);
  //confirmation password input
  const {
    getInputHandler: confirmationPasswordInputHandler,
    onBlurInputHandler: onBlurConfirmationPasswordInputHandler,
    inputValue: confirmationPasswordInputValue,
    inputIsValid: confirmationPasswordInputIsValid,
    hasError: confirmationPasswordHasError,
  } = useInput(validatePasswordMatch, passwordInputValue);

  let formIsValid = emailInputIsValid && passwordInputIsValid && confirmationPasswordInputIsValid;

  const switchToSignInHandler = e => {
    e.preventDefault();
    dispatch(uiActions.isLogging());
  };

  const registerUserHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      setMarkupInvalidForm('⚠ Unable to sign up. Please complete all required fields.');
      return;
    }

    setMarkupInvalidForm('');

    dispatch(signUpUser(emailInputValue, passwordInputValue));
  };

  //rendering conditionally status notification of 'of signup' markup when form submitted
  let notificationMarkup = '';

  if (notificationType === 'signup' && notificationStatus === 'loading')
    notificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'signup' && notificationStatus === 'success')
    notificationMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationType === 'signup' && notificationStatus === 'error')
    notificationMarkup = <span className="notification">{notificationMessage}</span>;

  return (
    <Card className={classes['signup']}>
      <p className={classes['signup__welcome']}>
        Join the community!<span className={classes['signup__dot']}></span>
      </p>
      <h3>Sign Up</h3>
      <form onSubmit={registerUserHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <Input
            attributes={{
              id: 'email',
              type: 'email',
              placeholder: 'Email address',
              onChange: emailInputHandler,
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
              onChange: passwordInputHandler,
              onBlur: onBlurPasswordInputHandler,
            }}
          ></Input>
          {passwordHasError && (
            <span className="notification">🔑 Password must contain at least 8 characters</span>
          )}
        </div>

        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <Input
            attributes={{
              id: 'confirm-password',
              type: 'password',
              placeholder: 'Confirm password',
              onChange: confirmationPasswordInputHandler,
              onBlur: onBlurConfirmationPasswordInputHandler,
            }}
          ></Input>
          {confirmationPasswordHasError && (
            <span className="notification">🔑 Password doesn't match!</span>
          )}
        </div>

        <PrimaryButton attributes={{ type: 'submit' }} className={classes['signup__button']}>
          SIGN UP
        </PrimaryButton>
        {notificationMarkup}
        <span className="notification">{markupInvalidForm}</span>
      </form>

      <p className={classes['signup__signin-action']}>
        Already have an account?{' '}
        <a onClick={switchToSignInHandler} href="">
          Sign In
        </a>
      </p>

      <div className={classes['signup__disclaimer']}>
        <p>
          👋 Hi, please note it's a demo version made just for learning purposes. Copyright©
          maciejkuran.com
        </p>
      </div>
    </Card>
  );
};

export default SignUp;
