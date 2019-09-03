import PropTypes from 'prop-types';
import classNames from 'classnames';

import List from '../components/list';

class Registry extends React.Component {
  render() {
    return (
      <div className='registry'>
        <h4>Registry</h4>
        <List>
          <List.Item>Zola</List.Item>
          <List.Item>Crate & Barrel</List.Item>
          <List.Item>Amazon</List.Item>
        </List>
        <style jsx>{`
          .registry {
            grid-area: registry;
          }
        `}</style>
      </div>
    )
  }

}

export default Registry
