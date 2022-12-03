import React from "react";
import './game.css'

const Game = ({icon, alt, title, className}) => {
  return <div className="game__container">
		<img src={icon} alt={alt} className={`icon__game ${className}`}  />
		<h2 className='title__game' >{title}</h2>
	</div>;
};

export default Game;
