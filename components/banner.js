import PropTypes from 'prop-types';
import classNames from 'classnames';

class Banner extends React.Component {
  render() {
    return (
      <div className='banner'>
        Yay! We'll see your lovely faces soon.
        <style jsx>{`
          .banner {
            background-color: var(--color-green-light);
            color: var(--color-green-dark);
            padding: 10px 16px;
            border-radius: 4px;
            margin-top: 24px;
            margin-bottom: 40px;
          }
        `}</style>
      </div>
    )
  }
}

export default Banner
