import getWeather from "./getWeather"
import { dataArr } from ".";

async function storeWeather() {
  console.log('storeWeather');
  const weatherDataArr = [];
  let weatherData = await getWeather();
  console.log(weatherData);
    console.log('weatherData', weatherData)
    if(weatherDataArr.length > 0) {
      for (let i = 0; i <= weatherDataArr.length; i++) {
        weatherDataArr.pop()
        console.log('weatherDataArr loop', weatherDataArr);
      }
    }
    weatherDataArr.push(weatherData.days[0].conditions, weatherData.days[0].temp);
    console.log('dataArrStoreW', weatherDataArr);
    return weatherDataArr;
}

export default storeWeather;