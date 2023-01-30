import { postsActions } from './posts-slice';
import { FIREBASE_API } from '../../config/firebase';
import { uiActions } from './ui-slice';

export const fetchPosts = () => {
  return async dispatch => {
    const fetchData = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          message: '🦢 loading posts ...',
          type: 'get',
        })
      );

      const res = await fetch(`${FIREBASE_API}/posts.json`);

      if (!res.ok) throw new Error('Problems with getting data. Please try again 🤔.');

      const data = await res.json();

      const posts = [];

      for (const key in data) {
        posts.push(data[key]);
      }

      return posts;
    };

    try {
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
