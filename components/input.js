import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends React.Component {
  static propTypes = {
    labelName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputName: PropTypes.string,
    typeName: PropTypes.string,
    change: PropTypes.func
  }

  static defaultProps = {
    labelName: 'Label',
    placeholder: 'Field'
  }

  render() {
    return (
      <label className='input'>
        <span className='input-label'>{ this.props.labelName }</span>
        <input
          type='text'
          className='input-text'
          name={ this.props.inputName }
          placeholder={ this.props.placeholder }
          value={ this.props.value }
          onChange={ this.props.change }
          required
        />
        <style jsx>{`
          .input {
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
            flex: 1;
          }
          .input-label {
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .input-text {
            height: 50px;
            font-size: inherit;
            padding: 0 16px;
            border-style: solid;
            border-radius: 0;
            border: 2px solid var(--color-gray-medium);
            outline: none;
          }
          .input-text::placeholder {
            font-weight: 200;
          }
          .input-text:focus {
            border-color: var(--color-green-medium);
          }
          .input-text:focus {
            outline: none;
          }
        `}</style>
      </label>
    )
  }

}

export default Input
