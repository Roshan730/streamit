/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Homes from "../component/homes/Homes";
import Trending from "../component/trending/Trending";
import Upcomming from "../component/upcomming/Upcomming";
import { latest, recommended, upcome } from "../DummyData";

export default function HomePage() {
  const [items, setItems] = useState(upcome);
  const [late, setLate] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <Upcomming items={late} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
    </>
  );
}
