import React from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

const About = () => {
  const data = useLoaderData();
  console.log(data);
  return <div className="flex flex-wrap justify-around gap-2 p-3">
  {data.products.map((currEle)=> <Card currEle={currEle} key={currEle.id}/>)}
  </div>;
};

export default About;
