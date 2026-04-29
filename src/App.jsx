import React from "react";
import JokerCard from "./components/JokerCard";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Jokes!</h1>
      </header>

      <main className="main">
        <JokeCard />
      </main>

      <footer className="footer">
        <small>Made with ❤ Godhaniya Arbham by You</small>
      </footer>
    </div>
  );
}