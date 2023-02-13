import HeroSection from './HeroSection';
import ListingSection from './ListingSection';
import PostForm from './components/Form/PostForm';
import Navbar from '../../layout/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Posts = () => {
  const ui = useSelector(state => state.ui);
  const { isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated]);

  const markup = isAuthenticated && (
    <>
      <Navbar />
      <HeroSection />
      {ui.postFormActive && <PostForm></PostForm>}
      <ListingSection />
    </>
  );

  return markup;
};

export default Posts;
