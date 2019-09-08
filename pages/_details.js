import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import List from '../components/list';
import Link from '../components/link';

class Details extends React.Component {
  renderTravel() {
    return (
      <div className='details-travel'>
        <h4>Travel</h4>
        <Block blockTitle='Location'>
          1 West Blithedale Avenue, Mill Valley CA
          <List>
            <List.Item><Link linkTo=''>Get Directions</Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Parking & Transportation'>
          The Outdoor Art Club doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk.
          <List>
            <List.Item><Link linkTo=''>Get Directions</Link></List.Item>
          </List>
        </Block>
        <Block blockTitle='Accomodations'>
          If you're coming in from out of town, we recommend staying in San Francisco or Mill Valley for a nice getaway.
          <List>
            <List.Item><Link linkTo=''>Browse Airbnb</Link></List.Item>
          </List>
        </Block>
        <style jsx>{`
          .details-travel h4 {
            margin-bottom: 24px;
          }
        `}</style>
      </div>
    )
  }

  renderRegistry() {
    return (
      <div className='details-registry'>
        <h4>Registry</h4>
        <Block blockTitle='Online'>
          <List>
            <List.Item><Link linkTo=''>Zola</Link></List.Item>
          </List>
        </Block>

        <style jsx>{`
          .details-registry {
            margin-bottom: 40px;
          }
          .details-registry h4 {
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
