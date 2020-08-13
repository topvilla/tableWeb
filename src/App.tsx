import React from 'react';

import GlobalStyle from './styles/global';
import Board from './components/board';
// import MenuBar from './components/tools';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <>
        <Provider store = {store} >
          <Header />
          <Board />
          <GlobalStyle/>
        </Provider>
      </>
    </div>
  );
}

export default App;
