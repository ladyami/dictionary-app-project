import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResult] = useState();
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>What word do you want to look up</h1>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultkeyword}
            />
          </form>
          <div className="hint">
            {" "}
            Suggested words: sunset, sunrise, juice, pizza, plant....
          </div>
        </section>
        <SearchResult results={results} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
