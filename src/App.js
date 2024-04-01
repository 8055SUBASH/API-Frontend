import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import "./css/bootstrap/bootstrap.min.css";
import "./css/others/animate.css";
import "./css/responsive/responsive.css";
import "./css/style.css";
import "./css/custom.css";

import Get from './pages/Get';
import Post from './pages/Post';
import Put from './pages/Put';
import Delete from './pages/Delete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='Get' element={<Get></Get>}></Route>
          <Route path='Post' element={<Post></Post>}></Route>
          <Route path='Put' element={<Put></Put>}></Route>
          <Route path='Delete' element={<Delete></Delete>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;