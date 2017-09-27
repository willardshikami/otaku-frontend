import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

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

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
  };
  
  validate = data => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "invalid email";
    if(!data.password) errors.password = "Please Type in your Password";
    return errors;
  };

  render() {      
    const { data} = this.state;
    

    return (
      <Form onSubmit={this.onSubmit}>
        
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
          {/* {errors.password && <InlineError text={errors.password}/>} */}
        </Form.Field>

        
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
