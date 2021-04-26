import React from "react";
import dayjs from "dayjs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filters(props) {
  const {
    from,
    handleDateFrom,
    to,
    handleDateTo,
    country,
    handleCountry,
    price,
    handlePrice,
    size,
    handleSize,
    handleClear
  } = props;

  const todayDate = new Date();
  const today = dayjs(todayDate).format("YYYY-MM-DD");

  return (
    <div className="filter-container">
      <div className="filter-select">
        <label>Desde:</label>
        <input
          className="input-filters"
          type="date"
          value={from}
          onChange={handleDateFrom}
          autoComplete="off"
          min={today}
        />
      </div>
      <div className="filter-select">
        <label>Hasta:</label>
        <input
          className="input-filters"
          type="date"
          value={to}
          onChange={handleDateTo}
          autoComplete="off"
          min={from}
        />
      </div>
      <div className="filter-select">
        <label>País:</label>
        <select
          className="input-filters"
          onChange={handleCountry}
          value={country}
        >
          <option value="Todos los paises">Todos los paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <div className="filter-select">
        <label>Precio:</label>
        <select className="input-filters" onChange={handlePrice} value={price}>
          <option value="Todos los precios">Todos los precios</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </select>
      </div>
      <div className="filter-select">
        <label>Tamaño:</label>
        <select className="input-filters" onChange={handleSize} value={size}>
          <option value="Todos los tamaños">Todos los tamaños</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      <div className="filter-select">
        <label className="text-hidden">.</label>
        <button className="filter-btn" onClick={handleClear}>
          <FontAwesomeIcon icon={faTrash} />
          &nbsp;&nbsp;LIMPIAR
        </button>
      </div>
    </div>
  );
}
