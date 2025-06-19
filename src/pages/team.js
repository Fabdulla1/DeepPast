import React from "react";
import Layout from "@theme/Layout";
import Card from "../components/card";

const team = [
  {
    name: "Adam Anderson",
    title: "Challenge Creator",
    href: "https://example.com/",
  },
  {
    name: "James Dinh",
    title: "Web Developer",
    href: "https://jamesdinh.me/",
  },
  {
    name: "Farhan Abdulla",
    title: "Data Scientist & ML Engineer",
    href: "https://www.linkedin.com/in/farhan-abdulla/",
  },
  {
    name: "Ishan",
    title: "Research Fellow",
    href: "https://example.com/",
  },
  {
    name: "Taha",
    title: "Research Fellow",
    href: "https://example.com/",
  },
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {team.map((member, index) => (
        <Card key={index} item={member} />
      ))}
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
