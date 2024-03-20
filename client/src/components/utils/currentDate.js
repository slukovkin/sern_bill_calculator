export function getCurrentDate() {
    const data = new Date()
    let month = data.getMonth()
    const currentMonth = month < 10 ? `0${month}` : month
    const currentDate = `${data.getFullYear()}.${data.getDate()}.${currentMonth}`
    return currentDate
  }