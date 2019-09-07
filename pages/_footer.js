import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  renderAccomodations() {
    return (
      <div>
        <h6>Accommodations</h6>
        <div>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion
        </div>
      </div>
    )
  }

  renderParkingTransportation() {
    return (
      <div>
        <h6>Parking & Transportation</h6>
        <div>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion
        </div>
      </div>
    )
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-content-travel'>
            <h4>Travel Details</h4>
            { this.renderAccomodations() }
            { this.renderParkingTransportation() }
          </div>
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            background-color: var(--color-green-dark);
            min-height: 60vh;
            text-rendering: optimizeLegibility;
            color: var(--color-green-light);
          }
          .footer-content {
            display: grid;
            grid-template-columns: 1fr 4fr 2fr 2fr 1fr;
            grid-template-rows: 1fr 2fr 1fr;
            grid-gap: 10px;
          }
          .footer-content-travel {
            grid-column: 2/3;
            grid-row: 2/3;
          }
          .footer-content-travel h4 {
            color: var(--color-white);
          }
        `}</style>
      </footer>
    )
  }

}

export default Footer
