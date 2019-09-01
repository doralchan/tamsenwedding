import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    labelName: PropTypes.string
  }

  static defaultProps = {
    labelName: 'Label'
  }

  render() {
    return (
      <div className='radio'>
        <div className='radio-label'>{ this.props.labelName }</div>
        <div className='radio-options'>{ this.props.children }</div>
        <style jsx>{`
          .radio {
            margin-bottom: 24px;
          }
          .radio-label {
            margin-bottom: 8px;
          }
          .radio-options {
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}

Radio.Option = class Option extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    inputName: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    change: PropTypes.func
  }

  render() {
    return (
      <label
        className='radio-option'
        htmlFor={ this.props.value }
        >
        <input
          type='radio'
          className='radio-option-input'
          name={ this.props.inputName }
          value={ this.props.value }
          id={ this.props.value }
          defaultChecked={ this.props.checked }
          onChange={ this.props.change }
          />
        <span className='radio-option-label'>
          { this.props.value }
        </span>
        <style jsx>{`
          .radio-option {
            display: flex;
            margin-bottom: 8px;
            flex: 1;
          }
        `}</style>
      </label>
    )
  }

}

export default Radio;
