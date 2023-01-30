import { postsActions } from './posts-slice';
import { FIREBASE_API } from '../../config/firebase';

export const fetchPosts = () => {
  return async dispatch => {
    const res = await fetch(`${FIREBASE_API}/posts.json`);
    const data = await res.json();

    const posts = [];

    for (const key in data) {
      posts.push(data[key]);
    }

    dispatch(postsActions.getPosts({ posts: posts }));
  };
};
