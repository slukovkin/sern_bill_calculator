import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Report.module.css";

function Report(props) {
  const [electro, setElectro] = useState([]);
  const [water, setWater] = useState([]);
  const [gaz, setGaz] = useState([]);
  const [setting, setSetting] = useState([]);

  function getSettings() {
    axios({
      method: "post",
      url: props.getAllData,
    }).then((res) => {
      let data = Object.values(res.data);
      setElectro(data[0]);
      setWater(data[1]);
      setGaz(data[2]);
      setSetting(data[3]);
    });
  }

  useEffect(() => {
    getSettings();
    document.title = props.title;
  }, [props]);
  return (
    <>
      <table>
        <tbody>
          <h2>Журнал платежей</h2>
          <th>Назначение платежа</th>
          <th>Предыдущий счетчик</th>
          <th>Текущий счетчик</th>
          <th>Кол-во</th>
          <th>Тариф</th>
          <th>Сумма</th>
          <tr>
            <td>{electro.createdAt}</td>
            <td>{electro.counterPrev}</td>
            <td>{electro.counterCurr}</td>
            <td>{electro.counterCurr - electro.counterPrev}</td>
            <td>{setting.eprice}</td>
            <td>{electro.payment}</td>
          </tr>
          <tr>
            <td>{water.createdAt}</td>
            <td>{water.counterPrev}</td>
            <td>{water.counterCurr}</td>
            <td>{water.counterCurr - water.counterPrev}</td>
            <td>{setting.wprice}</td>
            <td>{water.payment}</td>
          </tr>
          <tr>
            <td>{gaz.createdAt}</td>
            <td>{gaz.counterPrev}</td>
            <td>{gaz.counterCurr}</td>
            <td>{gaz.counterCurr - gaz.counterPrev}</td>
            <td>{setting.gprice}</td>
            <td>{gaz.payment}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Report;
