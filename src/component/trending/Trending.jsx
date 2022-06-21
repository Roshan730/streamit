/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Home from "../homes/Home";
import "./trending.css";
import { trending } from "../../DummyData";

function Trending() {
  const [items, setItems] = useState(trending);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
}

export default Trending;
