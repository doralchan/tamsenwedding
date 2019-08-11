import Form from '../components/form';
import Input from '../components/input';
import Radio from '../components/radio';
import Checkbox from '../components/checkbox';
import Button from '../components/button';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className=''>
          <h1>RSVP</h1>
          <Form>
            <Input inputName='name' labelName='Full Name' placeholder='Full Name' />
            <Radio inputName='attendance' labelName='RSVP'>
              <Radio.Option value='Happily accepting' inputName='attendance' />
              <Radio.Option value='Regretfully declining' inputName='attendance'/>
            </Radio>
            <Input inputName='guests' labelName='Number of Guests Attending Including Yourself' placeholder='0' />
            <Checkbox inputName='preferences' labelName='Mark Any Special Preferences'>
              <Checkbox.Option value='Vegetarian' />
              <Checkbox.Option value='Vegan' />
            </Checkbox>
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
