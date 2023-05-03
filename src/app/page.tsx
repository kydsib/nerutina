// import { Inter } from 'next/font/google'
import Nav from '@components/Nav/Nav';
import Footer from '@components/Footer/Footer';

import TrashComponent from '@components/Trash';

const Home = () => {
  return (
    <div className='h-screen'>
      <Nav />
      <TrashComponent />
      <div className='h-screen'></div>
      {/* <TrashComponent /> */}
      <Footer />
    </div>
  );
};

export default Home;