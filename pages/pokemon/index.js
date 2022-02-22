import React from "react";

export default function Pokemons(props) {
  console.log(props.data);
  return (
    <div>
      <h1>Pokemons</h1>
      <div>
        {props.data.results.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </div>
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
  const query = context.query.offset;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${query}`
  );
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
