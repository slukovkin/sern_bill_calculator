import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Settings.module.css";

function Settings(props) {
  const [eprice, setEprice] = useState(0);
  const [wprice, setWprice] = useState(0);
  const [gprice, setGprice] = useState(0);
  const [data, setData] = useState("");

  function saveSettings() {
    axios({
      method: "post",
      url: props.setUrl,
      data: {
        eprice,
        wprice,
        gprice,
      },
    })
      .then((res) => {
        console.log("OK");
      })
      .catch((res) => {
        console.log("False");
      });
  }

  function getSettings() {
    axios({
      method: "post",
      url: props.getUrl,
    }).then((res) => {
      let data = Object.values(res.data);
      setEprice(data[1]);
      setWprice(data[2]);
      setGprice(data[3]);
      setData(data[4]);
    });
  }

  function sendForm(e) {
    e.preventDefault();
    saveSettings();
    setEprice("");
    setWprice("");
    setGprice("");
  }

  useEffect(() => {
    getSettings();
    document.title = props.title;
  }, [props.title]);

  return (
    <>
      <form className='form' onSubmit={sendForm}>
        <h3>Тарифы на {data.slice(0, 10)}</h3>
        <label htmlFor='e_price'>Цена за электроэнергию (1 кВт)</label>
        <input
          type='number'
          name='e_price'
          value={eprice || ""}
          onChange={(e) => setEprice(e.target.value)}
          placeholder='Цена за 1 кВт'
        />

        <label htmlFor='w_price'>Цена за водоснабжение (1 куб)</label>
        <input
          type='number'
          name='w_price'
          value={wprice || ""}
          onChange={(e) => setWprice(e.currentTarget.value)}
          placeholder='Цена за 1 куб'
        />

        <label htmlFor='g_price'>Цена за газоснабжение (1 куб)</label>
        <input
          type='number'
          name='g_price'
          value={gprice || ""}
          onChange={(e) => setGprice(e.currentTarget.value)}
          placeholder='Цена за 1 куб'
        />

        <button type='submit'>Сохранить</button>
      </form>
    </>
  );
}

export default Settings;
