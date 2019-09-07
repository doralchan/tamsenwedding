import PropTypes from 'prop-types';
import classNames from 'classnames';

class Intro extends React.Component {
  render() {
    return (
      <header className='intro'>
        <div>
          <div className='intro-header'>
            <h6>Sunday • May 17, 2020 • 3:00 PM</h6>
            <h1>Dora & Derek</h1>
            <h6>The Outdoor Art Club in Mill Valley, CA</h6>
          </div>
          <div className='intro-description'>
            We would like to invite you to our wedding Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion.
          </div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 70vh;
          }
          .intro-header {
            padding-top: 120px;
          }
          .intro-description {
            padding-top: 30px;
            max-width: 700px;
          }
        `}</style>
      </header>
    )
  }

}

export default Intro
