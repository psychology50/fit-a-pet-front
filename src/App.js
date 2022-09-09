import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { SignInPage, } from './pages';

import TotalContainer from './styles/TotalContainer.styled';

function App() {
  return (
    <BrowserRouter>
      <TotalContainer>
        <Routes>
          <Route path="/login" element={<SignInPage />}/>
          {/* <Route path="/register" element={<Register />}/> */}
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/*" element={}/> */}
        </Routes>
      </TotalContainer>
    </BrowserRouter>
  );
}

export default App;
