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
          }

          .footer-image {
            height: 140px;
            background-size: auto 140px,cover;
            background-image: url(/static/icon_forest.svg);
            background-position: top center;
            background-repeat: repeat-x;
            margin: 40px 0;
          }

          .footer-content {
            padding: 40px;
            text-align: center;
          }

          @media (min-width: 992px) {

            .footer-image {
              height: 160px;
              background-size: auto 160px,cover;
              margin: 0;
            }

          }

        `}</style>
      </footer>
    )
  }

}

export default Footer
