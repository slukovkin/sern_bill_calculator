import React, { useState, useEffect } from "react"
import axios from "axios"
import cl from "./Report.module.css"

function Report(props) {
  const [electro, setElectro] = useState([])
  const [water, setWater] = useState([])
  const [gaz, setGaz] = useState([])
  const [setting, setSetting] = useState([])
  const [dateReport, setDateReport] = useState("")

  function getElement() {
    let date = document.querySelector("#date")
    date = date.value
    setDateReport(date.slice(0, 7))
  }

  useEffect(() => {
    const getSetting = () => {
      axios({
        method: "get",
        url: props.getAllData,
      }).then((res) => {
        let data = Object.values(res.data)
        setElectro(data[0])
        setWater(data[1])
        setGaz(data[2])
        setSetting(data[3])
      })
    }
    getSetting()
    document.title = props.title
  }, [props])

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th colSpan={6}>
              <span>Поиск отчета по дате: </span>
              <input type='date' id='date' />
              <button className={cl.btn} onClick={getElement}>
                Выбрать
              </button>
              <h4>Сегодня: {Date().slice(0, 15)} </h4>
            </th>
          </tr>
          <tr>
            <th colSpan={6}>
              <h3>
                Журнал платежей
                {dateReport.length === 0 ? "" : ` на ${dateReport}`}
              </h3>
            </th>
          </tr>
          <tr>
            <th>Назначение платежа</th>
            <th>Предыдущий счетчик</th>
            <th>Текущий счетчик</th>
            <th>Кол-во</th>
            <th>Тариф</th>
            <th>Сумма</th>
          </tr>
          <tr>
            <td>Электроснабжение</td>
            <td>{electro.counterPrev}</td>
            <td>{electro.counterCurr}</td>
            <td>{electro.counterCurr - electro.counterPrev}</td>
            <td>{setting.eprice}</td>
            <td>{electro.payment}</td>
          </tr>
          <tr>
            <td>Водоснабжение</td>
            <td>{water.counterPrev}</td>
            <td>{water.counterCurr}</td>
            <td>{water.counterCurr - water.counterPrev}</td>
            <td>{setting.wprice}</td>
            <td>{water.payment}</td>
          </tr>
          <tr>
            <td>Газоснабжение</td>
            <td>{gaz.counterPrev}</td>
            <td>{gaz.counterCurr}</td>
            <td>{gaz.counterCurr - gaz.counterPrev}</td>
            <td>{setting.gprice}</td>
            <td>{gaz.payment}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Report
