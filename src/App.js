import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import GetStarted from './pages/getstrated';
import Home from './pages/home';
import Result from './pages/result';

function App() {
  return (
   
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result />} />
         
         </Routes>
      </BrowserRouter>
   
   
  );
}

export default App;