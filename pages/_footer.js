import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-image'>
          <img src='/static/icon_forest.png' alt='' /><img src='/static/icon_forest.png' alt='' />
        </div>
        <div className='footer-content'>
          © Made by Dora Chan
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            background-color: var(--color-green-dark);
            color: var(--color-green-light);
          }

          .footer-image {
            display: flex;
            width: 100%;
            overflow: hidden;
          }

          .footer-image img {
            width: 100%;
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
