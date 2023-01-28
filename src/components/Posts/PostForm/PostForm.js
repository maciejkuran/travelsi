import classes from './PostForm.module.css';
import Card from '../../UI/Card/Card';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';
import Input from '../../UI/Inputs/Input';
import TextArea from '../../UI/Inputs/TextArea';
import PostFormTags from './PostFormTags';
import parisImg from '../../../assets/img/paris.jpg';
import CloseButton from '../../UI/Buttons/CloseButton';
import Overlay from '../../UI/Overlay/Overlay';

import { createPortal } from 'react-dom';
import { Fragment } from 'react';

const PostForm = () => {
  const formMarkup = (
    <Fragment>
      <Overlay />
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
        <CloseButton />
      </Card>
    </Fragment>
  );

  return createPortal(formMarkup, document.getElementById('modals'));
};

export default PostForm;
