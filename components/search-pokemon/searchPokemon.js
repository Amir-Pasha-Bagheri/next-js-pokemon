import Link from "next/link";
import React, { useState } from "react";

export default function SearchPokemon({ error, classname }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={classname}>
      <h2>{error}</h2>
      <p>Try something else :</p>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Pikachu"
        />
        <Link
          href={
            inputValue === "" ? `/pokemon/pikachu` : `/pokemon/${inputValue}`
          }
        >
          <button>Go !</button>
        </Link>
      </form>
    </div>
  );
}
