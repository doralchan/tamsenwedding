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
            padding: 0;
            margin: 32px 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
          .item {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            padding-bottom: 8px;
          }
        `}</style>
      </li>
    )
  }

}

export default List
