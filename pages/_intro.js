import PropTypes from 'prop-types';
import classNames from 'classnames';

import Navigation from '../components/navigation';

class Intro extends React.Component {
  render() {
    return (
      <header className='intro'>
        <Navigation />
        <div>
          <div className='intro-header'>
            <h6>Join us on Sunday, May 17th at 3:00 PM</h6>
            <h1>Dora & Derek</h1>
          </div>
          <div className='intro-image'>
            <img src='/static/icon_trees.svg' alt='' />
          </div>
          <div className='intro-description'>
            You've been invited to our little wedding! We found each other ~3 years ago and had one of our first dates catching Pokemon in Golden Gate Park. It was clear we were meant to be. Since then, we've been on an epic journey, picking up a little Noe Valley home and idiosycratic cats on the way. We hope you can celebrate with us on Sunday, May 17th. 
          </div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 60vh;
          }

          .intro-header {
            text-align: center;
            margin-top: 56px;
          }

          .intro-description {
            margin-top: 24px;
            margin-bottom: 24px;
          }

          @media (min-width: 992px) {

            .intro {
              min-height: 100vh;
              align-items: center;
            }

            .intro-header {
              text-align: left;
            }

            .intro-image {
              z-index: -1;
              margin-top: -50px;
            }

            .intro-description {
              column-count: 2;
            }

          }
        `}</style>
      </header>
    )
  }

}

export default Intro
