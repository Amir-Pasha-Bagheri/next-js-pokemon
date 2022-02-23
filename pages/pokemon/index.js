import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "../../styles/pokemonCard.module.css";
import PokemonCard from "../../components/card/pokemonCard";

export default function Pokemons(props) {
  const router = useRouter();
  const [offset, setOffset] = useState(parseInt(router.query.limit));
  const [limit, setLimit] = useState(parseInt(router.query.limit));

  useEffect(() => {
    if (!router.query.offset) router.replace("/pokemon?offset=0&limit=20");
  });

  const offsetHandler = (e) => {
    if (e.target.value < 0 || e.target.value === "-" || e.target.value === "")
      e.target.value = 0;
    else if (e.target.value > 100) e.target.value = 100;
    else setOffset(parseInt(e.target.value));
  };

  const limitHandler = (e) => {
    if (e.target.value < 0 || e.target.value === "-" || e.target.value === "")
      e.target.value = 0;
    else if (e.target.value > 100) e.target.value = 100;
    else setLimit(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Pokemons</h1>
      <div className={classes.card_container}>
        {props.data.results.map((pokemon) => (
          <PokemonCard
            className={classes.card}
            key={pokemon.name}
            name={pokemon.name}
          />
        ))}
      </div>
      <Link
        href={`/pokemon?offset=${
          parseInt(router.query.offset) - offset
        }&limit=${limit}`}
      >
        <button
          className={classes.change_cards_button_left}
          disabled={props.data.previous === null ? true : false}
        >
          prev
        </button>
      </Link>
      <Link
        href={`/pokemon?offset=${
          parseInt(router.query.offset) + offset
        }&limit=${limit}`}
      >
        <button
          className={classes.change_cards_button_right}
          disabled={props.data.next === null ? true : false}
        >
          next
        </button>
      </Link>
      <input
        min="0"
        max="100"
        type="number"
        className={classes.offset_input}
        placeholder="Enter your offset"
        onChange={offsetHandler}
        value={offset}
        title="Select offset"
      ></input>
      <input
        min="0"
        max="100"
        type="number"
        className={classes.limit_input}
        placeholder="Enter your Limit"
        onChange={limitHandler}
        value={limit}
        title="Select limit"
      ></input>
    </div>
  );
}

// getServerSideProps ==> when you your data changes multiple time in a second
// and changes a lot , or when you need to work with request in backend like authentication
// you can access to backend with passing "context" as a param in () => context.req etc...

// getStaticPaths ==> always use with GSP and return an array wich called "paths" and
// for each query we use one object{} and also return a boolean wich called
// "fallback" and when it is false , we mean if there is anything in url which is not equal
// with the values in paths array then return 404

// getStaticProps ==> when data does not changes a lot and u dont need access in backend

export async function getServerSideProps(context) {
  const offset = context.query.offset;
  const limit = context.query.limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
