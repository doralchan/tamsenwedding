import PropTypes from 'prop-types';
import classNames from 'classnames';

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    linkTo: PropTypes.string,
    linkType: PropTypes.oneOf(['link-text', 'link-btn'])
  }

  static defaultProps = {
    linkType: 'link-text'
  }

  render() {
    const textClasses = classNames('link-text', this.props.className);
    const btnClasses = classNames('link-btn', this.props.className);

    return (
      <a href={ this.props.linkTo } className={ this.props.linkType === 'link-text' ? textClasses : btnClasses } target='_blank' >
        { this.props.children }
        <style jsx>{`
          .link-text {
            text-decoration: none;
            font-weight: 400;
            color: var(--color-green-medium);
          }
          .link-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            font-family: inherit;
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            border: 2px solid var(--color-green-medium);
            color: var(--color-green-medium);
            letter-spacing: 0.1em;
            text-rendering: optimizeLegibility;
            font-size: 0.9em;
            min-width: 240px;
            box-sizing: border-box;
            margin: 8px;
          }
        `}</style>
      </a>
    )
  }

}

export default Link
