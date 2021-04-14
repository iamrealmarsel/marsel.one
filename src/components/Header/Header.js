import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from './Header.scss';

function Header(props) {
  const { border } = props;

  return (
    <header className={`${cn.header} ${border ? cn.header_border : ''}`}>
      <Link className={cn.link} to='/'>
        Work
      </Link>
      <Link className={cn.link} to='/about'>
        About
      </Link>
    </header>
  );
}

Header.defaultProps = {
  border: false,
};

Header.propTypes = {
  border: PropTypes.bool,
};

export default Header;
