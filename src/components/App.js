import { Fragment } from "react";
import { ContextProvider } from "../context/GlobalContext";
import { Routes, Route } from "react-router-dom";

import Login from "./login/Login";
import Register from "./register/Register";
import Consultation from "./consultation/Consultation";
import Prediction from "./prediction/Prediction";
import Administrator from "./administrator/Administrator";
import Home from "./Home/Home";

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/consultation" element={<Consultation />} exact />
          <Route path="/prediction" element={<Prediction />} exact />
          <Route path="/admin" element={<Administrator />} exact />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
