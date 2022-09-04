import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'assets/scss/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Landing from 'pages/Landing';
import Detail from 'pages/Detail';

AOS.init();
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path='/' component={Landing}></Route> */}
        <Route path='/' component={Detail}></Route>
      </Router>D
    </div>
  );
}

export default App;
