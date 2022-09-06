import "./App.css";
import Dictionary from "./Dictionary";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
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
