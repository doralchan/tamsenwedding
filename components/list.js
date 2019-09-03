import PropTypes from 'prop-types';
import classNames from 'classnames';

class List extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const listClasses = classNames('list', this.props.className);

    return (
      <ul className={ listClasses }>
        { this.props.children }
        <style jsx>{`
          .list {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </ul>
    )
  }

}

List.Item = class List extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const itemClasses = classNames('item', this.props.className);

    return (
      <li className={ itemClasses }>
        { this.props.children }
        <style jsx>{`
          .list-item:before {
            content: '';
          }
        `}</style>
      </li>
    )
  }

}

export default List
