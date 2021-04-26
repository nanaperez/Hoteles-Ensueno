import React from "react";
import dayjs from "dayjs";

export default function ResultInfo(props) {
  const { from, to, country, price, size } = props;

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let dateFromFormat = dayjs(from).format(`YYYY-M-DD`);
  let date1 = new Date(dateFromFormat);
  let dateFromSelected = date1.toLocaleDateString("es-ES", options);
  let dateToFormat = dayjs(to).format(`YYYY-M-DD`);
  let date2 = new Date(dateToFormat);
  let dateToSelected = date2.toLocaleDateString("es-ES", options);

  const dateInfo = () => {
    if (from !== "" && to !== "") {
      return `Desde el ${dateFromSelected} hasta el ${dateToSelected}`;
    } else {
      return `Cualquier fecha`;
    }
  };

  const countryInfo = () => {
    return country === "Todos los paises"
      ? "Todos los paises"
      : `Ubicado en ${country}`;
  };

  const priceInfo = () => {
    switch (parseInt(price, 10)) {
      case 1:
        return "Precio económico";
      case 2:
        return "Precio accessible";
      case 3:
        return "Precio costoso";
      case 4:
        return "Precio muy costoso";
      default:
        return "Todos los precios";
    }
  };

  const sizeInfo = () => {
    return size === "Todos los tamaños" ? "Todos los tamaños" : `Hotel ${size}`;
  };

  return (
    <div className="results-container">
      <h5 className="results-text">
        {dateInfo()}
        <br />
        {countryInfo()}
        <br />
        {priceInfo()}
        <br />
        {sizeInfo()}
        <br />
      </h5>
    </div>
  );
}
