import React, { useState, useEffect } from "react"
import axios from "axios"
import cl from "./Report.module.css"
import { months } from "../../data/data.js"

const dates = new Date()

function Report(props) {
  const [electro, setElectro] = useState([])
  const [water, setWater] = useState([])
  const [gaz, setGaz] = useState([])
  const [setting, setSetting] = useState([])
  const [dateReport, setDateReport] = useState(dates.toISOString().slice(0, 7))


  function selectMonthHandler() {

    let month = document.querySelector("#months")
    month = month.value.length < 2 ? `2023-0${month.value}` : `2023-${month.value}`
    setDateReport(month)
    axios.post(props.monthData, {
      data: dateReport
    }).then((res) => {
      let data = res.data
      if (data.length === 0) return
      setElectro(data[0])
      setWater(data[1])
      setGaz(data[2])
      setSetting(data[3])
    }).catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    const getSetting = () => {
      axios({
        method: "get",
        url: props.getAllData,
      }).then((res) => {
        let data = Object.values(res.data)
        // console.log(data);
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
            <th colSpan={7}>
              <span>Поиск отчета по дате: </span>
              <select name="months" id="months" onSelect={(e) => setDateReport(e.target.value)}>
                {months.map((month, idx) => {
                  return (
                    <option
                      value={idx} key={idx}
                    >{month}</option>
                  )
                })}
              </select>
              <button className={cl.btn} onClick={selectMonthHandler}>
                Выбрать
              </button>
              <h4>Сегодня: {Date().slice(0, 15)} </h4>
            </th>
          </tr>
          <tr>
            <th colSpan={7}>
              {dateReport.length === 0 ? "" : <h3>Журнал платежей на {dateReport}</h3>}
            </th>
          </tr>
          <tr>
            <th>Назначение платежа</th>
            <th>Предыдущий счетчик</th>
            <th>Текущий счетчик</th>
            <th>Кол-во</th>
            <th>Тариф</th>
            <th>Сумма</th>
            <th>Сумма к оплате</th>
          </tr>
          <tr>
            <td>Электроснабжение</td>
            <td>{electro.counterPrev}</td>
            <td>{electro.counterCurr}</td>
            <td>{electro.counterCurr - electro.counterPrev}</td>
            <td>{setting.eprice}</td>
            <td>{electro.payment}</td>
            <td rowSpan={3}>{(electro.payment + water.payment + gaz.payment).toFixed(2)}</td>
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
