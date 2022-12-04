import React, { useState, useEffect } from "react";
import axios from "axios";

function Counter(props) {
  const [counterPrev, setCounterPrev] = useState(0);
  const [counterCurr, setCounterCurr] = useState(0);
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState(0);

  function saveData() {
    axios({
      method: "post",
      url: props.setUrl,
      data: [
        counterPrev,
        counterCurr,
        payment,
        
      ],
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
      setPrice(data[props.idx]);
    });
  }
  function getCounterPrev() {
    axios({
      method: "post",
      url: props.getCounter,
    }).then((res) => {
      let data = Object.values(res.data);
      setCounterPrev(data[2]);
    });
  }

  function sendForm(e) {
    e.preventDefault();
    
    setPayment(+((counterCurr - counterPrev) * price).toFixed(2));
    // return console.log(counterCurr, counterPrev, price, payment);
    saveData();
    setCounterPrev("");
    setCounterCurr("");
    
  }

  useEffect(() => {
    getSettings();
    getCounterPrev();
    document.title = props.title;
  });

  return (
    <>
      <form className='form' onSubmit={sendForm}>
        <label htmlFor='counterPrev'>Предыдущий счетчик</label>
        <input
          type='number'
          name='counterPrev'
          value={counterPrev || ""}
          onChange={(e) => setCounterPrev(e.target.value)}
        />

        <label htmlFor='counterCurr'>Текущий счетчик</label>
        <input
          type='number'
          name='counterCurr'
          value={counterCurr || ""}
          onChange={(e) => setCounterCurr(e.target.value)}
        />

        <button type='submit'>Сохранить</button>
      </form>
    </>
  );
}

export default Counter;
