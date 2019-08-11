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
            <Input labelName='Full Name' placeholder='Full Name' />
            <Radio labelName='RSVP'>
              <Radio.Option value='Happily accepting' inputName='attendance' />
              <Radio.Option value='Regretfully declining' inputName='attendance'/>
            </Radio>
            <Input labelName='Number of Guests Attending Including Yourself' placeholder='0' />
            <Checkbox labelName='Mark Special Preferences'>
              <Checkbox.Option value='Vegetarian' />
              <Checkbox.Option value='Vegan' />
            </Checkbox>
            <Button cta='Submit' />
          </Form>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            font-size: 16px;
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
