import "./phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        listen
      </a>

      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
