"use client"
import Head from "next/head";
import styles from "./globals.css"
import {useState} from "react"

const Home = () => {
  const [message, setMessage] = useState("Hello World!");

  const clickMe = () => {
    setMessage(prevMessage => 
      prevMessage === "Hello World!" ? "Welcome to Next.js" : "Hello World!"
    );
  };

  return (
    <div>
      <Head>
        <title>{message}</title>
      </Head>
      <h1>{message}</h1>
      <button onClick={clickMe}>Click me</button>
    </div>
  );
};

export default Home;

