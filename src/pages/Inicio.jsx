import React from "react";
import Slide from "../components/Slide";
import SelectGame from "../components/selectGame/SelectGame";
import "./inicio.css";

const Inicio = () => {
  return (
    <div>
      <Slide />

      <div className="select__game__div__text">
        <div className="game__div__text">Seleccionar juego a cargar</div>
        <div className="div__line__container">
          <div className="div__line"></div>
        </div>
      </div>
      <SelectGame />
    </div>
  );
};

export default Inicio;
