import React from "react";
import './game.css'

const Game = ({href, icon, alt, title, className}) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="game__container">
		<img src={icon} alt={alt} className={`icon__game ${className}`}  />
		<h2 className='title__game' >{title}</h2>
	</a>;
};

export default Game;
