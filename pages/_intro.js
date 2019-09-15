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
            <img src='/static/icon_trees.png' className='intro-image' alt='' />
            <h6>Sunday • May 17, 2020 • 3:00 PM</h6>
            <h1>Dora & Derek</h1>
            <h6>The Outdoor Art Club in Mill Valley, CA</h6>
          </div>
          <div className='intro-description'>
            You've been invited to our little wedding! We found each other ~3 years ago and had one of our first dates catching Pokemon in Golden Gate Park. It was clear we were meant to be. Since then, we've been on an epic journey, picking up a DIY house and idiosycratic cats on the way. We hope you can celebrate with us!
          </div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 60vh;
            position: relative;
          }

          .intro-image {
            height: 140px;
            margin-bottom: 24px;
          }

          .intro-description {
            padding-top: 20px;
            max-width: 850px;
            text-align: left;
          }

          @media (min-width: 768px) and (max-width: 992px) {

            .intro {
              min-height: 50vh;
            }

          }

          @media (min-width: 992px) {

            .intro {
              flex-direction: row;
              min-height: 500px;
              margin-bottom: 30px;
              align-items: flex-end;
            }
            .intro-image {
              position: absolute;
              height: 240px;
              left: -50px;
              top: -30px;
              z-index: -1;
            }
            .intro-header {
              padding-top: 160px;
              position: relative;
            }

          }
        `}</style>
      </header>
    )
  }

}

export default Intro
