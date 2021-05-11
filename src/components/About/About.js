import React from 'react';
import cn from './About.scss';

function About() {
  return (
    <div className={cn.container}>
      <p className={cn.text}>Hello, world! 👋</p>
      <p className={cn.text}>
        I&apos;m Marsel and I love to study front-end development, design, marketing and also English 😅
      </p>
      <p className={cn.text}>
        I had experience with HTML, CSS, Sass, Javascript, React, Redux, SVG/Canvas animation, Email coding, Webpack,
        Gulp, Git, Wordpress, Figma, Photoshop.
      </p>
      <p className={cn.text}>I want to be your BFF. Can I?</p>
      <a className={cn.link} href='https://t.me/iamrealmarsel'>
        <img src='img/icons/logo-telegram.svg' alt='' />
        @iamrealmarsel
      </a>
      <a className={cn.link} href='mailto:iamrealmarsel@gmail.com'>
        <img src='img/icons/logo-gmail.svg' alt='' />
        iamrealmarsel@gmail.com
      </a>
    </div>
  );
}

export default About;
