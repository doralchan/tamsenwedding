import PropTypes from 'prop-types';
import classNames from 'classnames';

class Intro extends React.Component {
  render() {
    return (
      <header className='intro'>
        <div>
          <div className='intro-header'>
            <img src='/static/icon_trees.png' className='intro-image' alt='' />
            <h6>Sunday • May 17, 2020 • 3:00 PM</h6>
            <h1>Dora & Derek</h1>
            <h6>The Outdoor Art Club in Mill Valley, CA</h6>
          </div>
          <div className='intro-description'>
            You've been invited to our wedding! We found each other in 2016 and since then, we've been through an amazing journey together filled with love, laughter and discovery. Celebrate with us on Sunday, May 17th at 3pm. There will be a reception and dinner, followed by games, cocktails and dancing!
          </div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 60vh;
          }

          .intro-image {
            height: 180px;
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
