import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";

import data from './MOCK_DATA.json'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import Counters from './components/counters';
//import Counter from './components/counter';
//import Counters from './components/counters';
// import homePage from './components/homePage';
const App = () => (
  <div>
    <Counters />
    {/* <Cardsval1 data={data} /> */}
    {/* <Cardsval data={data} /> */}
  </div>
);

render(<App />, document.getElementById("root"));