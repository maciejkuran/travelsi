import { firebaseAuth } from '../../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { uiActions } from '../ui-slice';

const signIn = (email, password) => {
  return async dispatch => {
    const signInUser = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          message: '⏳ signing in...',
          type: 'signin',
        })
      );
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    try {
      await signInUser();
      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: '🟢 signed in!',
          type: 'signin',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: `🚩 ${err.code}`,
          type: 'signin',
        })
      );
    }
  };
};

export default signIn;
