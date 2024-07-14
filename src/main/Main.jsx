import React, { useState } from 'react';

const Main = () => {
  //! variant 1 start [<
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //! variant 1 end >]

  return (
    <>
      <div>
        {/* variant 1 start [< */}
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
            console.log(e.target.value);

            let input = e.target.value;

            setPassword(input);
          }}
        />
      </div>
      <div>
        <h2>your username: {username}</h2>
        <h2>your password: {password}</h2>
      </div>
      {/* ! variant 1 end>] */}
    </>
  );
};

export default Main;
