import Form from '../components/form';
import Input from '../components/input';
import Radio from '../components/radio';
import TextArea from '../components/textarea';
import Button from '../components/button';

import Intro from './_intro';
import Gallery from './_gallery';
import Registry from './_registry';
import Footer from './_footer';

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
        <div className='container-sections'>
          <Intro />
          <Gallery />
          <Form submit={ this.handleSubmit } formTitle='RSVP'>
            <Input change={ this.handleChange } inputName='name' labelName='Full Name' placeholder='Full Name' />
            <Radio inputName='attendance' labelName='Attendance'>
              <Radio.Option change={ this.handleChange } value='Joyfully Attending' inputName='attendance' />
              <Radio.Option change={ this.handleChange } value='Regretfully Declining' inputName='attendance'/>
            </Radio>
            <Input change={ this.handleChange } inputName='guests' labelName='# of Guests' placeholder='0' />
            <TextArea change={ this.handleChange } inputName='diet' labelName='Dietary Restrictions' placeholder='Description' />
            <Button cta='Submit RSVP' />
          </Form>
          <Registry />
          <Footer />
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:200,300,600&display=swap');
          :root {
            --color-gray-dark: #BABABA;
            --color-gray-light: #F3F3F3;
            --color-green-dark: #29341B;
            --color-green-light: #9DB580;
            --color-black: #000000;
            --color-white: #FFFFFF;
          }
          body {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 16px;
            color: var(--color-green-dark);
            margin: 0;
            padding: 0;
            height: 100vh;
          }
          h1, h2, h3, h4, h5, h6 {
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          h1, h2, h3, h4, h5 {
            font-family: 'Libre Baskerville', serif;
            font-weight: 300;
            margin: 16px 0;
          }
          h1 {
            font-size: 3.052em;
          }
          h2 {
            font-size: 2.441em;
          }
          h3 {
            font-size: 1.953em;
          }
          h4 {
            font-size: 1.563em;
          }
          h5 {
            font-size: 1.25em;
          }
          h6 {
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container-sections {
            display: grid;
            grid-template-columns: 1fr 4fr 2fr 2fr 1fr;
            grid-row-gap: 100px;
            grid-column-gap: 10px;
            grid-template-areas:
              ". intro intro intro ."
              ". gallery gallery gallery ."
              ". form . registry ."
              "footer footer footer footer footer"
            ;
          }
        `}</style>
      </div>
    )
  }

}

export default Home
