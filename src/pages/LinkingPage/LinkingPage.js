import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '@layouts/MainLayout';
import cn from './LinkingPage.scss';

function LinkingPage({ location, links }) {
  return (
    <MainLayout location={location}>
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
    </MainLayout>
  );
}

LinkingPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LinkingPage;
