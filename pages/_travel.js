import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import Link from '../components/link';

class Travel extends React.Component {
  render() {
    return (
      <div id='travel' className='travel'>
        <h3>Travel</h3>
        <Block blockTitle='Location'>
          <div>The Outdoor Art Club</div>
          <div>1 West Blithedale Avenue, Mill Valley CA 94941</div>
          <div className='block-link'>
            <Link linkTo='https://goo.gl/maps/j939V7DoxNk18MA19'>Get Directions ></Link>
          </div>
        </Block>
        <Block blockTitle='Parking & Transportation'>
          The venue doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk. If you're extra lazy we can arrange a pedicab. Kidding. They don't have pedicabs in Mill Valley.
          <div className='block-link'>
            <Link linkTo='https://goo.gl/maps/umZszdRDe5SbM7mk7'>Get Directions ></Link>
          </div>
        </Block>
        <Block blockTitle='Accomodations'>
          Most of you are familiar with the area but if you're coming in from out of town, we recommend staying in San Francisco or Mill Valley for convenience. Remember to treat yo self.
          <div className='block-link'>
            <Link linkTo='https://www.airbnb.com/s/Mill-Valley--CA'>Browse Airbnb ></Link>
          </div>
        </Block>
        <style jsx>{`
          .travel {
            grid-area: travel;
            padding-top: 24px;
          }
          .travel h3 {
            margin-bottom: 24px;
          }
          .block-link {
            display: block;
            margin-top: 4px;
          }
        `}</style>
      </div>
    )
  }

}

export default Travel
