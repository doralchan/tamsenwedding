import PropTypes from 'prop-types';
import classNames from 'classnames';

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const sectionClasses = classNames('section', this.props.className);

    return (
      <section className={ sectionClasses }>
        { this.props.children }
      </section>
    )
  }

}

export default Section
