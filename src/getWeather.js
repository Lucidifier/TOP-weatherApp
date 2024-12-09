import date from 'date-and-time';
import getLocation from './getLocation';
import drawUI from './drawUI';
import { dataArr } from '.';

async function getWeather() {
  console.log('getWeahter');
  const location = getLocation();
  const now = date.format(new Date(), 'YYYY-MM-DD');
  console.log('now date', now);
  const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${now}?key=HDHQ2FGH34RAHLBGD6R34B6PZ&include=days`, {mode: 'cors'});
  console.log('stepone', weather);
  const weatherData = await weather.json();
  console.log('steptwo', weatherData);
  console.log('dataArrInit', dataArr);
  
  return weatherData;
}

export default getWeather;