import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../components/block';
import List from '../components/list';
import Link from '../components/link';

class Registry extends React.Component {
  render() {
    return (
      <section id='registry' className='registry'>
        <h3>Registries</h3>
        <div className='registry-cta'>
          <Link linkType='link-btn' linkTo='https://www.zola.com/registry/derekanddora'>
            Browse Zola
          </Link>
          <Link linkType='link-btn' linkTo='https://www.amazon.com/wedding/share/doraderek'>
            Browse Amazon
          </Link>
        </div>
        <style jsx>{`
          .registry {
            grid-area: registry;
            background-color: var(--color-green);
            color: var(--color-white);
            padding: 40px 32px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .registry h3 {
            margin-top: 8px;
            margin-bottom: 8px;
          }

          @media (min-width: 992px) {

            .registry-cta {
              display: flex;
            }

          }

        `}</style>
      </section>
    )
  }

}

export default Registry
