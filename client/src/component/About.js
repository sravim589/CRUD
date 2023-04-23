// FETCHING USING ASYNC AWAIT
import React, { useState, useEffect } from 'react';
// import { Outlet} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function About() {
  const [P, setP] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await axios.get(`https://fakestoreapi.com/products`);
        console.log(result.data);
        setP(result.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])
  return (
    <div className='container'>
      {/* profile */}
      {/* about <br /><Outlet></Outlet> */}
      {P.map((e) =>
        <div className='item'>
          <h4>{e.id} {e.category}</h4>
          <td className='image'><img width={'100px'} height={'100px'} src={e.image} alt="" /></td> <br />
          <td>{e.title}</td><br />
          <button>$ {e.price}</button>
          <div className='show'> Read more...</div>
          <td className='hide'>{e.description}</td>
         
        </div>
      )}
    </div>
  )
}