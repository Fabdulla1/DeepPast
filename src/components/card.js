import React from "react";

const Card = ({ item }) => (
  <div>
    <a className="hover:no-underline inline-block fit-content" href={item.href}>
      <h3 className="mb-0 text-xl font-medium transition-opacity duration-200 hover:opacity-70">
        {item.name}&nbsp;&nbsp;
        <span className="opacity-70">{item.title}</span>
      </h3>
    </a>
  </div>
);

export default Card;
