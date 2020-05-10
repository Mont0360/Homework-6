var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");
var clearHistoryButton = $("#clear-history");

var currentCity = $("#current-city");
var currentTemp = $("#current-temp");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");
var UVindex = $("#uv-index");

var weatherContent = $("#weather-content");

// OpenWeather API
var APIkey = "8b274dc30c8edb110b98e981a60802fd";

// access to data
var cityList = [];

// Get date and display in title
var currentDate = moment().format('L');
$("#current-date").text("(" + currentDate + ")");

// Check if search history exists when page loads
initalizeHistory();
showClear();

