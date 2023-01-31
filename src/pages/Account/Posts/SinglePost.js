import classes from './SinglePost.module.css';
import Card from '../../../components/UI/Card/Card';
import EmojiButton from '../../../components/UI/Buttons/EmojiButton';
import paperClipImg from '../../../assets/img/paper-clip.png';

const SinglePost = props => {
  return (
    <Card className={classes['single-post']}>
      <img className={classes['single-post__post-img']} src={props.img}></img>
      <h5>{props.title}</h5>
      <h6>
        {props.city}, {props.country}
      </h6>
      <p className={classes['description']}>{props.description}</p>
      <span>{props.date}</span>
      <div className={classes['single-post__spacer']}></div>

      <div className={classes['single-post__emojis']}>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          🧡<span>{props.likeStat}</span>
        </EmojiButton>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          🤣<span>{props.laughStat}</span>
        </EmojiButton>
        <EmojiButton
          attributes={{ type: 'button' }}
          className={classes['single-post__button--emoji']}
        >
          😡<span>{props.dislikeStat}</span>
        </EmojiButton>
      </div>
      <div className={classes['single-post__category-tag']}>{props.tag}</div>
      <img className={classes['single-post__paper-clip-img']} src={paperClipImg}></img>
    </Card>
  );
};

export default SinglePost;
