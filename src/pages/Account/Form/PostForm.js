import classes from './PostForm.module.css';
import Card from '../../../components/UI/Card/Card';
import PrimaryButton from '../../../components/UI/Buttons/PrimaryButton';
import Input from '../../../components/UI/Form/Input';
import TextArea from '../../../components/UI/Form/TextArea';
import PostFormTags from './PostFormTags';
import parisImg from '../../../assets/img/paris.jpg';
import CloseButton from '../../../components/UI/Buttons/CloseButton';
import Overlay from '../../../components/UI/Overlay/Overlay';

import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/ui-slice';

const PostForm = () => {
  const dispatch = useDispatch();

  const hidePostFormHandler = () => {
    dispatch(uiActions.hidePostForm());
  };

  const formMarkup = (
    <Fragment>
      <Overlay attributes={{ onClick: hidePostFormHandler }} />
      <Card className={classes['post-form']}>
        <h3>Your Best Travel Experience 🗺️</h3>
        <form>
          <Input
            className={classes['post-form__input--title']}
            attributes={{ type: 'text', placeholder: 'Title' }}
          ></Input>

          <div className={classes['post-form__inputs']}>
            <Input attributes={{ type: 'text', placeholder: 'City' }}></Input>
            <Input attributes={{ type: 'text', placeholder: 'Country' }}></Input>
          </div>

          <TextArea
            className={classes['post-form__textarea--description']}
            attributes={{ placeholder: 'Description', rows: '3' }}
          ></TextArea>
          <PostFormTags></PostFormTags>

          <div className={classes['post-form__image-upload']}>
            <label
              className={classes['post-form__input--file--label']}
              htmlFor={classes['post-form__input--file']}
            >
              Add image
            </label>
            <input
              id={classes['post-form__input--file']}
              type="file"
              accept="image/png, image/jpeg"
            ></input>
            <img src={parisImg}></img>
          </div>
          <PrimaryButton
            className={classes['post-form__button--submit']}
            attributes={{ type: 'submit' }}
          >
            SHARE
          </PrimaryButton>
        </form>
        <CloseButton attributes={{ onClick: hidePostFormHandler }} />
      </Card>
    </Fragment>
  );

  return createPortal(formMarkup, document.getElementById('modals'));
};

export default PostForm;
