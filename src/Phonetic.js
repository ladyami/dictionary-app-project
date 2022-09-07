export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
