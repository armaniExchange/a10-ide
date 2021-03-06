import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createWidgetStore } from '@a10/a10-widget';

import 'font-awesome-webpack';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

const store = createWidgetStore('app');

const dest = document.getElementById('content');

let render = () => {
  const Sandbox = require('./Sandbox').default;
  ReactDOM.render(
    <Provider store={store}>
      <main>
        <Sandbox />
      </main>
    </Provider>,
    dest
  );
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    // const RedBox = require('redbox-react');
    console.error(error);
    // ReactDOM.render(
    //   <RedBox error={error} className="redbox"/>,
    //   dest
    // );
  };

  render = () => {
    // try {
      renderApp();
    // } catch (error) {
    //   renderError(error);
    // }
  };

  const rerender = () => {
    setTimeout(render);
  };

  module.hot.accept(rerender);
  // module.hot.accept('./Sandbox', rerender);
  // module.hot.accept('./Readme.md', rerender);
  // module.hot.accept('!!raw-loader!./Sandbox', rerender);
}

render();
