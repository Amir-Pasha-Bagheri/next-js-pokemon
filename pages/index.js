import Link from "next/link";
import classes from "../styles/homepage.module.css";

export default function Home() {
  return (
    <div className="container">
      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
      <div className={classes.top_layer}></div>
      <h1 className={classes.welcome_text}>Welcome to Pokemon Page</h1>
      <div className={classes.welcome}></div>
      <div className={classes.bottom_layer}></div>

      <Link href="/pokemon?limit=100&offset=0">
        <button className={classes.link_go_pokemon}>Go to Pokemons !!!</button>
      </Link>
    </div>
  );
}
