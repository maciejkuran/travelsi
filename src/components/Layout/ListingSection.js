import classes from './ListingSection.module.css';
import AllPosts from '../Posts/AllPosts';
import ListingTags from './ListingTags';

const ListingSection = () => {
  return (
    <section className={classes['listing-section']}>
      <div className={classes['listing-section__wrapper']}>
        <h2>Experiences</h2>
        <h5>Search by</h5>
        <ListingTags />
      </div>
      <AllPosts />
    </section>
  );
};

export default ListingSection;
