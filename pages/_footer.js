import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div>
          <h4>Travel Information</h4>
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            height: 60vh;
          }
        `}</style>
      </footer>
    )
  }

}

export default Footer
