import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SearchResult from "./SearchResult";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResult] = useState();
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    const pexelApiKey =
      "563492ad6f917000010000011709739c00ad4f1bbd37eb8b571fca79";
    const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
