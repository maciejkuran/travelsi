import HeroSection from './HeroSection';
import ListingSection from './ListingSection';
import PostForm from './Form/PostForm';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  const ui = useSelector(state => state.ui);

  return (
    <Fragment>
      <HeroSection />
      {ui.postFormActive && <PostForm></PostForm>}
      <ListingSection />
    </Fragment>
  );
};

export default Account;
