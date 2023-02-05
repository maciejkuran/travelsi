import { postsActions } from '../posts-slice';
import { FIREBASE_API } from '../../../config/firebase';
import { uiActions } from '../ui-slice';

export const fetchPosts = accessToken => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(`${FIREBASE_API}/posts.json?auth=${accessToken}`);

      if (!res.ok) throw new Error('Problems with getting data. Please try again 🤔.');

      const data = await res.json();

      const posts = [];

      for (const key in data) {
        posts.push(data[key]);
      }
      return posts;
    };

    try {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          type: 'get',
          message: '🦢 loading posts ...',
        })
      );

      const posts = await fetchData();
      dispatch(postsActions.getPosts({ posts: posts }));
      dispatch(
        uiActions.setNotification({
          status: 'success',
          type: 'get',
          message: 'completed',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          type: 'get',
          message: err.message,
        })
      );
    }
  };
};
