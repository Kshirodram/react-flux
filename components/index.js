import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// components import
import {HelloWorld} from './hello-world';

const renderer = () => {
  // server renderer part
  const htmlString = ReactDOMServer.renderToString(<HelloWorld />);

  if (typeof document !== 'undefined') {
    ReactDOM.render(<HelloWorld />, document.getElementById('container'));
  }
  return htmlString;
};

export {renderer};
