import classes from './SinglePost.module.css';
import Card from '../UI/Card/Card';
import parisImg from '../../assets/img/paris.jpg';
import EmojiButton from '../UI/Buttons/EmojiButton';

const SinglePost = () => {
  return (
    <Card className={classes['single-post']}>
      <img src={parisImg}></img>
      <h5>Eating snails and other stuff</h5>
      <h6>Paris, France</h6>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.
      </p>

      <div>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          🧡<span>0</span>
        </EmojiButton>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          🤣<span>0</span>
        </EmojiButton>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          😡<span>0</span>
        </EmojiButton>
      </div>
      <div className={classes['single-post__category-tag']}>food</div>
    </Card>
  );
};

export default SinglePost;
