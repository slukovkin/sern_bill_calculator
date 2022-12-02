import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Report from "./components/Report/Report";
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Report />} />
          <Route path='/counter_el' element={<Counter />} />
          <Route path='/settings' element={<Settings url='http://localhost:3003/api/setup'/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
