import HeroSection from '../Layout/HeroSection';
import ListingSection from '../Layout/ListingSection';
import PostForm from '../Posts/PostForm/PostForm';

import { Fragment } from 'react';

const Account = () => {
  return (
    <Fragment>
      <HeroSection />
      <PostForm></PostForm>
      <ListingSection />
    </Fragment>
  );
};

export default Account;
