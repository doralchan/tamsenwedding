import PropTypes from 'prop-types';
import classNames from 'classnames';

import Navigation from '../components/navigation';

class Intro extends React.Component {
  render() {
    return (
      <header className='intro'>
        <Navigation />
        <div className='intro-header'>
          <div className='intro-header-title'>
            <h6>Join us Sunday, May 17th at 3:00 PM</h6>
            <h1>Dora & Derek</h1>
          </div>
          <div className='intro-header-image'>
            <img src='/static/icon_trees.svg' alt='' />
          </div>
          <div className='intro-header-description'>
            You've been invited to our little wedding in Mill Valley! We found each other ~3 years ago and had one of our first dates catching Pokemon in Golden Gate Park. It was clear we were meant to be. Since then, we've been on an epic journey, traveling everywhere from the temples of Kyoto to the villages of Cinque Terre. We've also picked up a Noe Valley fixer upper and tuxedo cats on the way. We're ready to officially kick off the next chapter in our lives so please join us on May 17th at The Outdoor Art Club!
          </div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            height: auto;
          }

          .intro-header {
            margin-top: 8vh;
          }

          .intro-header-title {
            text-align: center;
          }

          .intro-header-description {
            margin-top: 20px;
          }

          @media (min-width: 992px) {

            .intro {
              height: 85vh;
              min-height: 700px;
              max-height: 800px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
            }

            .intro-header {
              max-width: 1050px;
              margin-top: 48px;
            }

            .intro-header-title {
              text-align: left;
            }

            .intro-header-image {
              position: relative;
              height: 220px;
              width: 100%;
            }

            .intro-header-image img {
              position: absolute;
              z-index: -1;
              bottom: 0;
            }

            .intro-header-description {
              column-count: 2;
              margin-top: 40px;
            }

          }
        `}</style>
      </header>
    )
  }

}

export default Intro
