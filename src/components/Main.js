import React from "react";
import { useSelector } from "react-redux";

import Header from "./header";

function Main() {
  const technics = useSelector((s) => s.technics.technics);

  return (
    <div className="Main">
      <Header />
      <div>
        {technics.map((it, index) => (
          <div key={index}>{it.price}</div>
        ))}
      </div>
    </div>
  );
}

export default Main;
