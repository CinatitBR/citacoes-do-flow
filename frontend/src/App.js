import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Quote from './Quote/Quote';
import './App.css';

const App = () => {
  const [ quotes, setQuotes ] = useState([]);

  const options = {
    root: null,
    threshold: 1.0
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.intersectionRatio >= 1) console.log('scroll')
    }
  }, options)

  const getQuotes = () => {
    axios.get('/getQuotes')
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getQuotes();
    observer.observe(document.querySelector('#infiniteScrollTrigger'));
  }, [quotes]);
 
  return (
    <div>
      <Header />

      <section className="quote-list">
        {
          quotes.map((quote, index) => {
            return <Quote id={index} author={quote.title} text={quote.body} />
          })
        }
      </section>
      <div id="infiniteScrollTrigger"></div>
    </div>
  );
}

export default App;