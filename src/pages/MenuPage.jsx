import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Title } from "../components/Title";
import menu from "../data/menu.json";

export const MenuPage = () => {
  const [getData, setGetData] = useState([]);

  const getApi = async () => {
    const info = await fetch("http://localhost:6000/platillos");
    const data = await info.json();
    console.log(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="container">
      <Title title="Menu Page" />
      {menu.map((opt) => {
        return (
          <Card
            key={opt.id}
            image={opt.image}
            name={opt.name}
            desc={opt.desc}
            price={opt.price}
            id={opt.id}
          />
        );
      })}
    </div>
  );
};
