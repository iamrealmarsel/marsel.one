import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { navigation } from '@store';
import cn from './Header.scss';

function Header({ pathname }) {
  return (
    <header className={cn.header}>
      {navigation.map((item) => (
        <Link className={`${cn.link} ${item.path === pathname ? cn.active : ''}`} to={item.path} key={item.path}>
          {item.name}
        </Link>
      ))}
      <a href='https://github.com/iamrealmarsel/marsel.one' className={cn.logoGithub} target='_blank' rel='noreferrer'>
        <img src='img/icons/logo-github.svg' alt='' />
      </a>
    </header>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
