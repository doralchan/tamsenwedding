import PropTypes from 'prop-types';
import classNames from 'classnames';

class Block extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    blockTitle: PropTypes.string
  }

  render() {
    const blockClasses = classNames('block', this.props.className);

    return (
      <div href={ this.props.linkTo } className={ blockClasses } >
        <h6>{ this.props.blockTitle}</h6>
        <div>{ this.props.children }</div>
        <style jsx>{`
          .block {
            margin-bottom: 32px;
            max-width: 90%;
          }
        `}</style>
      </div>
    )
  }

}

export default Block
