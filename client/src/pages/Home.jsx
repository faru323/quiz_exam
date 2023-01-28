import React from 'react'
import Background from '../components/section1/Background'
import Explore from '../components/section2/Explore'
import Expert from '../components/section3/Expert'
import Control from '../components/section4/Control'
import Project from '../components/section5/Project'
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="Busicol.com" />
      </Helmet>
      <Background />
      <Explore />
      <Expert />
      <Control />
      <Project />
    </div>
  );
}

export default Home
