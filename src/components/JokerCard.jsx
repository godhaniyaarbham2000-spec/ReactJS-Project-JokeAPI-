import { useState, useEffect } from "react";

export default function JokeCard() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [visible, setVisible] = useState("setup");
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();

      const setup = data.setup || "";
      const punchline = data.punchline || "";

      setJoke({ setup, punchline });
      setVisible("setup");
    } catch {
      setJoke({
        setup: "Kuch gadbad hui hai 😅",
        punchline: "Please try again!",
      });
      setVisible("setup");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  function handleReveal() {
    setVisible((prev) => (prev === "setup" ? "punchline" : "setup"));
  }

  return (
    <section className="card">
      <div className="joke-area">
        <h2 className="question">{joke.setup}</h2>
        {visible === "punchline" && <p className="answer">{joke.punchline}</p>}
      </div>

      <div className="controls">
        <button className="btn reveal" onClick={handleReveal} disabled={loading}>
          {visible === "setup" ? "Show Punchline" : "Show Setup"}
        </button>

        <button className="btn next" onClick={fetchJoke} disabled={loading}>
          {loading ? "Loading..." : "New Joke"}
        </button>
      </div>
    </section>
  );
}