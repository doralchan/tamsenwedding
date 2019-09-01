import Form from '../components/form';
import Input from '../components/input';
import Radio from '../components/radio';
import TextArea from '../components/textarea';
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
      <form name='rsvp' netlify='true' netlify-honeypot='bot-field' hidden>
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
          <Form submit={ this.handleSubmit }>
            <Input change={ this.handleChange } inputName='name' labelName='Full Name' placeholder='Full Name' />
            <Radio inputName='attendance' labelName='Attendance'>
              <Radio.Option change={ this.handleChange } value='Joyfully Accepting' inputName='attendance' />
              <Radio.Option change={ this.handleChange } value='Regretfully Declining' inputName='attendance'/>
            </Radio>
            <Input change={ this.handleChange } inputName='guests' labelName='# of Guests' placeholder='0' />
            <TextArea change={ this.handleChange } labelName='Dietary Restrictions' />
            <Button cta='Submit RSVP' />
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
          :root {
            --color-gray-dark: #BABABA;
            --color-gray-light: #F3F3F3;
            --color-green-dark: #29341B;
            --color-green-light: #9DB580;
            --color-black: #000000;
            --color-white: #FFFFFF;
          }
        `}</style>
      </div>
    )
  }

}

export default Home
