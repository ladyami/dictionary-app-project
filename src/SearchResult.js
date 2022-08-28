import Meanings from "./Meanings";

export default function SearchResult(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
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
