import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary
            defaultkeyword="welcome
          "
          />
        </main>
        <footer>
          <a
            href="https://github.com/ladyami/dictionary-app-project"
            target="_blank"
            class="source"
            rel="noreferrer"
          >
            Open Source Code{" "}
          </a>
          <small>By Amina Oyegoke</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
