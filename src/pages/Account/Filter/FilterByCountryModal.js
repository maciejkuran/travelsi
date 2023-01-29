import classes from './FilterByCountryModal.module.css';
import Card from '../../../components/UI/Card/Card';
import CloseButton from '../../../components/UI/Buttons/CloseButton';
import Overlay from '../../../components/UI/Overlay/Overlay';

import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/ui-slice';

const FilterByCountryModal = () => {
  const dispatch = useDispatch();

  const hideCountriesFilterWindowHandler = () => {
    dispatch(uiActions.hideCountriesFilterWindow());
  };

  const markup = (
    <Fragment>
      <Overlay attributes={{ onClick: hideCountriesFilterWindowHandler }} />
      <Card className={classes['filter-by-country']}>
        <h6>Filter by country 🗺</h6>
        <div className={classes['filter-by-country__selection']}>
          <button type="button">Poland</button>
          <button type="button">Poland</button>
          <button type="button">Poland</button>
          <button type="button">United States of America</button>
          <button type="button">Poland</button>
          <button type="button">Poland</button>
          <button type="button">Poland</button>
        </div>
        <CloseButton attributes={{ onClick: hideCountriesFilterWindowHandler }} />
      </Card>
    </Fragment>
  );

  return createPortal(markup, document.getElementById('modals'));
};

export default FilterByCountryModal;
