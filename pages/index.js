import Form from '../components/form';
import Input from '../components/input';
import Radio from '../components/radio';
import Button from '../components/button';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", attendance: "", guests: "", preferences: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  renderHoneypot() {
    return (
      <form name='rsvp' netlify netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='text' name='guests' />
      </form>
    )
  }

  render() {
    const { name, attendance, guests, preferences } = this.state;

    return (
      <div className='container'>
        { this.renderHoneypot() }
        <div>
          <h1>Répondez s'il vous plaît</h1>
          <Form submit={ this.handleSubmit }>
            <Input change={ this.handleChange } inputName='name' labelName='Full Name' placeholder='Full Name' />
            <Radio inputName='attendance' labelName='Attendance'>
              <Radio.Option change={ this.handleChange } value='Happily Accepting' inputName='attendance' />
              <Radio.Option change={ this.handleChange } value='Regretfully Declining' inputName='attendance'/>
            </Radio>
            <Input change={ this.handleChange } inputName='guests' labelName='# of Guests Attending' placeholder='0' />
            <Input change={ this.handleChange } inputName='preferences' labelName='# of Vegetarians or Vegans' placeholder='0' />
            <Button cta='Submit' />
          </Form>
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
          body {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 16px;
            margin: 0;
            padding: 0;
            height: 100vh;
          }
          .container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    )
  }

}

export default Home
