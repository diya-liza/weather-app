const request=require('request');
const argv=require('yargs').argv;


let apiKey='16d448dec1c0f40685bbe7b20e793fe1';
let city=argv.c || 'delhi';
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;



request(url, function (error, response, body) {
  let weather=JSON.parse(body);
    let  message=`${weather.main.temp} in ${weather.name}`;
   // Print the response status code if a response was received
  console.log(message);
// Print the HTML for the Google homepage.
});
