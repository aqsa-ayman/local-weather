$(document).ready(function() {
  
  var lat;
  var long; 
  $.getJSON("https://ipinfo.io/json", function (data2) {
    var loc = data2.loc.split(",")
    console.log();
    lat = loc[0];
    long = loc[1];
    var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+ "&lon="+long+"&appid=4677bae7b7d19e182c65fc68615548f1"; 

$.getJSON(api, function(data) {
  var kelvin = data.main.temp; // use object notation to retrieve temperature (default measurement is in Kelvin)
  var fahr = Math.round((9/5)*(kelvin - 273) + 32)+"°F"; 
  var celsius = Math.round(kelvin - 273)+"°C";
  var city = data.name;
  var tempswap = true;
  var description = data.weather[0].description;
  $("#cityCountry").html(city);
  $("#description").html(description);
  $("#temp").html(celsius);
  
    $("#temp").click(function() { // temp switch celsius to fahrenheit and back 
      if (tempswap === true) {
        $("#temp").html(fahr);
        tempswap = false;
      }
      else {
        $("#temp").html(celsius);
        tempswap = true;
      }
     }); 
    $("body").css("background-image","url(http://cdn.pcwallart.com/images/gradient-wallpaper-1.jpg)");
  $("body").css("background-size","cover");  
 // end default 
  
  str = data.weather[0].description;
  if (str.toLowerCase().indexOf("cloud") >= 0) {
  $("body").css("background-image","url(https://i.ytimg.com/vi/xfrbTjcdyHA/maxresdefault.jpg)");
  $("body").css("background-size","cover");
} // end cloud if 
  
  if (str.toLowerCase().indexOf("mist") >= 0) {
  $("body").css("background-image","url(http://il5.picdn.net/shutterstock/videos/8855752/thumb/1.jpg)");
  $("body").css("background-size","cover");  
} // end mist if 
  
  if (str.toLowerCase().indexOf("fog") >= 0) {
  $("body").css("background-image","url(http://il5.picdn.net/shutterstock/videos/8855752/thumb/1.jpg)");
  $("body").css("background-size","cover");  
} // end fog if 
  
   if (str.toLowerCase().indexOf("sun") >= 0) {
  $("body").css("background-image","url(http://www.arizonalisting.info/wp-content/uploads/2015/10/AZ-Sun.png)");
  $("body").css("background-size","cover");  
} // end sun if 
  
  if (str.toLowerCase().indexOf("rain") >= 0) {
  $("body").css("background-image","url(https://images5.alphacoders.com/407/407884.jpg)");
  $("body").css("background-size","cover");  
} // end rain if 
  
   if (str.toLowerCase().indexOf("clear") >= 0) {
  $("body").css("background-image","url(https://innovacion19.files.wordpress.com/2015/04/wallhaven-50267.jpg?w=1200)");
  $("body").css("background-size","cover");  
} // end clear if 
  
  if (str.toLowerCase().indexOf("snow") >= 0) {
  $("body").css("background-image","url(http://www.pixelstalk.net/wp-content/uploads/2015/12/Winter-Snow-Background-Download.jpg)");
  $("body").css("background-size","cover");  
} // end snow if 
  
   if (str.toLowerCase().indexOf("thunder") >= 0) {
  $("body").css("background-image","url(http://bsnscb.com/data/out/196/39153056-thunder-wallpapers.jpg)");
  $("body").css("background-size","cover");  
} // end thunder if 
  
   if (str.toLowerCase().indexOf("breeze") >= 0) {
  $("body").css("background-image","url(http://cdn.wallpapersafari.com/37/52/Nq2I0a.jpg)");
  $("body").css("background-size","cover");  
}
  
   if (str.toLowerCase().indexOf("wind") >= 0) {
  $("body").css("background-image","url(https://tienganhpanda.com/upload/12721/20160517/windy-winter-1920x1200-wallpaper430287.jpg)");
  $("body").css("background-size","cover");  
} // end wind if  
  
   }); // end second JSON get 
    
    
  }); // end first JSON get 


  
});  // end document.ready 
  