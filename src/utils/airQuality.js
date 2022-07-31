const colorAirQuality = (airQlty) => {
  let text = {};
  switch (true) {
    case airQlty <= 50:
      text.color = 'green';
      text.airQlty = 'Excellent';
      break;
    case airQlty === 51 || airQlty <= 100:
      text.color = 'yellow';
      text.airQlty = 'Moderate';
      break;
    case airQlty === 101 || airQlty <= 150:
      text.color = 'orange';
      text.airQlty = 'Unhealthy for Sensitive Groups';
      break;
    case airQlty === 151 || airQlty <= 200:
      text.color = 'red';
      text.airQlty = 'Unhealthy';
      break;
    case airQlty === 201 || airQlty <= 300:
      text.color = 'purple';
      text.airQlty = 'Very Unhealthy';
      break;
    case airQlty >= 301:
      text.color = 'maroon';
      text.airQlty = 'Hazardous';
      break;
    default: {
      text = 'No Data';
    }
  }
  return text;
};

export default colorAirQuality;
