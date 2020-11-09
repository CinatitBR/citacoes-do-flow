import Header from './Header/Header';
import Quote from './Quote/Quote';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />

      <section className="quote-list">
        <Quote name="Igor" />
      </section>
    </div>
  );
}

export default App;