import React, { useState } from 'react';

const SectionInp = () => {
  const [data, setData] = useState({
    username2: '',
    password2: '',
  });

  return (
    <>
      <div>
        <input
          type='text'
          value={data.username2}
          onChange={(e) => {
            setData({ ...data, username2: e.target.value });
          }}
        />
        <input
          type='password'
          value={data.password2}
          onChange={(e) => {
            setData({ ...data, password2: e.target.value });
          }}
        />
      </div>

      <div>
        <h2>your username: {data.username2}</h2>
        <h2>your password: {data.password2}</h2>
      </div>
    </>
  );
};

export default SectionInp;
