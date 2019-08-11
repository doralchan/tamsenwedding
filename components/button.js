import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    cta: PropTypes.string.isRequired,
    btnType: PropTypes.oneOf(['primary', 'secondary'])
  }

  static defaultProps = {
    cta: 'Button',
    btnType: 'primary'
  }

  render() {
    const btnClasses = classNames(
      'btn',
      'btn-'+ this.props.btnType,
      this.props.className
    );

    return (
      <button type='submit' className={ btnClasses }>
        { this.props.cta }
        <style jsx>{`
          .btn {
            height: 60px;
            border: 0;
            font-size: inherit;
          }
          .btn:focus {
            outline: none;
          }
          .btn:hover {

          }
          .btn {
            background-color: black;
            color: white;
          }
        `}</style>
      </button>
    )
  }

}

export default Button
