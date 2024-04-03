
"use client"
import axios from 'axios';

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';


export default function Home() {


  // const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handle(e) {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  ////
  
  function submit(e) {
    e.preventDefault();
    
    
// To navigate programmatically
// router.push('/LoginGoogle/page');

axios.post(
  "https://thehabeshaweb.herokuapp.com/api/auth/login",
      {
        email: data.email,
        password: data.password,
      }
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      // }
    )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
      
      
      
    }
    
  /////
  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/api/auth/facebook", "_self");
  };
  

  return (
    <form method="POST" className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            
            Facebook
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            onChange={(e) => {
              handle(e);
            }}
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
          />
          <input
            onChange={(e) => {
              handle(e);
            }}
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
          />
          <button onClick={(e) => submit(e)} className="submit">
          <Link href="/LoginGoogle/page">
    login
  </Link>
          </button>
        </div>
      </div>
    </form>
  );
}
