import React from 'react';
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import Button from '../../components/button/Button'

function Home() {
    return (
      <div className="Home">
        <Hero/>
        <Info/>
        <Button/>
      </div>
    );
  }
  
  export default Home;