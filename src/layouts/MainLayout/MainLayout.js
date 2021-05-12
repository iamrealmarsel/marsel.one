import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/Header';
import Footer from '@components/Footer';
import cn from './MainLayout.scss';

function MainLayout({ location, children, container }) {
  return (
    <div className={cn.wrapper}>
      <Header pathname={location.pathname} />
      <main className={`${cn.main} ${container && cn.container}`}>{children}</main>
      <Footer pathname={location.pathname} />
    </div>
  );
}

MainLayout.defaultProps = {
  container: '',
};

MainLayout.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.array]).isRequired,
  container: PropTypes.bool,
};

export default MainLayout;
