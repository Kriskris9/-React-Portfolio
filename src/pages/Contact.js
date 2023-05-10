
import React, { useState } from 'react';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all required fields.');
    } else if (emailError) {
      alert('Please enter a valid email address.');
    } else {
      // do something with the form data, e.g. send an email
      alert(`Thank you for your message, ${name}!`);
      setName('');
      setEmail('');
      setMessage('');
      setEmailError(false);
    }
  }

  function isValidEmail(email) {
    // check if the email has a valid format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailError && <span style={{ color: 'red' }}>Please enter a valid email address.</span>}
      </label>
      <label>
        Message:
        <textarea value={message} onChange={event => setMessage(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}