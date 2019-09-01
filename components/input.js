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
            font-size: inherit;
            margin-bottom: 8px;
          }
          .input-text {
            height: 50px;
            font-size: inherit;
            padding: 0 16px;
            border: 1px solid var(--color-gray-dark);
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
