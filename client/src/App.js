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
          <Route
            path='/counter_el'
            element={
              <Counter
                setUrl='http://localhost:3003/api/electro/add'
                getUrl='http://localhost:3003/api/setting'
                getCounter='http://localhost:3003/api/electro/lastcounter'
                idx='1'
                title='Электоснабжение'
              />
            }
          />
          <Route
            path='/counter_w'
            element={
              <Counter
                setUrl='http://localhost:3003/api/water/add'
                getUrl='http://localhost:3003/api/setting'
                getCounter='http://localhost:3003/api/water/lastcounter'
                idx='2'
                title='Водоснабжение'
              />
            }
          />
          <Route
            path='/counter_g'
            element={
              <Counter
                setUrl='http://localhost:3003/api/gaz/add'
                getUrl='http://localhost:3003/api/setting'
                getCounter='http://localhost:3003/api/gaz/lastcounter'
                idx='3'
                title='Газоснабжение'
              />
            }
          />
          <Route
            path='/settings'
            element={
              <Settings
                setUrl='http://localhost:3003/api/setup'
                getUrl='http://localhost:3003/api/setting'
                title='Настройки'
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
