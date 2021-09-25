import React from "react";
import style from "./Paginate.module.css"

function Pagination({ countriesPerPage, totalCountries, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    i < 10 ? pageNumbers.push("0" + i) : pageNumbers.push(i);
  }

  return (
    <nav className={style.container}> 
      {pageNumbers &&
        pageNumbers.map((el, i) => {
          return <div className={style.subContainer}key={i}><button onClick={() => paginate(el)}>{el}</button></div>;
        })}
    </nav>
  );
}

export default Pagination;