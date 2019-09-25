import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    cta: PropTypes.string.isRequired
  }

  static defaultProps = {
    cta: 'Button'
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
          .btn,
          .btn:after,
          .btn:hover {
            transition: all 0.4s ease-in-out;
          }
          .btn {
            height: 60px;
            font-family: inherit;
            font-weight: 600;
            text-transform: uppercase;
            border: 2px solid var(--color-black-light);
            background-color: var(--color-black-light);
            color: var(--color-white);
            letter-spacing: 0.1em;
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
            font-size: 0.8em;
            min-width: 200px;
            position: relative;
            overflow: hidden;
          }
          .btn:focus {
            outline: none;
          }
          .btn:before,
          .btn:after {
            background-color: var(--color-black);
            content: '';
            position: absolute;
            z-index: -1;
          }
          .btn:hover {
            border-color: var(--color-black);
            cursor: pointer;
            z-index: 2;
          }
          .btn:after {
            height: 100%;
            left: -35%;
            top: 0;
            transform: skew(50deg);
            transition-duration: 0.6s;
            transform-origin: top left;
            width: 0;
          }
          .btn:hover:after {
            height: 100%;
            width: 135%;
          }
        `}</style>
      </button>
    )
  }

}

export default Button
