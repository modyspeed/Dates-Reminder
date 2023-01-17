import { Title } from "./components/Title";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import React, { useState } from "react";
import { Reminder } from "./components/Reminder";
import "./index.css";
export const App = () => {
  const [data, setData] = useState(Reminder);
  const clearData = () => {
    setData([]);
  };
  const showData = () => {
    setData(Reminder);
  };
  return (
    <>
      <h1 className=" text-center my-4">مذكرة المواعيد</h1>
      <Title data={data} />
      <Body data={data} />
      <Footer clearData={clearData} showData={showData} />
    </>
  );
};
