import { Navigate, Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const MyProfile = () => {
  return (
    <div>
      <Navigate
        to="/myprofile/profile"
        state={{
          from: location.pathname,
          message: 'Please login first to access this page',
        }}
        // replace
      />
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyProfile;
