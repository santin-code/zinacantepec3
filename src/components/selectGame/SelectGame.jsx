import React from "react";
import "./select-game.css";
import Game from "../game/Game";
import iconFree from '../../images/iconFree.png'
import iconCallOfDuty from '../../images/CallOfDuty.jpg'
import iconLeagueOfLegends from '../../images/LeagueofLegends.png'

const SelectGame = () => {
  return (
    <>
      <div className="select__game__container">
        <Game icon={iconFree} alt='icon Free Fire' title='Free Fire' />
        <Game icon={iconCallOfDuty} alt='icon Free Fire' title='Call of Duty: Mobile' className='border__game__image' />
        <Game icon={iconLeagueOfLegends} alt='icon Free Fire' title='League of Legends (Latinoamérica)' className='border__game__image' />
      </div>
    </>
  );
};

export default SelectGame;
