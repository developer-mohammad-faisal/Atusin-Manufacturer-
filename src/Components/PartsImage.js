import React, { Fragment } from 'react';
import parts1 from '../assets/images/partsOfImage/parts1.jpg'
import parts2 from '../assets/images/partsOfImage/parts2.jpg'
import '../CssStyle/Style.css'

const PartsImage = () => {
  return (
    <Fragment>
      <section className='grid gap-8 py-7 grid-cols-1 lg:grid-cols-2'>
        <div className='bounce-style'>
          <img  src={parts1} alt="" />
        </div>
        <div className='bounce-style'>
          <img  src={parts2} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default PartsImage;