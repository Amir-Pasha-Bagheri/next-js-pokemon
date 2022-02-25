import React from "react";
import capitalizeFirstLetter from "../Captialize-first-letter/capitalizeFirstLetter";
import classes from "../../styles/pokemonInformation.module.css";
/*
name
weight
types [{},{}]
abilities [{}.{}]
moves [{}.{}]
forms [{}.{}]
*/

export default function PokemonInformation({ data, classname }) {
  console.log(data.abilities);
  return (
    <div className={classname}>
      <header title="Pokemon name">
        {capitalizeFirstLetter(data.name)}
        <sub title="Pokemon weight">{data.weight}</sub>
      </header>

      <div className={classes.types}>
        <span className={classes.title_span}>Types :</span>
        {data.types.map((type) => (
          <span key={type.type.name} className={classes.type_span} title="Type">
            {type.type.name}
          </span>
        ))}
      </div>

      <div className={classes.abilities}>
        <span className={classes.title_span}>Abilities :</span>
        {data.abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className={classes.ability_span}
            title="Ability"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>
    </div>
  );
}