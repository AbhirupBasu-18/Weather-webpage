// Weather Forecast App:
//
// Make a web app for users to see the current weather and the weather forecast for the next 7 days.
//
// Requirements:
//
// An input for users to type city name
// Display current weather including weather condition, temperature, humidity, wind speed, and date and time
// Visualization to display the temperature change, humidity change, and weather conditions of each day.
//
// Suggested Implementation
// Fetch user's device position. If you're unable to get the user's position, set Delhi as the default location.
// Fetch weather data (forecast data and current weather data) of the location from weather API
// Format the data into charts
// Display the chart and current weather.
var weather = require('openweather-apis');
const a="a2971fd7137ee328cb59c5ffdc253e70";
weather.setLang('en');
weather.setCity('Fairplay');
weather.setAPPID(a);
weather.setUnits('metric');
// get the Temperature
	weather.getTemperature(function(err, temp){
		console.log(temp);
	});

	// get the Atm Pressure
	weather.getPressure(function(err, pres){
		console.log(pres);
	});

	// get the Humidity
	weather.getHumidity(function(err, hum){
		console.log(hum);
	});

	// get the Description of the weather condition
	weather.getDescription(function(err, desc){
		console.log(desc);
	});
  
	// get all the JSON file returned from server (rich of info)
	weather.getAllWeather(function(err, JSONObj){
		console.log(JSONObj);
	});

	// Adds support for the onecall api endpoint.
	weather.getWeatherOneCall = function(err, data){

  };
  // get 7 days forecast
	weather.getWeatherForecastForDays(7, function(err, obj){
		console.log(obj);
	});


	// get a simple JSON Object with temperature, humidity, pressure and description
	weather.getSmartJSON(function(err, smart){
		console.log(smart);
	});
