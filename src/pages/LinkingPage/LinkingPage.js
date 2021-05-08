import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/Header';
import Footer from '@components/Footer';
import cnApp from '@styles/app.scss';
import cn from './LinkingPage.scss';

function LinkingPage({ location, links }) {
  return (
    <div className={cnApp.page}>
      <Header pathname={location.pathname} />
      <div className={cn.container}>
        <h1 className={cn.title}>Pages</h1>
        <ul>
          {links.map((link) => (
            <li key={link.href} className={cn.item}>
              <a className={cn.link} href={link.href} target='_blank' rel='noreferrer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer pathname={location.pathname} />
    </div>
  );
}

LinkingPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LinkingPage;
