import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./main.scss";
import Header from "../header";

function Main() {
  const technics = useSelector((s) => s.technics.technics);
  const navigate = useNavigate();

  return (
    <div className="Main">
      <Header />
      <div className="block">
        {technics.map((it) => (
          <div
            key={it.id}
            className="mainForm"
            onClick={() => navigate(`/techs/${it.id}`)}
          >
            <div>{it.category}</div>
            <div>{it.company}</div>
            <div>{it.model}</div>
            <div>{it.price}$</div>
            <div>{it.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
