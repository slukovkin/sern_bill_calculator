//поиск по наибольшему id * запрос sequelize почему-то не рвботает!!!

export function searchMaxId(data) {
  const result = [];
  data.reduce((acc, item) => {
    result.push(item.id);
  }, []);
  const id = Math.max(...result);
  return id;
}

// -----------------------------
