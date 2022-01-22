import React from "react";

export const Title = ({ title }) => {
  return (
    <header className="row">
      <article className="col-md-12">
        <h1 className="pt-3">{title}</h1>
      </article>
    </header>
  );
};
