// elementsList.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./elementsList.css";
import Loader from "../spinner/Loader";

const Elements = ({ elementsData }) => {  // Change prop name to elementsData
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSearch = () => {
    const results = searchTerm
      ? elementsData.filter(
          (element) =>
            element.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            element.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : elementsData;

    return results;
  };

  return (
    <section className="elements">
      {loading ? <Loader /> : null}
      <div className="search__part">
        <label htmlFor="searchTerm"></label>
        <input
          className="search"
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Type"
        />
      </div>
      <div className="elements_list">
        {handleSearch().map((element) => {
          const imagePath = element.imgSrc;
          console.log('Image Source:', imagePath);
          return (
            <div className="elements__part" key={element.id}>
              <img
                className="elements__image"
                src={imagePath}
                alt={element.type}
              />
              <h3 className="elements__type">{element.type}</h3>
              <p className="elements__description">{element.description}</p>
              <p className="elements__brand">{element.brand}</p>
              <p className="elements__price">{element.price} $</p>
              <NavLink
                className="elements__button"
                exact
                to={`/Catalog/${element.id}`}
              >
                View more
              </NavLink>
            </div>
          );
        })}
        {searchTerm && handleSearch().length === 0 && (
          <p>No matching elements found</p>
        )}
      </div>
    </section>
  );
};

export default Elements;