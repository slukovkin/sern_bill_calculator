import React, { useState, useEffect } from "react";
import axios from "axios";

function Counter(props) {
  let [counterPrev, setCounterPrev] = useState(getCounterPrev);
  let [counterCurr, setCounterCurr] = useState("");
  let [price, setPrice] = useState(getSettings);
  let [payment, setPayment] = useState("");

  useEffect(() => {
    getCounterPrev();
    return () => {
      document.title = props.title;
    };
  });

  function saveSettings() {
    // return console.log(counterPrev, counterCurr, payment, price);
    axios({
      method: "post",
      url: props.setUrl,
      data: {
        counterPrev,
        counterCurr,
        payment,
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
      setPrice(data[props.idx]);
    });
  }

  function getCounterPrev() {
    axios({
      method: "post",
      url: props.getCounter,
    }).then((res) => {
      let data = Object.values(res.data);
      setCounterPrev(data[1]);
      setPayment(data[3]);
    });
  }
  function sendForm(e) {
    e.preventDefault();
    setPayment(+((counterCurr - counterPrev) * price).toFixed(2));
    // return console.log(counterPrev, counterCurr, payment, price);
    saveSettings();
    setCounterPrev("");
    setCounterCurr("");
    setPayment("");
  }

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