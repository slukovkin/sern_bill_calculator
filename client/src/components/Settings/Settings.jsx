import React, { useState } from "react";
import axios from "axios";
import "./Settings.module.css";

function Settings(props) {
  let [eprice, setEprice] = useState("");
  let [wprice, setWprice] = useState("");
  let [gprice, setGprice] = useState("");

  function saveData(){
    axios({
      method: 'post',
      url: props.url,
      data: {
        eprice,
        wprice,
        gprice
      }
    }).then((res)=>{
      console.log('OK');
    }).catch((res)=>{
      console.log('False');
    })
  }

  function sendForm(e) {
    e.preventDefault();
    saveData()
    setEprice('')
    setWprice('')
    setGprice('')
  }

  // useEffect(() => {
 
  // }, [eprice, wprice, gprice]);

  return (
    <>
      <form className='form' onSubmit={sendForm}>
        <label htmlFor='e_price'>Цена за электроэнергию (1 кВт)</label>
        <input
          type='number'
          name='e_price'
          value={eprice}
          onChange={(e) => setEprice(e.target.value)}
          placeholder='Цена за 1 кВт'
        />

        <label htmlFor='w_price'>Цена за водоснабжение (1 куб)</label>
        <input
          type='number'
          name='w_price'
          value={wprice}
          onChange={(e) => setWprice(e.currentTarget.value)}
          placeholder='Цена за 1 куб'
        />

        <label htmlFor='g_price'>Цена за газоснабжение (1 кВт)</label>
        <input
          type='number'
          name='g_price'
          value={gprice}
          onChange={(e) => setGprice(e.currentTarget.value)}
          placeholder='Цена за 1 куб'
        />

        <button type='submit'>Сохранить</button>
      </form>
    </>
  );
}

export default Settings;
