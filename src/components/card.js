import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Card = ({ person }) => (
  <a key={person.name} href={person.href} target="_blank">
    <div className="flex items-center gap-x-6">
      <img
        alt=""
        src={useBaseUrl(person.imageURL)}
        className="size-16 rounded-full"
      />
      <div>
        <h3 className="font-semibold tracking-tight mb-2">{person.name}</h3>
        <p className="text-sm/6 font-semibold opacity-70">{person.title}</p>
      </div>
    </div>
  </a>
);

export default Card;
