import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { navigation } from '@store';
import cn from './Footer.scss';

function Footer({ pathname }) {
  return (
    <footer className={cn.footer}>
      {navigation.map((item) => (
        <Link className={`${cn.link} ${item.path === pathname ? cn.active : ''}`} to={item.path} key={item.path}>
          {item.name}
        </Link>
      ))}
      <a href='https://github.com/iamrealmarsel/marsel.one' className={cn.logoGithub} target='_blank' rel='noreferrer'>
        <img src='img/icons/logo-github.svg' alt='' />
      </a>
    </footer>
  );
}

Footer.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Footer;
