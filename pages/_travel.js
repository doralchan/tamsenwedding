import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import List from '../components/list';
import Link from '../components/link';

class Travel extends React.Component {
  render() {
    return (
      <div id='travel' className='travel'>
        <h3>Travel</h3>
        <Block blockTitle='Location'>
          <div>The Outdoor Art Club</div>
          <div>1 West Blithedale Avenue, Mill Valley CA 94941</div>
          <List>
            <List.Item><Link linkTo='https://goo.gl/maps/j939V7DoxNk18MA19'>Get Directions ></Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Parking & Transportation'>
          The venue doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk. If you're extra lazy we can arrange a pedicab. Kidding. They don't have pedicabs in Mill Valley.
          <List>
            <List.Item><Link linkTo='https://goo.gl/maps/umZszdRDe5SbM7mk7'>Get Directions ></Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Accomodations'>
          If you're coming in from out of town, we recommend staying in San Francisco or Mill Valley. Treat yo self.
          <List>
            <List.Item><Link linkTo='https://www.airbnb.com/s/Mill-Valley--CA'>Browse Airbnb ></Link></List.Item>
          </List>
        </Block>
        <style jsx>{`
          .travel {
            grid-area: travel;
            padding-top: 24px;
          }
          .travel h3 {
            margin-bottom: 24px;
          }
        `}</style>
      </div>
    )
  }

}

export default Travel
