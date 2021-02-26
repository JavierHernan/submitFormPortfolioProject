import React, { Component, setState } from 'react';
import './Form.css';
import FormErrors from './FormErrors';

class Form extends Component {
    //state constructor
    constructor (props) {
        super(props);
        this.state = {
            //state to be updated
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            //validation
            formErrors: {email: '', password: ''},
            //boolean properties for validation
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
      }

      //handler
      handleUserInput (e) {
        const name = e.target.name; //access name property of onChange event
        const value = e.target.value; //access value property of onChange event
        //below is where name is where state is established, and function that updates state
        //and where validateField() is called
        this.setState({[name]: value},
            () => {this.validateField(name, value)});
      }

      //validation function logic
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
        //fieldName case 'firstName'
          case 'firstName':
            //is first name entered?
            firstNameValid = value.length > 0;
            fieldValidationErrors.firstName = firstNameValid ? '' : 'enter your first name';
            break;

        //fieldName case 'lastName'
          case 'lastName':
            //is first name entered?
            lastNameValid = value.length > 0;
            fieldValidationErrors.lastName = lastNameValid ? '' : 'enter your last name';
            break;

        //fieldName case 'email'
          case 'email':
            // does email exist?
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
            fieldValidationErrors.email = emailValid ? '' : 'email is invalid'; //if email property of formErrors equals emailValid, print nothing, else "is invalid"
            break;
        //fieldName case 'password'
          case 'password':
            //does password meet desired length?
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': 'password is too short';
            break;
          default:
            break;
        }
        //this.setState updates formErrors, field ValidityState, and passes validateForm callback to set value of formValid
        this.setState({formErrors: fieldValidationErrors,
                        firstNameValid: firstNameValid,
                        lastNameValid: lastNameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.passwordValid});
      }

      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    render () {
        return (
            <form className='demoForm'>
            <h2>Sign up</h2>
            <div className='form-group'>
            {/* ${this.errorClass(this.state.formErrors.firstName)} */}
                <label htmlFor='firstName'>First Name</label>
                <input type='text' 
                className='form-control'
                name='firstName' 
                //reads info in input field
                value={this.state.firstName} 
                // detects change of input field then calls handler
                onChange={(event) => this.handleUserInput(event)} 
                />
            </div>

            <div className='form-group'>
            {/* ${this.errorClass(this.state.formErrors.lastName)} */}
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' 
                className='form-control'
                name='lastName' 
                //reads info in input field
                value={this.state.lastName} 
                // detects change of input field then calls handler
                onChange={(event) => this.handleUserInput(event)} 
                />
            </div>
            
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor='email'>Email address</label>
                <input type='email' 
                className='form-control'
                name='email' 
                //reads info in input field
                value={this.state.email} 
                // detects change of input field then calls handler
                onChange={(event) => this.handleUserInput(event)} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <label htmlFor='password'>Password</label>
                <input type='password' 
                className='form-control'
                name='password' 
                //reads info in input field
                value={this.state.password} 
                // detects change of input field then calls handler
                onChange={(event) => this.handleUserInput(event)} />
            </div>
            {/* Error Diplay */}
            <div className='panel panel-default'>
                <FormErrors formErrors={this.state.formErrors} />
            </div>
            {/* Sign up Button */}
            <button type='submit' 
            className='btn btn-primary' 
            disabled={!this.state.formValid}>
                Sign up
            </button>
            </form>
        )
    }
}
export default Form;