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
          <Link linkType='link-btn' linkTo='https://www.heathceramics.com/apps/giftregistry/registry/86295?shared_url=true'>
            Browse Heath
          </Link>
        </div>
        <style jsx>{`
          .registry {
            grid-area: registry;
            background-color: var(--color-green);
            color: var(--color-white);
            padding: 40px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 4px;
          }

          .registry h3 {
            margin-top: 4px;
            margin-bottom: 16px;
          }

          .registry-cta {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (min-width: 992px) {

            .registry-cta {
              flex-direction: row;
              justify-content: center;
            }

          }

        `}</style>
      </section>
    )
  }

}

export default Registry
