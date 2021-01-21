const axios = require("axios");

exports.handler = async function(event, context, callback) {
  const { lat, lon } = event.queryStringParameters;
  const url =`https://api.openweathermat.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
  const response = await axios.get(url);
  callback(null,{
    statusCode: 200,
    body: JSON.stringify(response.data)
  });
}
