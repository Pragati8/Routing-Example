import './App.css';
import React from 'react';
import Nav from './Nav';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';
import Demo from './Demo';
import Home1 from './Home1';
import Home2 from './Home2';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} exact={true}>
          <Route index element={<Home1 />} />
          <Route path='/home2' element={<Home2 />} />
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/demo' element={<Demo />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
