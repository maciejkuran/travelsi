import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../../config/firebase';
import { authSliceActions } from '../auth-slice';

const getTheCurrentUser = () => {
  return dispatch => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        dispatch(authSliceActions.isAuthenticated({ email: user.email, uid: user.uid }));
      } else {
        dispatch(authSliceActions.isNotAuthenticated());
      }
    });
  };
};

export default getTheCurrentUser;
