import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          {routes}
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
