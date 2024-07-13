import React, { useState } from 'react';

const Main = () => {
  //! variant 1 start [<
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //! variant 1 end >]

  //! variant 2 start [<

  const [data, setData] = useState({
    username2: '',
    password2: '',
  });

  const handleinputvalue = (e) => {
    let input = e.target.value;
    setData(input);
  };

  //! variant 2 end>]

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

      {/* ! variant 2 start [< */}

      <div>
        <label>
          Email:
          <input
            type='email'
            name='Email'
            placeholder='.................dze@gmail.com'
            onInput={handleinputvalue}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type='password'
            name='Password'
            placeholder='password'
            onInput={handleinputvalue}
          />
        </label>
      </div>

      <div>
        <h2>your username: {data.username2}</h2>
        <h2>your password: {data.password2}</h2>
      </div>

      {/* ! variant 2 end >] */}
    </>
  );
};

export default Main;
