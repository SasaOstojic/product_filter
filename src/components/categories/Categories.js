import React from "react";
import "./Categories.css";

//Capitalizing first letter of category name
const capitalize  = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const Categories = ({ categories, categoryItem }) => {
  return (
    <div className="--flex-center">
      {categories.map((cat, index) => {
       return (
        <button key={index} className="btn --btn --btn-secondary" onClick={() => categoryItem(cat)}>{capitalize(cat)}</button>
       ) 
      })}
    </div>
  );
};

export default Categories;
