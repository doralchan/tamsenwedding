import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-content'>
          <h4>Travel Details</h4>
          <div>
            <h6>Accommodations</h6>
            <div>
              Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion
            </div>
          </div>
          <div className='margin-bottom-24px'>
            <h6>Parking & Transportation</h6>
            <div>
              Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion
            </div>
          </div>
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            display: grid;
            grid-template-columns: 1fr 8fr 4fr 1fr;
            background-color: var(--color-green-dark);
            height: 60vh;
            text-rendering: optimizeLegibility;
            color: var(--color-green-light);
          }
          .footer h4,
          .footer h6 {
            color: var(--color-white);
          }
          .footer-content {
            grid-column: 2/3;
          }
        `}</style>
      </footer>
    )
  }

}

export default Footer
