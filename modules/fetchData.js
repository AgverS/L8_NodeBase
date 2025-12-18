

async function fetchData(url) {
  const result = {
    data: [],
    isLoading: true,
    error: null,
  };

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }

    result.data = await response.json();
  } catch (error) {
    result.error = error;
  } finally {
    result.isLoading = false;
  }

  return result;
}

module.exports = fetchData;
