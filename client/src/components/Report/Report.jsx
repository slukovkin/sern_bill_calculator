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
          <h2>Журнал платежей</h2>
          <th>Назначение платежа</th>
          <th>Предыдущий счетчик</th>
          <th>Текущий счетчик</th>
          <th>Кол-во</th>
          <th>Тариф</th>
          <th>Сумма</th>
          <tr>
            <td>цифра</td>
            <td>цифра</td>
            <td>цифра</td>
            <td>цифра</td>
            <td>цифра</td>
            <td>цифра</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Report;
