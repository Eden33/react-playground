import React from 'react';
import ReactDOM from 'react-dom';


function HelloWorld() {
  return <div>A JSX component says "Hello World"!</div>
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root-container')
);