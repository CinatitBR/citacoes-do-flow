import './Quote.css';

const Quote = (props) => {
  return (
    <div className="quote">
      <img className="img-quote" src={process.env.PUBLIC_URL + "/photos/monark.jpg"} alt="Igor" />

      <div className="quote-body">
        <p>“Be yourself; everyone else is already taken.”</p>

        <div className="quote-desc">
          <div className="item">- {props.name}</div>
          <div className="item">episódio #183, em 1:45:00</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
