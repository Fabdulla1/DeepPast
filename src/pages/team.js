import React from "react";
import Layout from "@theme/Layout";
import Card from "../components/card";

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
    imageURL: "/img/docusaurus.png",
    href: "https://www.linkedin.com/in/farhan-abdulla/",
  },
  {
    name: "Ishan",
    title: "Research Fellow",
    imageURL: "/img/docusaurus.png",
    href: "https://example.com/",
  },
  {
    name: "Taha",
    title: "Research Fellow",
    imageURL: "/img/docusaurus.png",
    href: "https://example.com/",
  },
];

const TeamList = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
            Meet the Deep Past Team
          </h2>
          <p className="mt-6 text-lg/8">
            From data scientists to web developers, our team is dedicated to
            unlocking the secrets of ancient stories untold.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {team.map((person) => (
            <Card person={person} key={person.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <Layout>
      <TeamList />
    </Layout>
  );
}
