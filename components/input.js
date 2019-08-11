import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends React.Component {
  static propTypes = {
    labelName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputName: PropTypes.string,
    typeName: PropTypes.string
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
          required
        />
        <style jsx>{`
          .input {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;
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
