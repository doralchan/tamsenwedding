import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from '../components/section';

class Intro extends React.Component {
  render() {
    return (
      <Section className='intro'>
        <h6>Sunday • May 17, 2020 • 3:00 PM</h6>
        <h1>Dora & Derek</h1>
        <h6>The Outdoor Art Club in Mill Valley, CA</h6>
      </Section>
    )
  }

}

export default Intro
