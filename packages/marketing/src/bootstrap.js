import React from 'react';
import  ReactDOM from 'react-dom';

import MarketingApp from './App';

const mount = (el) => {
  ReactDOM.render(
    <MarketingApp />,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if(devRoot) {
    mount(devRoot);
  }
}

export { mount };