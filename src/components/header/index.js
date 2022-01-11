import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/tvs">Телевизоры</Link>
          </li>
          <li>
            <Link to="/refs">Холодильники</Link>
          </li>
          <li>
            <Link to="/cutters">Хренорезки</Link>
          </li>
          <li>
            <Link to="/add">Добавить товар</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
