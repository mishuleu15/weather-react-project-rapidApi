const uvIndexCalc = (uvIndex) => {
  let text;
  switch (true) {
    case uvIndex <= 2:
      text = 'Low';
      break;
    case uvIndex === 3 || uvIndex <= 5:
      text = 'Moderate';
      break;
    case uvIndex === 6 || uvIndex <= 7:
      text = 'High';
      break;
    case uvIndex === 8 || uvIndex <= 10:
      text = 'Very High';
      break;
    default: {
      text = 'No Data';
    }
  }
  return text;
};

export default uvIndexCalc;
