import Link from "next/link";
import React from "react";

export default function PokemonCard(props) {
  return (
    <div className={props.className}>
      {props.name}
      <br />
      <Link href={`/pokemon/${props.name}`}>
        <button>More info</button>
      </Link>
    </div>
  );
}
