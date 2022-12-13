import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
  useEffect(() => {
    //
    console.log('home');

    axios.post(`${process.env.REACT_APP_API_URL}auth/register`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
