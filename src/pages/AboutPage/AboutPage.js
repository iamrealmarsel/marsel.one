import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '@layouts/MainLayout';
import About from '@components/About';

function AboutPage({ location }) {
  return (
    <MainLayout location={location} container>
      <About />
    </MainLayout>
  );
}

AboutPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AboutPage;
