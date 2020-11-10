const express = require('express');
const routes = require('./routes');

const app = express();

// Use routes from routes file
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
});

{/* <div class="quote">
  <img class="img-quote" src="./images/igor.jpg" alt="Igor" />

  <div class="quote-body">
    <p>“Be yourself; everyone else is already taken.”</p>

    <div class="quote-desc">
      <div class="item">- Igor</div>
      <div class="item">episódio #183, em 1:45:00</div>
    </div>
  </div>
</div>  */}