import getLocation from "./getLocation"
import storeWeather from "./storeWeather";
import { dataArr } from ".";

async function drawUI() {
  console.log('drawUI');
  const weatherData = await storeWeather();
  const location = getLocation();
  const infoParagraph = document.querySelector('.info_text');
  infoParagraph.innerText = `The current weather in ${location} is:`;

  const tempPara = document.querySelector('.temperature');
  tempPara.innerText = weatherData[1];

  const descriptionPara = document.querySelector('.weather_description');
  descriptionPara.innerText = weatherData[0];
}

export default drawUI;