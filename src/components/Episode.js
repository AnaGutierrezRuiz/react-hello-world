import Button from "./Button";

function Episode(props) {
  return (
    <div className="card mb-3">
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.summary}</p>
        <Button text="View more" />
      </div>
    </div>
  );
}

export default Episode;
