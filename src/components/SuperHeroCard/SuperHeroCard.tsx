import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Card from '../Card/Card';
import "./SuperHeroCard.css";

export default function SuperHeroCard() {
    const history = useHistory();
    const [photos, setPhotos] = useState([]);
  const getSuperHero = async() => {
    const id:number =  parseInt(history.location.pathname.split("/", 3)[2]);
    const response = await axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"+ id +".json");
    setPhotos(photos.concat(response.data));
  }

  const makeSuperHeroCard = () => {
    const array = [];
    for(const photo in photos) {
      array.push(
        <Card data = {photos[photo]} key={parseInt(photo)}/>
      )
    }
    return array;
  }

  useEffect(()=> {
      getSuperHero();
  }, []);
    return (
        <div className="inner-card">
            <div className="super-heros-container" style={{margin:"0px"}}>
                {makeSuperHeroCard()}
            </div>
        </div>
    )
}
