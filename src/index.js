import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import Main from "./components/main/Main";
import Televisors from "./components/televisors";
import Refrigetators from "./components/refregirators";
import Cutters from "./components/cutters";
import AddForm from "./components/addForm";
import ChosenTech from "./components/chosenTech";
import ChosenTechEditing from "./components/chosenTechEditing";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="tvs" element={<Televisors />} />
          <Route path="refs" element={<Refrigetators />} />
          <Route path="cutters" element={<Cutters />} />
          <Route path="add" element={<AddForm />} />
          <Route path="/techs/:techId" element={<ChosenTech />} />
          <Route path="/edit/:techId" element={<ChosenTechEditing />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
