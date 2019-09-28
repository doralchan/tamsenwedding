import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextArea extends React.Component {
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
        <textarea
          type='text'
          className='input-textarea'
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
          .input-textarea {
            height: 100px;
            font-size: inherit;
            padding: 10px 16px;
            line-height: 24px;
            border-style: solid;
            border-radius: 0;
            box-shadow: none !important;
            resize: none;
            border: 2px solid var(--color-gray);
            outline: none;
          }
          .input-textarea::placeholder {
            font-weight: 200;
          }
          .input-textarea:focus {
            border-color: var(--color-green-light);
          }
        `}</style>
      </label>
    )
  }

}

export default TextArea
