import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import List from '../components/list';
import Link from '../components/link';

class Details extends React.Component {
  renderTravel() {
    return (
      <div id='travel' className='details-travel'>
        <h3>Travel</h3>
        <Block blockTitle='Location'>
          1 West Blithedale Avenue, Mill Valley CA 94941
          <List>
            <List.Item><Link linkTo='https://goo.gl/maps/j939V7DoxNk18MA19'>Get Directions</Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Parking & Transportation'>
          The venue doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk. If you're extra lazy we can arrange a pedicab. Kidding. They don't have pedicabs in Mill Valley.
          <List>
            <List.Item><Link linkTo='https://goo.gl/maps/umZszdRDe5SbM7mk7'>Get Directions</Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Accomodations'>
          If you're coming in from out of town, we recommend staying in San Francisco or Mill Valley. Treat yo self.
          <List>
            <List.Item><Link linkTo='https://www.airbnb.com/s/Mill-Valley--CA'>Browse Airbnb</Link></List.Item>
          </List>
        </Block>
        <style jsx>{`
          .details-travel {
            padding-top: 24px;
            padding-bottom: 24px;
          }
          .details-travel h3 {
            margin-bottom: 24px;
          }
        `}</style>
      </div>
    )
  }

  renderRegistry() {
    return (
      <div id='registry' className='details-registry'>
        <h3>Registry</h3>
        <Block blockTitle='Online'>
          <List>
            <List.Item><Link linkTo='https://www.zola.com/registry/derekanddora'>Zola</Link></List.Item>
          </List>
        </Block>

        <style jsx>{`
          .details-registry {
            padding-top: 24px;
          }
          .details-registry h3 {
            margin-bottom: 24px;
          }
        `}</style>
      </div>
    )
  }
  render() {
    return (
      <div className='details'>
        { this.renderRegistry() }
        { this.renderTravel() }
        <style jsx>{`
          .details {
            grid-area: details;
          }
        `}</style>
      </div>
    )
  }

}

export default Details
