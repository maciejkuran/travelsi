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
import useInput from '../../../hooks/useInput';
import useFileInput from '../../../hooks/useFileInput';
import useTag from '../../../hooks/useTag';
import {
  checkIfNotEmpty,
  checkTitleLength,
  checkDescriptionLength,
  readDate,
} from '../../../utils/helpers';

const PostForm = () => {
  const dispatch = useDispatch();

  const hidePostFormHandler = () => {
    dispatch(uiActions.hidePostForm());
  };

  //Title input
  const {
    getInputHandler: getTitleHandler,
    onBlurInputHandler: onBlurTitleInputHandler,
    inputValue: titleValue,
    isTouched: titleInputIsTouched,
    inputIsValid: titleInputIsValid,
    hasError: titleHasError,
  } = useInput(checkTitleLength);

  //City input
  const {
    getInputHandler: getCityHandler,
    onBlurInputHandler: onBlurCityInputHandler,
    inputValue: cityValue,
    isTouched: cityInputIsTouched,
    inputIsValid: cityInputIsValid,
    hasError: cityHasError,
  } = useInput(checkIfNotEmpty);
  //Country input
  const {
    getInputHandler: getCountryHandler,
    onBlurInputHandler: onBlurCountryInputHandler,
    inputValue: countryValue,
    isTouched: countryInputIsTouched,
    inputIsValid: countryInputIsValid,
    hasError: countryHasError,
  } = useInput(checkIfNotEmpty);
  //Description input
  const {
    getInputHandler: getDescriptionHandler,
    onBlurInputHandler: onBlurDescriptionInputHandler,
    inputValue: descriptionValue,
    isTouched: descriptionInputIsTouched,
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

  const formMarkup = (
    <Fragment>
      <Overlay attributes={{ onClick: hidePostFormHandler }} />
      <Card className={classes['post-form']}>
        <h3>Your Best Travel Experience 🗺️</h3>
        <form>
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
            <span className={classes['post-form__input--error']}>
              * title must contain 45 characters max and can't be empty.
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
              {cityHasError && (
                <span className={classes['post-form__input--error']}>* this field is empty</span>
              )}
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
              {countryHasError && (
                <span className={classes['post-form__input--error']}>* this field is empty</span>
              )}
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
            <span className={classes['post-form__input--error']}>
              {' '}
              * description must contain 125 characters max and can't be empty.
            </span>
          )}

          <PostFormTags getTagTextContentHandler={getTagTextContentHandler}></PostFormTags>

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
            <img src={parisImg}></img>
          </div>
          {fileInputHasError && (
            <span className={classes['post-form__input--error']}> * image required</span>
          )}
          <PrimaryButton
            className={classes['post-form__button--submit']}
            attributes={{ type: 'submit', disabled: !formIsValid }}
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
