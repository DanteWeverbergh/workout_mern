import React, { useState } from 'react';
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai';

function Register() {
  //states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_API_URL);

    const registerData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(registerData);
  };

  return (
    <div className="register">
      <h1> Register</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form__input">
          <input
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="register__form__input"
            placeholder="Firstname"
          />
        </div>

        <div className="register__form__input">
          <input
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className="register__form__input"
            placeholder="Lastname"
          />
        </div>
        <div className="register__form__input">
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="register__form__input"
            placeholder="email"
            type="email"
          />
        </div>
        <div className="register__form__input password">
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="register__form__input"
            placeholder="Password"
            type={showPassword ? 'password' : 'text'}
          />
          {showPassword ? (
            <AiTwotoneEye
              className="password__icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <AiTwotoneEyeInvisible
              className="password__icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
