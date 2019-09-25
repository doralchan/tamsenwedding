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
            font-family: inherit;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border: 0;
            text-rendering: optimizeLegibility;
            font-size: 0.9em;
            min-width: 200px;
          }
          .btn:focus {
            outline: none;
          }
          .btn:hover {
            cursor: pointer;
          }
          .btn-primary {
            background-color: var(--color-black);
            color: var(--color-white);
          }
          .btn-secondary {
            background-color: var(--color-white);
            color: var(--color-green-dark);
          }
        `}</style>
      </button>
    )
  }

}

export default Button
