import React, { useState } from 'react';

export default function Home() {
  // const [count,setCount]=useState(0);
  const [show,setShow]=useState(true);
  const [apple,setApple]=useState("red")
  
  const change=()=>{
     // setCount(count+1);
    setShow(!show);
    setApple("green");
  }
  return (
    <div>Home <br /> <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde aliquid id accusamus suscipit ducimus beatae numquam, praesentium aliquam alias nesciunt, deleniti tenetur quas in vel totam sint dicta fugit libero rem ullam illo itaque blanditiis? Velit odio totam, voluptatum itaque molestiae error doloremque aliquid dolor veritatis mollitia eligendi nam id provident laudantium officiis sequi debitis? Eius vel provident adipisci explicabo recusandae ab non ipsa molestias ut magnam omnis laborum, ipsum veniam sequi error cumque mollitia animi porro, sunt consectetur pariatur rerum a! Deserunt autem inventore itaque hic quia tempore, est commodi repudiandae possimus, eveniet ut, optio quos iure eligendi!
    </div>
    
  )
}
