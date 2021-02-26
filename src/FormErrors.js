import React from 'react';

//stateless functional component aka presentational component that iterates through form validation errors and displays only
const FormErrors = ({formErrors}) =>
// Structure of Error Display
  <div className='formErrors'>
    {/* Object.keys returns an aray of a objects own property names
    Example >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys */}
    {/* Here, Object.keys(formErrors) is returning [email, password] */}
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
          console.log(formErrors) 
          // i think formErrors will return [email, password]
          console.log(formErrors[fieldName]) 
          // i think formErrors[fieldName] will return value of email, value of password
        return (
          // <p key={i}>{fieldName} {formErrors[fieldName]}</p>
          <p key={i}>{formErrors[fieldName]}</p>
          
        )        
      } else {
        return '';
      }
    })}
  </div>

  export default FormErrors;