import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Counter.module.css";

function Counter(props) {
  const [counterPrev, setCounterPrev] = useState(0);
  const [counterCurr, setCounterCurr] = useState(0);
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState(0);
  const [date, setDate] = useState(0);

  function saveSettings() {
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


  function sendForm(e) {
    e.preventDefault();
    saveSettings();
    setCounterPrev("");
    setCounterCurr("");
  }

  useEffect(() => {
    setPayment(+((counterCurr - counterPrev) * price).toFixed(2));
  }, [counterPrev, price, counterCurr]);

  useEffect(() => {
    const getCounterPrev = () => {
      axios({
        method: "post",
        url: props.getCounter,
      }).then((res) => {
        let data = Object.values(res.data);
        setCounterPrev(data[2]);
        setDate(data[4].slice(0, 10));
      });
    }

    const getSettings = () => {
      axios({
        method: "post",
        url: props.getUrl,
      }).then((res) => {
        let data = Object.values(res.data);
        setPrice(data[props.idx]);
      });
    }
    getCounterPrev();
    getSettings();
    document.title = props.title;
  }, [props]);

  return (
    <>
      <form className='form' onSubmit={sendForm}>
        <h3>Показание счетчика на {date}</h3>
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
