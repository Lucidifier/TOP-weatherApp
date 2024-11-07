function getLocation() {
  const locationInput = document.querySelector('.location_selection_section > input');
  const locationValue = locationInput.value;
  console.log(locationValue);
  // if(locationValue) INPUT VALIDATION
  return locationValue;
}

export default getLocation;