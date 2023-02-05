import classes from './SinglePost.module.css';
import Card from '../../../components/UI/Card/Card';
import EmojiButton from '../../../components/UI/Buttons/EmojiButton';
import paperClipImg from '../../../assets/img/paper-clip.png';
import { useDispatch, useSelector } from 'react-redux';
import ratePost from '../../../store/slices/action-creators/ratePost';
import { useState, useEffect } from 'react';

const SinglePost = props => {
  const dispatch = useDispatch();
  const { uid, accessToken } = useSelector(state => state.auth.userData);
  const { notificationStatus, notificationType, notificationMessage } = useSelector(
    state => state.ui
  );
  const [userLiked, setUserLiked] = useState(false);
  const [userDIsliked, setUserDisliked] = useState(false);

  const feelings = [];
  for (const key in props.feelings) {
    feelings.push({ reaction: props.feelings[key].reaction, id: key });
  }

  useEffect(() => {
    feelings.forEach(feeling => {
      if (feeling.reaction === -1 && feeling.id === uid) {
        setUserDisliked(true);
        setUserLiked(false);
      }

      if (feeling.reaction === 1 && feeling.id === uid) {
        setUserDisliked(false);
        setUserLiked(true);
      }
    });
  }, [props.feelings]);

  const likes = feelings
    .filter(feeling => feeling.reaction === 1)
    .map(item => item.reaction)
    .reduce((acc, val) => acc + val, 0);

  const dislikes = feelings
    .filter(feeling => feeling.reaction === -1)
    .map(item => item.reaction)
    .reduce((acc, val) => acc + val * -1, 0);

  const ratePostHandler = e => {
    const buttonType = e.target.id;
    const postID = props.id;

    dispatch(ratePost(buttonType, uid, postID, accessToken));
  };

  //classes for emoji btns
  const likeBtnActiveClass = userLiked ? classes['single-post__button--emoji--clicked'] : '';
  const dislikeBtnActiveClass = userDIsliked ? classes['single-post__button--emoji--clicked'] : '';

  //rendering conditionally error markup if 'feeling' update goes wrong or post update goes wrong;
  let errorMarkup;
  if (notificationStatus === 'error' && notificationType === 'feeling')
    errorMarkup = <span className="notification">{notificationMessage}</span>;

  if (notificationStatus === 'error' && notificationType === 'updatePost')
    errorMarkup = <span className="notification">{notificationMessage}</span>;

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
          attributes={{ type: 'button', id: 'like', onClick: ratePostHandler }}
          className={`${classes['single-post__button--emoji']} ${likeBtnActiveClass}`}
        >
          👍{likes}
          <span>{props.likeStat}</span>
        </EmojiButton>
        <EmojiButton
          attributes={{ type: 'button', id: 'dislike', onClick: ratePostHandler }}
          className={`${classes['single-post__button--emoji']} ${dislikeBtnActiveClass}`}
        >
          👎{dislikes}
          <span>{props.laughStat}</span>
        </EmojiButton>
      </div>
      {errorMarkup}
      <div className={classes['single-post__category-tag']}>{props.tag}</div>
      <img className={classes['single-post__paper-clip-img']} src={paperClipImg}></img>
    </Card>
  );
};

export default SinglePost;
