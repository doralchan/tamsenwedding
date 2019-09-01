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
      <div>
        <h1>RSVP</h1>
        <form
          name='rsvp'
          method='POST'
          data-netlify='true'
          onSubmit={ this.props.submit }
          className={ formClasses }
          >
          <span className='hidden'>
            <label><input name='bot=field' /></label>
          </span>
          { this.props.children }
          <style jsx>{`
            .form {
              display: flex;
              flex-direction: column;
              min-width: 500px;
              margin-bottom: 48px;
            }
            .hidden {
              display: none;
            }
          `}</style>
        </form>
      </div>
    )
  }

}

export default Form
