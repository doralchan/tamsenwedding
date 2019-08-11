import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    labelName: PropTypes.string
  }

  render() {
    return (
      <div className='checkbox'>
        <div className='checkbox-label'>{ this.props.labelName }</div>
        { this.props.children }
        <style jsx>{`
          .checkbox {
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
          }
          .checkbox-label {
            margin-bottom: 8px;
          }
        `}</style>
      </div>
    )
  }
}

Checkbox.Option = class Option extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    inputName: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool
  }

  render() {
    return (
      <label
        className='checkbox-option'
        htmlFor={ this.props.value }
        >
        <input
          type='checkbox'
          name={ this.props.inputName }
          value={ this.props.value }
          id={ this.props.value }
          className='checkbox-option-input'
          defaultChecked={ this.props.checked }
          />
        <span className='checkbox-option-label'>
          { this.props.value }
        </span>
        <style jsx>{`
          .checkbox-option {
            margin-bottom: 8px;
          }
        `}</style>
      </label>
    )
  }

}

export default Checkbox;
