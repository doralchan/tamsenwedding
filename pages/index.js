import Head from 'next/head';

import Form from '../components/form';
import Banner from '../components/banner';
import Input from '../components/input';
import Radio from '../components/radio';
import TextArea from '../components/textarea';
import Button from '../components/button';

import Intro from './_intro';
import Gallery from './_gallery';
import Travel from './_travel';
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
        <Input type='number' change={ this.handleChange } inputName='guests' labelName='# of Guests' placeholder='0' />
        <TextArea change={ this.handleChange } inputName='diet' labelName='Dietary Restrictions' placeholder='Description' />
        <Button cta='Submit RSVP' />
      </Form>
    )
  }

  render() {
    return (
      <div className='container'>
        <Head>
          <title>Tamsen Wedding</title>
          <link rel="shortcut icon" href="/static/favicon.ico"/>
        </Head>
        { this.renderHoneypot() }
        <div className='container-sections'>
          <Intro />
          <Gallery />
          <div id='RSVP' className='rsvp'>
            <h3>RSVP</h3>
            { !this.state.isHidden ? this.renderForm() : <Banner /> }
          </div>
          <Travel />
          <Registry />
          <Footer />
        </div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600&display=swap');

          :root {
            --color-black: #000000;
            --color-black-light: #252525;
            --color-white: #FFFFFF;

            --color-gray-dark: #BCC5C5;
            --color-gray: #E0E6E0;
            --color-gray-light: #F3F3F3;

            --color-green-dark: #29341B;
            --color-green: #3A442E;
            --color-green-light: #9DB580;

            --color-yellow: #EEBA57;

            --color-coral: #C56241;
            --color-coral-light: #CE6F55;
          }

          @font-face {
            font-family: 'Coniferous';
            src: url('/static/coniferous-med.otf');
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

          h6 {
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          h1, h2, h3, h4, h5 {
            font-family: 'Coniferous', serif;
            font-weight: 500;
            margin: 0;
            line-height: 110%;
          }

          h1 {
            font-size: 4.768em;
          }
          h2 {
            font-size: 3.015em;
          }
          h3 {
            font-size: 2.441em;
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
            margin: 0 auto;
          }

          .container-sections {
            display: grid;
            grid-template-columns: 24px 1fr 24px;
            grid-row-gap: 40px;
            grid-template-areas:
              ". intro ."
              ". gallery ."
              ". travel ."
              ". rsvp ."
              ". registry ."
              "footer footer footer"
            ;
          }

          .rsvp {
            grid-area: rsvp;
            padding-top: 24px;
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
              font-size: 7.96em;
            }
            h2 {
              font-size: 4.768em;
            }
            h3 {
              font-size: 3.015em;
            }
            h4 {
              font-size: 2.441em;
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
                ". travel rsvp ."
                ". registry registry ."
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
