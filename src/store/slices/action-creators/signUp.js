import { firebaseAuth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { uiActions } from '../ui-slice';

const signUpUser = (emailInput, pwInput) => {
  return async dispatch => {
    const signUp = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          message: '🦢 sign up in progress ...',
          type: 'signup',
        })
      );
      const res = await createUserWithEmailAndPassword(firebaseAuth, emailInput, pwInput);

      //   const userAccount = res.user;

      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: '🐼 signed up successfully!',
          type: 'signup',
        })
      );
    };

    try {
      await signUp();
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: `🙄 ${err.code}. Try again!`,
          type: 'signup',
        })
      );
    }
  };
};

export default signUpUser;
