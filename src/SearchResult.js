import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

export default function SearchResult(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
