import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header";
import { addTech } from "../../redux/reducers/technics";
import "./addForm.scss";

const AddForm = () => {
  const techs = useSelector((s) => s.technics.technics);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const onCategoryChanged = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    console.log(category);
  };

  const onCompanyChanged = (e) => {
    setCompany(e.target.value);
    console.log(e.target.value);
    console.log(company);
  };

  const onModelChanged = (e) => {
    setModel(e.target.value);
    console.log(e.target.value);
    console.log(model);
  };

  const onPriceChanged = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
    console.log(price);
  };

  let onAddButtonClick = () => {
    // alert(`${category}, ${company}, ${model}, ${price}`);
    let addingObj = {
      category: category,
      company: company,
      model: model,
      price: price,
    };
    dispatch(addTech(addingObj));
  };

  return (
    <div>
      <Header />
      <form>
        <h2>Add technics</h2>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => onCategoryChanged(e)}
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          onChange={(e) => onCompanyChanged(e)}
        />

        <label htmlFor="model">Model</label>
        <input type="text" name="model" onChange={(e) => onModelChanged(e)} />

        <label htmlFor="price">Price</label>
        <input type="text" name="price" onChange={(e) => onPriceChanged(e)} />

        <button onClick={onAddButtonClick}>Add</button>
      </form>
    </div>
  );
};

export default AddForm;
