import classes from './PostForm.module.css';
import Card from '../../../components/UI/Card/Card';
import PrimaryButton from '../../../components/UI/Buttons/PrimaryButton';
import Input from '../../../components/UI/Form/Input';
import TextArea from '../../../components/UI/Form/TextArea';
import PostFormTags from './PostFormTags';
import CloseButton from '../../../components/UI/Buttons/CloseButton';
import Overlay from '../../../components/UI/Overlay/Overlay';

import { caseSensitive_numbs_PW } from 'super-strong-password-generator-es';
import { createPortal } from 'react-dom';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/slices/ui-slice';
import useInput from '../../../hooks/useInput';
import useFileInput from '../../../hooks/useFileInput';
import useTag from '../../../hooks/useTag';
import {
  checkIfNotEmpty,
  checkTitleLength,
  checkDescriptionLength,
  readDate,
  capitalizeInput,
} from '../../../utils/helpers';
import sendPost from '../../../store/slices/action-creators/sendPost';

const PostForm = () => {
  const dispatch = useDispatch();
  const { notificationStatus, notificationMessage, notificationType } = useSelector(
    state => state.ui
  );
  const [markupInvalidForm, setMarkupInvalidForm] = useState('');

  const hidePostFormHandler = () => {
    dispatch(uiActions.hidePostForm());
  };

  //Title input
  const {
    getInputHandler: getTitleHandler,
    onBlurInputHandler: onBlurTitleInputHandler,
    inputValue: titleValue,
    inputIsValid: titleInputIsValid,
    hasError: titleHasError,
  } = useInput(checkTitleLength);

  //City input
  const {
    getInputHandler: getCityHandler,
    onBlurInputHandler: onBlurCityInputHandler,
    inputValue: cityValue,
    inputIsValid: cityInputIsValid,
    hasError: cityHasError,
  } = useInput(checkIfNotEmpty);
  //Country input
  const {
    getInputHandler: getCountryHandler,
    onBlurInputHandler: onBlurCountryInputHandler,
    inputValue: countryValue,
    inputIsValid: countryInputIsValid,
    hasError: countryHasError,
  } = useInput(checkIfNotEmpty);
  //Description input
  const {
    getInputHandler: getDescriptionHandler,
    onBlurInputHandler: onBlurDescriptionInputHandler,
    inputValue: descriptionValue,
    inputIsValid: descriptionInputIsValid,
    hasError: descriptionHasError,
  } = useInput(checkDescriptionLength);

  //Chosen tag
  const { getTagTextContentHandler, tagTextContent, tagClicked } = useTag();

  //File input
  const {
    getInputFileHandler,
    isTouchedOnClickHandler,
    fileInputValue,
    fileInputIsValid,
    fileInputHasError,
  } = useFileInput(checkIfNotEmpty);

  let formIsValid =
    titleInputIsValid &&
    cityInputIsValid &&
    countryInputIsValid &&
    descriptionInputIsValid &&
    tagClicked &&
    fileInputIsValid;

  const submitFormHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      setMarkupInvalidForm('⚠ Unable to submit the form. Please complete all required fields.');
      return;
    }

    setMarkupInvalidForm('');

    const id = caseSensitive_numbs_PW(10);

    const post = {
      city: capitalizeInput(cityValue),
      country: capitalizeInput(countryValue),
      date: readDate(),
      description: descriptionValue,
      dislikeStat: 0,
      id: id,
      img: fileInputValue,
      laughStat: 0,
      likeStat: 0,
      tag: tagTextContent,
      title: titleValue,
    };

    dispatch(sendPost(post, id));
  };

  //Show send status conditionally when form is submitted
  let notificationMarkup;

  if (notificationType === 'post' && notificationStatus === 'submitting')
    notificationMarkup = <p className="notification">{notificationMessage}</p>;

  if (notificationType === 'post' && notificationStatus === 'success')
    notificationMarkup = <p className="notification">{notificationMessage}</p>;

  if (notificationType === 'post' && notificationStatus === 'error')
    notificationMarkup = <p className="notification">{notificationMessage}</p>;

  const formMarkup = (
    <Fragment>
      <Overlay attributes={{ onClick: hidePostFormHandler }} />
      <Card className={classes['post-form']}>
        <h3>Your Best Travel Experience 🗺️</h3>
        <form onSubmit={submitFormHandler}>
          <Input
            className={classes['post-form__input--title']}
            attributes={{
              type: 'text',
              placeholder: 'Title',
              onChange: getTitleHandler,
              onBlur: onBlurTitleInputHandler,
            }}
          ></Input>
          {titleHasError && (
            <span className="notification">
              👉 title must contain between 10-45 characters and can't be empty
            </span>
          )}

          <div className={classes['post-form__inputs']}>
            <div>
              <Input
                attributes={{
                  type: 'text',
                  placeholder: 'City',
                  onChange: getCityHandler,
                  onBlur: onBlurCityInputHandler,
                }}
              ></Input>
              {cityHasError && <span className="notification">👉 this field is empty</span>}
            </div>
            <div>
              <Input
                attributes={{
                  type: 'text',
                  placeholder: 'Country',
                  onChange: getCountryHandler,
                  onBlur: onBlurCountryInputHandler,
                }}
              ></Input>
              {countryHasError && <span className="notification">👉 this field is empty</span>}
            </div>
          </div>

          <TextArea
            className={classes['post-form__textarea--description']}
            attributes={{
              placeholder: 'Description',
              rows: '3',
              onChange: getDescriptionHandler,
              onBlur: onBlurDescriptionInputHandler,
            }}
          ></TextArea>
          {descriptionHasError && (
            <span className="notification">
              {' '}
              👉 description must contain between 45-125 characters and can't be empty
            </span>
          )}

          <PostFormTags getTagTextContentHandler={getTagTextContentHandler}></PostFormTags>
          {!tagClicked && fileInputIsValid && (
            <span className="notification"> 👉 tag selection is required</span>
          )}

          <div className={classes['post-form__image-upload']}>
            <label
              className={classes['post-form__input--file--label']}
              htmlFor={classes['post-form__input--file']}
            >
              Add image
            </label>
            <input
              onChange={getInputFileHandler}
              onClick={isTouchedOnClickHandler}
              id={classes['post-form__input--file']}
              type="file"
              accept="image/png, image/jpeg"
            ></input>
            {fileInputValue && <img src={fileInputValue}></img>}
          </div>
          {fileInputHasError && <span className="notification"> 🖼 image required</span>}
          <span className="notification">{markupInvalidForm}</span>
          <PrimaryButton
            className={classes['post-form__button--submit']}
            attributes={{ type: 'submit' }}
          >
            SHARE
          </PrimaryButton>
          {notificationMarkup}
        </form>
        <CloseButton attributes={{ onClick: hidePostFormHandler }} />
      </Card>
    </Fragment>
  );

  return createPortal(formMarkup, document.getElementById('modals'));
};

export default PostForm;
