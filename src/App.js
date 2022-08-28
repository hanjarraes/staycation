import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'assets/scss/style.scss';
import Landing from 'pages/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Landing}></Route>
      </Router>
    </div>
  );
}

export default App;
