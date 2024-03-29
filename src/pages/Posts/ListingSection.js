import classes from './ListingSection.module.css';
import AllPosts from './components/Posts/AllPosts';
import ListingTags from './components/Filter/ListingTags';
import FilterByCountryModal from './components/Filter/FilterByCountryModal';

import { useSelector } from 'react-redux';

const ListingSection = () => {
  const uiState = useSelector(state => state.ui);

  let notificationMarkup = '';

  if (uiState.notificationType === 'get' && uiState.notificationStatus === 'loading')
    notificationMarkup = (
      <p className={classes['listing-section__notification']}>{uiState.notificationMessage}</p>
    );

  if (uiState.notificationType === 'get' && uiState.notificationStatus === 'error')
    notificationMarkup = (
      <p className={classes['listing-section__notification']}>{uiState.notificationMessage}</p>
    );

  return (
    <section className={classes['listing-section']}>
      <div className={classes['listing-section__wrapper']}>
        <h2>Experiences</h2>
        <h5>Filter by</h5>
        {uiState.countriesFilterWindowActive && <FilterByCountryModal />}
        <ListingTags />
      </div>
      {notificationMarkup}
      <AllPosts />
    </section>
  );
};

export default ListingSection;
