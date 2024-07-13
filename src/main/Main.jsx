import React, { useState } from 'react';

const Main = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='username'
          onInput={(e) => {
            console.log(e.target.value);

            let input = e.target.value;

            setUsername(input);
          }}
        />
        <input
          type='password'
          placeholder='password'
          onInput={(e) => {
            let input = e.target.value;

            setPassword(input);
          }}
        />
      </div>
      <div>
        <h2>your username: {username}</h2>
        <h2>your password: {password}</h2>
      </div>
    </>
  );
};

export default Main;
