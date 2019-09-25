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
            color: var(--color-green);
          }
          .link-btn,
          .link-btn:after,
          .link-btn:hover {
          	transition: all 0.4s;
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
          	border: 2px solid var(--color-green);
          	color: var(--color-green);
          	letter-spacing: 0.1em;
          	text-rendering: optimizeLegibility;
          	font-size: 0.8em;
          	box-sizing: border-box;
          	margin: 8px;
          	position: relative;
          	overflow: hidden;
          	width: 250px;
          }
          .link-btn:before,
          .link-btn:after {
          	background-color: #1d2513;
          	content: '';
          	position: absolute;
          	z-index: -1;
          }
          .link-btn:hover {
            border-color: #1d2513;
          	color: var(--color-white);
            z-index: 2;
          }
          .link-btn:after {
          	height: 100%;
          	left: -35%;
          	top: 0;
          	transform: skew(50deg);
          	transition-duration: 0.6s;
          	transform-origin: top left;
          	width: 0;
          }
          .link-btn:hover:after {
          	height: 100%;
          	width: 135%;
          }
        `}</style>
      </a>
    )
  }

}

export default Link
