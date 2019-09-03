import PropTypes from 'prop-types';
import classNames from 'classnames';

class Gallery extends React.Component {
  render() {
    return (
      <section className='gallery'>
        <div className='gallery-grid'>
          <div className='grid-large'><img src='/static/bg_gallery_1.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_5.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_5.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_5.png' alt='' /></div>
          <div className='grid-small'><img src='/static/bg_gallery_5.png' alt='' /></div>
        </div>
        <style jsx>{`
          .gallery {
            grid-area: gallery;
          }
          .gallery-grid {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
          .grid-small,
          .grid-large {
            background-color: var(--color-gray-light);
            overflow: hidden;
            display: flex;
          }
          .grid-large {
            grid-column: 1/3;
            grid-row: 1/3;
            max-height: 490px;
            justify-content: center;
          }
          .grid-large img {
            height: 550px;
          }
          .grid-small {
            align-items: flex-end;
            height: 235px;
          }
          .grid-small img {
            width: 100%;
          }
        `}</style>
      </section>
    )
  }

}

export default Gallery
