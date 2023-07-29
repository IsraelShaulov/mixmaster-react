import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

// SharedLayout
const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading'></div> : <Outlet />}
        {/* <Outlet /> */}
      </section>
    </>
  );
};
export default HomeLayout;
