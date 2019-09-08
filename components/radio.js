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
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .radio-options {

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
            cursor: pointer;
            user-select: none;
            flex: 1;
            margin: 8px 0;
          }
          .radio-option-input {
            display: none;
          }
          .radio-option-input + span {
            display: flex;
            flex-direction: column;
            position: relative;
            padding-left: 24px;
            line-height: 24px;
          }
          .radio-option-input + span:before {
            content: '';
            display: block;
            position: absolute;
            top: 4px;
            left: 0;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            border: 1px solid var(--color-gray-dark);
            background: var(--color-white);
          }
          .radio-option-input + span:after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: var(--color-green-dark);
            position: absolute;
            border-radius: 50%;
            top: 8px;
            left: 4px;
            opacity: 0;
            transform: scale(0,0);
            transition: all 100ms ease-in-out;
          }
          .radio-option-input:checked + span:after {
            opacity: 1;
            transform: scale(1,1);
          }
        `}</style>
      </label>
    )
  }

}

export default Radio;
