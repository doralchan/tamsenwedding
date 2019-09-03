import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from '../components/section';

class Gallery extends React.Component {
  render() {
    return (
      <Section className='gallery'>
        This is a gallery
        <img src='' className='gallery-image' alt='' />
        <img src='' className='gallery-image' alt='' />
        <img src='' className='gallery-image' alt='' />
        <img src='' className='gallery-image' alt='' />
        <img src='' className='gallery-image' alt='' />
      </Section>
    )
  }

}

export default Gallery
