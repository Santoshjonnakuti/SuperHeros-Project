import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import SuperHerosMiniCard from '../SuperHeroMiniCard/SuperHeroMiniCard';

function Home() {

  const [photos, setPhotos] = useState([]);

  const getPhotos = async() => {
    const response = await axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
    setPhotos(response.data);
  }

  const makePhotoCards = () => {
    const array = [];
    for(const photo in photos) {
      array.push(
        <SuperHerosMiniCard data = {photos[photo]} key={parseInt(photo)}/>
      )
    }
    return array;
  }

  useEffect(()=> {
      getPhotos();
  }, []);

  return (
    <div className="App">
        <h1>Super Heros</h1>
        <div className="super-heros-container">
            {makePhotoCards()}
        </div>
    </div>
  );
}

export default Home;
