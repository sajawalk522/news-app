const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "10ad235274d74f2ea1e32b83488eaa4c";
export const getNews = async (payload, search) => {
  let searchResult = search ? `&q=${encodeURIComponent(search)}` : "";
  let urls = [
    `${BASE_URL}/top-headlines?country=us${searchResult}&apiKey=${API_KEY}`,
  ];
  if (payload.length) {
    urls = payload.map(
      (category) =>
        `${BASE_URL}/top-headlines?${`category=${category}&`}country=us${searchResult}&apiKey=${API_KEY}`
    );
  }
  try {
    const response = await Promise.all(urls.map((url) => fetchData(url)));
    const obj = { articles: [] };
    response.forEach((data, index) => {
      const category = response[index];
      obj.articles = [...obj.articles, ...category.articles];
    });
    return obj;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
