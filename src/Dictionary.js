import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState();

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search} className="text-center">
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <SearchResult result={result} />
    </div>
  );
}
