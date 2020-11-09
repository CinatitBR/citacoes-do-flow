import './Quote.css';

const Quote = (props) => {
  return (
    <div className="quote">
      <img className="quote-img" src={process.env.PUBLIC_URL + "/photos/monark.jpg"} alt="Igor" />

      <div className="quote-body">
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis eaque eius doloremque dolorem quo consectetur natus distinctio, eligendi necessitatibus in sapiente explicabo illo sunt, voluptas maxime, fuga labore rerum.</p>

        <div className="quote-body__desc">
          <div className="item">- {props.name}</div>
          <div className="item">episódio #183, em 1:45:00</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
