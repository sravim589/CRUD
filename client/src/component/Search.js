import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [state, setState] = useState();
  const [info, setInfo] = useState([]);
  const [button, setButton] = useState();

  useEffect(() => {
    let fetch = async () => {
      try {
        let data = await axios.get(`https://fakestoreapi.com/products/${button}`)
        console.log(data);
        setInfo(data.data);
        console.log(info);
      }
      catch (err) {
        console.log(err);
      }
    }
    if (state >= 1) {
      fetch();
    }
    // console.log("api called");
    return () => {
      console.log("clean up");
      setInfo('');
    }
  }, [button])

  //after Search button clicked data fetched
  const change = () => {
    console.log(state);
    setButton(state);
  }

  return (
    <div>{/* use controlled component */}
      <br />
      Enter any number from 1 to 100 <br />
      <br />
      <input type="text" name="" value={state || ''} onChange={(e) => setState(e.target.value)} />
      <button onClick={change}>Search</button><br />

      {info.title} <br />
      {info.body}
      {info.category}
      <img width={'100px'} height={'100px'} src={info.image} alt="" />
    </div>
  )
}
