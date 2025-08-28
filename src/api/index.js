const baseURL ="https://api.weatherapi.com/v1/current.json?key=45b78d8830da4b9aa3c55630252508";

export const City = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const WLocation = async (newD, newdelhi) => {
  const response = await fetch(`${baseURL}&q=${newD},${newdelhi}&aqi=yes`);
  return await response.json();
};
