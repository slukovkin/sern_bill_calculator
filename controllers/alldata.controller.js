import { sequelize } from "../db/db_init.js"

export const getAllData = async (req, res) => {
  try {
    const query = "select * from "
    const [el, metael] = await sequelize.query(
      query + "electro " + "order by id desc limit 1"
    )
    const [wt, metawt] = await sequelize.query(
      query + "water " + "order by id desc limit 1"
    )
    const [gz, metagz] = await sequelize.query(
      query + "gaz " + "order by id desc limit 1"
    )
    const [st, metast] = await sequelize.query(
      query + "setup " + "order by id desc limit 1"
    )

    const data = [...el, ...wt, ...gz, ...st]

    if (!data) return
    res.json(data)
  } catch (err) {
    res.status(400).json({
      message: "Ошибка запроса данных",
    })
  }
}

export const getMonthReport = async (req, res) => {
  try {
    const month = req.body.data
    // return res.json(month)
    const query = "select * from "
    const [el, metael] = await sequelize.query(
      query + `electro WHERE createdAt LIKE '%${month}%' limit 1`
    )
    const [wt, metawt] = await sequelize.query(
      query + `water WHERE createdAt LIKE '%${month}%' limit 1`
    )
    const [gz, metagz] = await sequelize.query(
      query + `gaz WHERE createdAt LIKE '%${month}%' limit 1`
    )
    const [st, metast] = await sequelize.query(
      query + `setup WHERE createdAt LIKE '%${month}%' limit 1`
    )

    const data = [...el, ...wt, ...gz, ...st]
    // console.log(data);

    if (!data) return
    res.json(data)
  } catch (err) {
    res.status(400).json({
      message: "Ошибка запроса данных",
    })
  }
}
