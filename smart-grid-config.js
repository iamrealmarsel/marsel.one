const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
const settings = {
  outputStyle: 'scss' /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: '30px' /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: '1200px' /* max-width оn very large screen */,
    fields: '30px' /* side fields */,
  },
  breakPoints: {
    // xl: {
    //   width: '1399px' /* -> @media (max-width: 1100px) */,
    // },
    lg: {
      width: '1199px' /* -> @media (max-width: 1199px) */,
    },
    md: {
      width: '991px',
    },
    sm: {
      width: '767px',
      fields: '15px' /* set fields only if you want to change container.fields */,
    },
    xs: {
      width: '575px',
    },
    /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
  },
};

smartgrid('./', settings);
