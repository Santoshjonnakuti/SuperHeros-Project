import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import SuperHero from '../../superHero';
import "./Card.css";

function Card(props:{data:SuperHero, key?:number}) {

  return (
    <div className="card mb-4" style={{minWidth: "18rem"}} key={props.data.id}>
        <img src={props.data.images.lg} className="card-img-top" alt={props.data.name} />
        <div className="card-body">
            <h5 className="card-title">
                {props.data.name}
            </h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Name
                        </p>
                        <p>
                            {props.data.biography.fullName ? props.data.biography.fullName : props.data.name}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Gender
                        </p>
                        <p>
                            {props.data.appearance.gender ? props.data.appearance.gender : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Race
                        </p>
                        <p>
                            {props.data.appearance.race ? props.data.appearance.race : "None"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item" />
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Intelligence
                        </p>
                        <p>
                            {props.data.powerstats.intelligence ? props.data.powerstats.intelligence : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Strength
                        </p>
                        <p>
                            {props.data.powerstats.strength ? props.data.powerstats.strength : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Speed
                        </p>
                        <p>
                            {props.data.powerstats.speed ? props.data.powerstats.speed : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item" />
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Durability
                        </p>
                        <p>
                            {props.data.powerstats.durability ? props.data.powerstats.durability : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Power
                        </p>
                        <p>
                            {props.data.powerstats.power ? props.data.powerstats.power : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Combat
                        </p>
                        <p>
                            {props.data.powerstats.combat ? props.data.powerstats.combat : "0"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item" />
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Height
                        </p>
                        <p>
                            {props.data.appearance.height[1] ? props.data.appearance.height[1] : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Weight
                        </p>
                        <p>
                            {props.data.appearance.weight[1] ? props.data.appearance.weight[1] : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Occupation
                        </p>
                        <p>
                            {props.data.work.occupation ? props.data.work.occupation : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item" />
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Place of Birth
                        </p>
                        <p>
                            {props.data.biography.placeOfBirth ? props.data.biography.placeOfBirth : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            First Appearance
                        </p>
                        <p>
                            {props.data.biography.firstAppearance ? props.data.biography.firstAppearance : "Unknown"}
                        </p>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="d-flex">
                        <p className="list-header">
                            Publisher
                        </p>
                        <p>
                            {props.data.biography.publisher ? props.data.biography.publisher : "Unknown"}
                        </p>
                    </div>
                </li>
            </ul>
            <a href={"https://upbeat-bell-e61a9b.netlify.app/"} className="btn btn-primary">
                Back
            </a>
        </div>
    </div>
  );
}

export default Card;
