import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import SuperHero from '../../superHero';
import "./SuperHeroMiniCard.css";

function SuperHerosMiniCard(props:{data:SuperHero, key?:number}) {

  return (
    <div className="card mb-4" style={{width: "18rem"}} key={props.data.id}>
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
            </ul>
            <a href={"https://superheros-site.netlify.app/view/"+props.data.id} className="btn btn-primary">
                view
            </a>
        </div>
    </div>
  );
}

export default SuperHerosMiniCard;
