import { Fragment } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './login/Login';
import Heading from './shared/Heading';
import { ContextProvider } from '../context/GlobalContext';

function App() {
  return (
    <Fragment>
      <Heading />
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Login />} exact />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
