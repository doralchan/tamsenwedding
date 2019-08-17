import PropTypes from 'prop-types';
import classNames from 'classnames';

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    submit: PropTypes.func
  }

  render() {
    const formClasses = classNames('form', this.props.className);

    return (
      <form
        name='rsvp'
        method='POST'
        onSubmit={ this.props.submit }
        className={ formClasses }
        >
        { this.props.children }
        <style jsx>{`
          .form {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin-bottom: 48px;
          }
          .hidden {
            display: none;
          }
        `}</style>
      </form>
    )
  }

}

export default Form
