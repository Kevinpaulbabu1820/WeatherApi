// const city= document.querySelector(".city");
icon=  document.querySelector(".icon")
temp= document.querySelector(".temp")
let weather = {
    apiKey:"b96bfb0db8628985f76d18399bacf1a6",
    fetchWeather: function (city) {
        console.log("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apiKey)
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apiKey)
   .then((response)=>{
    if(!response.ok){
        alert("No weather found.")
        throw new  Error("No weather found.");
    }
    return response.json();

   })
   .then((data)=>this.displayWeather(data));
},


displayWeather: function(data){
    const name=data.name;
    console.log("name",data.name)
    const {icon, description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    document.querySelector(".city").innerHTML="Weather in "+ name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed:"+speed+"km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
    console.log(document.querySelector(".search-bar").value)

},
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });   

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Ernakulam");