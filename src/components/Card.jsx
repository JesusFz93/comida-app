import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, id, desc, price }) => {
  return (
    <article className="col-md-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {id} - {name}
          </h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"></p>
          <Link className="btn " to={`/detalleburger/${id}`}>
            <span className="text-success fs-2">Ordenar por {price}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
