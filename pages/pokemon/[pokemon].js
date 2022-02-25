import React from "react";
import PokemonInformation from "../../components/pokemon-information/pokemonInformation";
import SearchPokemon from "../../components/search-pokemon/searchPokemon";
import classes from "../../styles/pokemonInformation.module.css";

export default function ThePokemon({ data }) {
  if (data) {
    if (data.error)
      return <SearchPokemon error={data.error} classname={classes.error} />;
    return <PokemonInformation data={data} classname={classes.information} />;
  }
  return <div className={classes.loading}>Loading . . .</div>;
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [],
  };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`
  );

  // If the entered pokemon is not available //
  let data;
  try {
    data = await response.json();
  } catch {
    data = { error: ` " ${context.params.pokemon} " does not exist` };
  }
  //

  return {
    props: { data: data },
  };
}
