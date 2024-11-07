import getLocation from "./getLocation";
import getWeather from "./getWeather";
import drawUI from "./drawUI";

function addEventListeners() {
  const generateBtn = document.querySelector('.generate_data');
  generateBtn.addEventListener('click', getWeather);
  generateBtn.addEventListener('click', drawUI);
  console.log('click');
}

export default addEventListeners;