import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-image' />
        <div className='footer-content'>
          © Made by Dora
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            background-color: var(--color-green-dark);
            color: var(--color-green-medium);
          }

          .footer-image {
            height: 200px;
            background-size: auto 200px,cover;
            background-image: url(/static/icon_forest.png);
            background-position: top center;
            background-repeat: repeat-x;
          }

          .footer-content {
            padding: 16px;
            text-align: center;
          }

        `}</style>
      </footer>
    )
  }

}

export default Footer
