import getLocation from "./getLocation"
import { dataArr } from ".";

function drawUI() {
  const location = getLocation();
  const infoParagraph = document.querySelector('.info_text');
  infoParagraph.innerText = `The current weather in ${location} is:`;

  const tempPara = document.querySelector('.temperature');
  tempPara.innerText = dataArr[1];

  const descriptionPara = document.querySelector('.weather_description');
  descriptionPara.innerText = dataArr[0];
}

export default drawUI;