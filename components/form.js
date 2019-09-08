import PropTypes from 'prop-types';
import classNames from 'classnames';

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    submit: PropTypes.func,
    formTitle: PropTypes.string
  }

  render() {
    const formClasses = classNames('form', this.props.className);

    return (
      <form
        name='rsvp'
        method='POST'
        data-netlify='true'
        onSubmit={ this.props.submit }
        className={ formClasses }
        >
        { this.props.formTitle ? <h4>{ this.props.formTitle }</h4> : null }
        <span className='hidden'>
          <label><input name='bot=field' /></label>
        </span>
        { this.props.children }
        <style jsx>{`
          .form {
            display: flex;
            flex-direction: column;
            grid-area: form;
            margin-bottom: 40px;
          }
          .form h4 {
            margin-bottom: 24px;
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
