/* eslint-disable */
import Menu from './Menu';
import { Outlet } from 'react-router-dom';

const Layout = ({ loading, recipes }) => {
  return (
    <>
      <Menu recipes={recipes} loading={loading} />
      <Outlet/>
    </>
  );
};

export default Layout;
