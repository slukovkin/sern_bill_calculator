import React from "react";
import "./Report.module.css";

function Report(props) {
  React.useEffect(() => {
    document.title = props.title;
  });
  return (
    <>
      <table>
        <tbody>
          <h2>Журнал оплат</h2>
          <th>Назначение платежа</th>
          <th>Предыдущий счетчик</th>
          <th>Текущий счетчик</th>
          <th>Кол-во</th>
          <th>Тариф</th>
          <th>Сумма</th>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Report;
