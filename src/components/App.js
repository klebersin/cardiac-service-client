import { Fragment } from 'react';
import { ContextProvider } from '../context/GlobalContext';
import {
  Routes,
  Route,
} from "react-router-dom";

import Login from './login/Login';
import Heading from './shared/Heading';
import Register from './register/Register';
import Consultation from './consultation/Consultation';
import Prediction from './prediction/Prediction';

function App() {
  return (
    <Fragment>
      <Heading />
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/register' element={<Register />} exact />
          <Route path='/consultation' element={<Consultation />} exact />
          <Route path='/prediction' element={<Prediction />} exact />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
