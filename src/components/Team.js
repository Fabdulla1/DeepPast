import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const team = [
  {
    name: "Adam Anderson",
    title: "Challenge Creator",
    imageURL:
      "https://media.licdn.com/dms/image/v2/C5103AQFw7JVqH6n5wQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517055079322?e=1755734400&v=beta&t=uSB_7vGs3QZgrx6zK0FdqSOlSfGSB3gIzwANpa_l9Js",
    href: "https://example.com/",
  },
  {
    name: "James Dinh",
    title: "Web Developer",
    imageURL:
      "https://media.licdn.com/dms/image/v2/D5603AQF0jh-pEkQzog/profile-displayphoto-shrink_200_200/B56ZaFU2PEHAAY-/0/1745993557211?e=1755734400&v=beta&t=PNuO_ryPIBT_w6IFOTrm_lD_YoAPs8BkEOeQEKD_494",
    href: "https://jamesdinh.me/",
  },
  {
    name: "Farhan Abdulla",
    title: "Data Scientist & ML Engineer",
    imageURL:
      "https://media.licdn.com/dms/image/v2/D5603AQFKVvptBG1_0w/profile-displayphoto-shrink_200_200/B56ZcY4lLCHoAk-/0/1748469175389?e=1756339200&v=beta&t=PAZ1dZcaFAUJ_xJq9aD5f_8hPDdKOkpZ_uTKnUGvdVs",
    href: "https://www.linkedin.com/in/farhan-abdulla/",
  },
];

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

const TeamList = () => {
  return (
    <div className="py-12">
      <div className="mx-auto">
        <ul role="list" className="flex flex-wrap w-full gap-x-20 gap-y-10">
          {team.map((person) => (
            <Card person={person} key={person.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Team() {
  return <TeamList />;
}
