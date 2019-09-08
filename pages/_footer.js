import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  renderAccomodations() {
    return (
      <div className='travel-block'>
        <h6>Accommodations</h6>
        <div>
          If you're coming in from out of town, beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot tatsoi pea sprouts fava bean collard greens dandelion
        </div>
        <style jsx>{`
          .travel-block {
            grid-column: 2/3;
            grid-row: 3/4;
            margin-right: 24px;
          }
          h6 {
            color: var(--color-white);
            margin-bottom: 8px;
          }
        `}</style>
      </div>
    )
  }

  renderParkingTransportation() {
    return (
      <div className='travel-block'>
        <h6>Parking & Transportation</h6>
        <div>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion
        </div>
        <style jsx>{`
          .travel-block {
            grid-column: 3/4;
            grid-row: 3/4;
            margin-right: 24px;
          }
          h6 {
            color: var(--color-white);
            margin-bottom: 8px;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer-image'>
          <img src='/static/icon_forest.png' alt='' /><img src='/static/icon_forest.png' alt='' />
        </div>
        <div className='footer-content'>
            <h4>Travel Details</h4>
            { this.renderAccomodations() }
            { this.renderParkingTransportation() }
        </div>
        <style jsx>{`
          .footer {
            grid-area: footer;
            text-rendering: optimizeLegibility;
            font-weight: 200;
            color: var(--color-green-light);
          }
          .footer-content {
            display: grid;
            background-color: var(--color-green-dark);
            grid-template-columns: 1fr 4fr 4fr 1fr;
            grid-template-rows: 2fr auto 2fr 3fr;
            grid-gap: 10px;
          }
          .footer h4 {
            color: var(--color-white);
            margin-bottom: 20px;
            grid-column: 2/4;
            grid-row: 2/3;
          }
          .footer-image {
            display: flex;
            width: 100%;
            overflow: hidden;
          }
          .footer-image img {
            width: 70%;
          }
        `}</style>
      </footer>
    )
  }

}

export default Footer
