import { FIREBASE_API } from '../../../config/firebase';
import { uiActions } from '../ui-slice';
import { postsActions } from '../posts-slice';

const sendPost = (post, id) => {
  return async dispatch => {
    const send = async () => {
      const res = await fetch(`${FIREBASE_API}/posts/${id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!res.ok)
        throw new Error('Something went wrong. We could not submit the post. Please try again 🤔.');
    };

    try {
      dispatch(
        uiActions.setNotification({
          status: 'submitting',
          message: '🦢 submitting ...',
          type: 'post',
        })
      );
      await send();
      dispatch(
        uiActions.setNotification({
          status: 'success',
          message: '🙈 submitted congrats!',
          type: 'post',
        })
      );
      dispatch(postsActions.addPost({ post: post }));
      dispatch(uiActions.hidePostForm());
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          message: err.message,
          type: 'post',
        })
      );
    }
  };
};

export default sendPost;
