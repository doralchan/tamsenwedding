import Form from '../components/form';
import Banner from '../components/banner';
import Input from '../components/input';
import Radio from '../components/radio';
import TextArea from '../components/textarea';
import Button from '../components/button';

import Intro from './_intro';
import Gallery from './_gallery';
import Details from './_details';
import Footer from './_footer';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", attendance: "", guests: "", preferences: "", isHidden: false };
  }

  toggleHidden() {
    this.setState({
      isHidden: this.state.isHidden
    })
  }


  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state })
    })
      .then(() => { this.setState({ isHidden: true })})
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  renderHoneypot() {
    return (
      <form name='rsvp' netlify='true' netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='radio' name='attendance' />
        <input type='text' name='guests' />
        <textarea name='diet' />
      </form>
    )
  }

  renderForm() {
    const { name, attendance, guests, diet } = this.state;

    return (
      <Form submit={ this.handleSubmit }>
        <Input change={ this.handleChange } inputName='name' labelName='Full Name' placeholder='Full Name' />
        <Radio inputName='attendance' labelName='Attendance'>
          <Radio.Option change={ this.handleChange } value='Joyfully attending' inputName='attendance' />
          <Radio.Option change={ this.handleChange } value='Regretfully declining' inputName='attendance'/>
        </Radio>
        <Input change={ this.handleChange } inputName='guests' labelName='# of Guests' placeholder='0' />
        <TextArea change={ this.handleChange } inputName='diet' labelName='Dietary Restrictions' placeholder='Description' />
        <Button cta='Submit RSVP' />
      </Form>
    )
  }

  render() {
    return (
      <div className='container'>
        { this.renderHoneypot() }
        <div className='container-sections'>
          <Intro />
          <Gallery />
          <div className='rsvp'>
            <h3>RSVP</h3>
            { !this.state.isHidden ? this.renderForm() : <Banner /> }
          </div>
          <Details />
          <Footer />
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:200,300,400,600&display=swap');

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
            font-weight: 200;
            font-size: 17px;
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
            margin: 8px 0;
          }

          h1 {
            font-size: 2.281em;
          }
          h2 {
            font-size: 1.953em;
          }
          h3 {
            font-size: 1.563em;
          }
          h4 {
            font-size: 1.25em;
          }
          h5 {
            font-size: 1em;
          }
          h6 {
            font-size: 0.8em;
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
            grid-template-columns: 24px 1fr 24px;
            grid-row-gap: 40px;
            grid-template-areas:
              ". intro ."
              ". gallery ."
              ". details ."
              ". rsvp ."
              "footer footer footer"
            ;
          }

          .rsvp {
            grid-area: rsvp;
          }

          @media (min-width: 768px) and (max-width: 992px) {

            .container-sections {
              grid-template-columns: 48px 1fr 48px;
              grid-row-gap: 80px;
            }

          }

          @media (min-width: 992px) {

            body {
              font-size: 16px;
              font-weight: 300;
            }

            h1 {
              font-size: 4.052em;
            }
            h2 {
              font-size: 2.281em;
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
            }

            .container-sections {
              grid-template-columns: 1fr 3fr 3fr 1fr;
              grid-row-gap: 100px;
              grid-column-gap: 10px;
              grid-template-areas:
                ". intro intro ."
                ". gallery gallery ."
                ". details rsvp ."
                "footer footer footer footer"
              ;
            }

          }
        `}</style>
      </div>
    )
  }

}

export default Home
