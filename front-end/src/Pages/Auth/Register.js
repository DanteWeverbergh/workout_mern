import React from 'react';
import Input from '../../Components/Forms/Input';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    //
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <Input type={'text'} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Register;
