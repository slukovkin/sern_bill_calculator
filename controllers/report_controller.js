import { Report } from "../models/db_models.js"

export const getReportData = async (req, res) => {
  const data = await Report.findAll()

  return res.json({
    data
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
