"use client"
import Head from "next/head";
import react from "react";
import styles from "./globals.css"
import {useState} from "react"
import LearnMore from "./Components/page";

const Home = () => {
  const [message, setMessage] = useState("Hello World!");

  const clickMe = () => {
    setMessage(prevMessage => 
       prevMessage === "Hello World!" ? "Welcome to Next.js!" : "Hello World!"
  );
  };

  return (
    <div>
      <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{message}</title>
      </Head>
      <h1 id="hello-world">{message}</h1>
      <button onClick={clickMe}><b>Click me</b></button>
      <LearnMore/>
      <br/>
      <p className="typing-effect">
         Developed by GIAIC senior student:{" "}
         <b>
           <i>AREEBA BANO</i>
         </b>
       </p>
    </div>
  );
};

export default Home;


