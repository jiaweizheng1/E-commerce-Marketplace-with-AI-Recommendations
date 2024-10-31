import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <video
          className="home__video"
          src="https://m.media-amazon.com/images/I/A1M8yGfFGHL.mp4"
          alt="Amazon Merch Video"
          autoPlay
          muted
        />
        <div className="home__gradient" />
      </div>
    </div>
  );
}

export default Home;
