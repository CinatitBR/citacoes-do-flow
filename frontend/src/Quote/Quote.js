import './Quote.css';

const Quote = props => {
  return (
    <div className="quote" key={props.id}>
      <img 
        className="quote-img" 
        src={process.env.PUBLIC_URL + "/photos/monark.jpg"} 
        alt={props.author}
      />

      <div className="quote-body">
        <p className="text">
          {props.text}
        </p>

        <div className="quote-body__desc">
          <div className="item">- {props.author}</div>
          <div className="item">episódio #183, em 1:45:00</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;

