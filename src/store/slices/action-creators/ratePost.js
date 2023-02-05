import { FIREBASE_API } from '../../../config/firebase';
import { postsActions } from '../posts-slice';
import { uiActions } from '../ui-slice';

const ratePost = (buttonType, uid, postID, accessToken) => {
  return async dispatch => {
    const rate = async () => {
      let value;
      if (buttonType === 'like') value = 1;
      if (buttonType === 'dislike') value = -1;

      const res = await fetch(
        `${FIREBASE_API}/posts/${postID}/feelings/${uid}.json?auth=${accessToken}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reaction: value,
          }),
        }
      );

      const data = await res.json();
    };

    const getUpdatedPost = async () => {
      const res = await fetch(`${FIREBASE_API}/posts/${postID}.json?auth=${accessToken}`);

      const postData = await res.json();
      dispatch(postsActions.updateSinglePost({ id: postID, post: postData }));
    };

    try {
      await rate();
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: '⚠ Cannot set your feeling. Try again!',
          type: 'feeling',
        })
      );
    }

    try {
      await getUpdatedPost();
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: '⚠ Cannot update post! Try to refresh the browser.',
          type: 'updatePost',
        })
      );
    }
  };
};

export default ratePost;
