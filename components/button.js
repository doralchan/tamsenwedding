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
            font-weight: 500;
            font-size: inherit;
            border: 2px solid var(--color-coral-light);
            background-color: var(--color-coral-light);
            color: var(--color-white);
            text-rendering: optimizeLegibility;
            box-sizing: border-box;
            min-width: 200px;
            position: relative;
            overflow: hidden;
          }
          .btn:focus {
            outline: none;
          }
          .btn:before,
          .btn:after {
            background-color: var(--color-coral);
            content: '';
            position: absolute;
            z-index: -1;
          }
          .btn:hover {
            border-color: var(--color-coral);
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
