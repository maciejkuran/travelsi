import classes from './FilterByCountryModal.module.css';
import Card from '../../../../components/UI/Card/Card';
import CloseButton from '../../../../components/UI/Buttons/CloseButton';
import Overlay from '../../../../components/UI/Overlay/Overlay';

import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../../store/slices/ui-slice';
import { postsActions } from '../../../../store/slices/posts-slice';
import { useSelector } from 'react-redux';

const FilterByCountryModal = () => {
  const dispatch = useDispatch();

  const hideCountriesFilterWindowHandler = () => {
    dispatch(uiActions.hideCountriesFilterWindow());
  };

  const filterByCountryHandler = e => {
    dispatch(postsActions.filterPostsByCountry({ country: e.target.textContent }));
    dispatch(uiActions.hideCountriesFilterWindow());
  };

  //Retreiving an array of countries from all posts
  const allPosts = useSelector(state => state.posts.posts);
  const countries = allPosts.map(post => post.country);
  //As some countries may duplicate, I want to retreive unique list to avoid duplications and sort alphabetically
  const uniqueCountryList = [...new Set(countries)].sort();

  const markup = (
    <Fragment>
      <Overlay attributes={{ onClick: hideCountriesFilterWindowHandler }} />
      <Card className={classes['filter-by-country']}>
        <h6>Filter by country 🗺</h6>
        <div className={classes['filter-by-country__selection']}>
          {uniqueCountryList.map(country => (
            <button onClick={filterByCountryHandler} key={country} type="button">
              {country}
            </button>
          ))}
        </div>
        <CloseButton attributes={{ onClick: hideCountriesFilterWindowHandler }} />
      </Card>
    </Fragment>
  );

  return createPortal(markup, document.getElementById('modals'));
};

export default FilterByCountryModal;
