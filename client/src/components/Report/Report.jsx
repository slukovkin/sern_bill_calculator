import React, { useState } from "react";
import axios from "axios";
import "./Report.module.css";

function Report(props) {
  const [alldata, setAlldata] = useState([])

  function getSettings() {
    axios({
      method: "post",
      url: props.getAllData,
    }).then((res) => {
      let data = Object.values(res.data)
      console.log(data[0]);
      setAlldata(data[0][0])
    });
  }

  React.useEffect(() => {
    getSettings()
    document.title = props.title;
  },[props]);
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
            <td>{alldata.createdAt}</td>
            <td>{alldata.counterPrev}</td>
            <td>{alldata.counterCurr}</td>
            <td>{alldata.counterCurr-alldata.counterPrev}</td>
            <td></td>
            <td>{alldata.payment}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Report;
