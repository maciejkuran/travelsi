import classes from './AllPosts.module.css';
import SinglePost from './SinglePost';

const AllPosts = () => {
  return (
    <div className={classes['all-posts']}>
      <div className={classes['all-posts__wrapper']}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

export default AllPosts;
