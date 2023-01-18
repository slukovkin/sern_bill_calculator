import { Report } from "../models/db_models.js"

export const getReportData = async (req, res) => {
  const frontDate = req.params // Дата должна прилетать с фронта
  console.log(frontDate);
  const data = await Report.findAll()
  // Посик по дате
  
  let result = data.filter((value) => {
    if((value.date).includes(frontDate.date)){
      return value
    }
  })
  if(result.length == 0){
    result = data
  }
  return res.json({
    result
  })
}

export const createReport = async (req, res) => {
  try {
    const { date, electro_data, water_data, gaz_data } = req.body
    const report = await Report.build({
      date,
      electro_data: electro_data,
      water_data: water_data,
      gaz_data: gaz_data,
    })
    await report.save()
    res.json({
      message: "Данный сохренены",
      report,
    })
  } catch (error) {
    res.json({
      message: "Ошибка данных",
      error,
    })
  }
}
