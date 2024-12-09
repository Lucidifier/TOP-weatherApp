import getLocation from "./getLocation";
import getWeather from "./getWeather";
import drawUI from "./drawUI";
import storeWeather from "./storeWeather";

async function addEventListeners() {
  const generateBtn = document.querySelector('.generate_data');
  generateBtn.addEventListener('click', 
    () => {
      console.log('testis');
      storeWeather()
      .then (drawUI());
    });
  console.log('click');
}

export default addEventListeners;