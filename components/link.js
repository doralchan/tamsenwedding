import PropTypes from 'prop-types';
import classNames from 'classnames';

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    linkTo: PropTypes.string
  }

  render() {
    const linkClasses = classNames('link', this.props.className);

    return (
      <a href={ this.props.linkTo } className={ linkClasses } target='_blank' >
        { this.props.children } >
        <style jsx>{`
          .link {
            text-decoration: none;
            font-weight: 400;
            color: var(--color-green-light);
          }
        `}</style>
      </a>
    )
  }

}

export default Link
