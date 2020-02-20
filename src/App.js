import React from 'react';
import './App.css';
//import { I18nextProvider } from 'react-i18next';
//import i18n from './i18n/index';

import Presentation from './components/presentation/Presentation';

function App() {
  return (
    <div className="App">
      {/* <I18nextProvider i18n={i18n}>
        <Presentation />
      </I18nextProvider> */}
      <Presentation />
    </div>
  );
}

export default App;
