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
            font-size: inherit;
            margin-bottom: 8px;
          }
          .input-textarea {
            height: 80px;
            font-size: inherit;
            padding: 8px 16px;
            line-height: 24px;
            resize: none;
            border: 1px solid var(--color-gray-dark);
          }
          .input-textarea:focus {
            outline: none;
          }
        `}</style>
      </label>
    )
  }

}

export default TextArea
