import classes from './AllPosts.module.css';
import SinglePost from './SinglePost';
import { fetchPosts } from '../../../store/slices/action-creators/fetchPosts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.postsToRender);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className={classes['all-posts']}>
      <div className={classes['all-posts__wrapper']}>
        {posts.map(post => {
          return (
            <SinglePost
              city={post.city}
              country={post.country}
              date={post.date}
              description={post.description}
              id={post.id}
              img={post.img}
              tag={post.tag}
              title={post.title}
              likeStat={post.likeStat}
              dislikeStat={post.dislikeStat}
              laughStat={post.laughStat}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
