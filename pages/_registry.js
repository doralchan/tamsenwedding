import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import List from '../components/list';
import Link from '../components/link';

class Registry extends React.Component {
  render() {
    return (
      <section id='registry' className='registry'>
        <img src='/static/icon_zola.svg' alt='' />
        <h3>Registry</h3>
        <Link linkType='btn' linkTo='https://www.zola.com/registry/derekanddora'>Browse Zola</Link>
        <style jsx>{`
          .registry {
            grid-area: registry;
            background-color: var(--color-grue);
            color: var(--color-white);
            padding: 40px 32px 48px 32px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .registry h3 {
            margin: 24px 0;
          }
          .registry img {
            display: block;
            width: 50px;
            margin-top: 8px;
          }
        `}</style>
      </section>
    )
  }

}

export default Registry
