import PropTypes from 'prop-types';
import classNames from 'classnames';

class Intro extends React.Component {
  render() {
    return (
      <header className='intro'>
        <div>
          <h6>Sunday • May 17, 2020 • 3:00 PM</h6>
          <h1>Dora & Derek</h1>
          <h6>The Outdoor Art Club in Mill Valley, CA</h6>
          <div>This is an intro</div>
        </div>
        <style jsx>{`
          .intro {
            grid-area: intro;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 60vh;
          }
        `}</style>
      </header>
    )
  }

}

export default Intro
