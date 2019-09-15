import PropTypes from 'prop-types';
import classNames from 'classnames';

class Gallery extends React.Component {
  render() {
    return (
      <section id='photos' className='gallery'>
        <div className='gallery-grid'>
          <div className='grid-large'><img src='/static/bg_gallery_1.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_2.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_3.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_4.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_5.png' alt='' /></div>
        </div>
        <style jsx>{`
          .gallery {
            grid-area: gallery;
          }
          .gallery-grid {
            display: grid;
            grid-auto-rows: 1fr;
            grid-gap: 10px;
          }
          .gallery-grid:before {
            content: '';
            width: 0;
            padding-bottom: 100%;
            grid-row: 1/1;
            grid-column: 1/1;
          }
          .grid-small,
          .grid-large {
            background-color: var(--color-gray-light);
            overflow: hidden;
            position: relative;
          }
          .grid-large {
            grid-column: 1/3;
            grid-row: 1/3;
          }
          .grid-small img,
          .grid-large img {
            position: absolute;
            bottom: 0;
          }
          .grid-small img {
            width: 100%;
          }
          .grid-large img {
            height: 100%;
          }
          @media (min-width: 992px) {

            .gallery-grid {
              grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
              grid-auto-rows: 1fr;
            }

          }
        `}</style>
      </section>
    )
  }

}

export default Gallery
