import PropTypes from 'prop-types';
import classNames from 'classnames';

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    linkTo: PropTypes.string,
    linkType: PropTypes.oneOf(['text', 'btn'])
  }

  static defaultProps = {
    linkType: 'text'
  }

  render() {
    const linkClasses = classNames('link', this.props.className);
    const btnClasses = classNames('btn', this.props.className);

    return (
      <a href={ this.props.linkTo } className={ this.props.linkType === 'text' ? linkClasses : btnClasses } target='_blank' >
        { this.props.children }
        <style jsx>{`
          .link {
            text-decoration: none;
            font-weight: 400;
            color: var(--color-green-medium);
          }
          .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            font-family: inherit;
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            background-color: var(--color-white);
            color: var(--color-green-dark);
            letter-spacing: 0.1em;
            border: 0;
            text-rendering: optimizeLegibility;
            font-size: 0.9em;
            min-width: 220px;
          }
        `}</style>
      </a>
    )
  }

}

export default Link
