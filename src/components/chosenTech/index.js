import React from "react";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import Header from "../header";

const ChosenTech = () => {
  const { techId } = useParams();
  const technics = useSelector((s) => s.technics.technics);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>{technics[techId].category}</div>
      <div>{technics[techId].company}</div>
      <div>{technics[techId].model}</div>
      <div>{technics[techId].price}</div>
      <div>{technics[techId].date}</div>
      <div>{technics[techId].description}</div>
      <button onClick={() => navigate(`/edit/${techId}`)}>
        Go to edit page
      </button>
    </div>
  );
};

export default ChosenTech;
