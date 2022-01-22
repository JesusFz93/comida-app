import React from "react";
import { Title } from "../components/Title";

export const HomePage = () => {
  return (
    <div className="container">
      <Title title="Home Page" />
      <main className="row">
        <article className="col-md-12">
          <p>
            Bienvenidos a la aplicacion donde podras consultar informacion de
            platillos deliciosos
          </p>
          <p>Favor de elegir la opcion dentro de la seccion de menu</p>
        </article>
      </main>
    </div>
  );
};
