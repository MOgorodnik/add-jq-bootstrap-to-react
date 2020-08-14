import React from 'react';

import './App.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'jquery'
// import 'bootstrap/dist/js/bootstrap';
// const $ = require('jquery');
// const jQuery = $;
// window.$ = window.jQuery = $;

console.log("I`m from App.js");

// jQuery(document).ready(function ($) {
//   $('body').css('background-color', 'green')
// })

function App() {
  return (
    <div className="bg-primary p-4">
      <header className="text-center">
        <p>
          <mark style={{color: "red"}}>Edit <code>src/App.js</code> and save to reload.</mark>
        </p>
        <a
          className="btn btn-info btn-lg"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
