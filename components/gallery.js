import PropTypes from 'prop-types';
import classNames from 'classnames';

class Gallery extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const galleryClasses = classNames('gallery', this.props.className);

    return (
      <div className={ galleryClasses }>
        { this.props.children }
      </div>
    )
  }

}
