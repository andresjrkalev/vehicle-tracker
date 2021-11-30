import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Home from './page/home';
import './style/style.scss';

const App = function () {
  library.add(faCalendar, faMapPin);
  return (
    <div className="container">
      <Home />
    </div>
  );
};

export default App;
