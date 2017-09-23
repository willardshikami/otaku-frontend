import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    error: {}
  }
  
  onChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    }); 

  render() {      
    const { data } = this.state;
    
    return (
      <Form>
        {/* email input */}
        <Form.Field>
          <label htmlFor="email">email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="johndoe@example.com" 
            value={data.email}
            onChange={this.onChange}
            />
        </Form.Field>

        {/* email input */}
        <Form.Field>
          <label htmlFor="password">password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Type in your password" 
            value={data.password}
            onChange={this.onChange}
            />
        </Form.Field>

        {/* submit button */}
        <Button>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
