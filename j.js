$(document).ready(function () {

    const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="

    const weatherApikey = "&apikey=643d14062ad0bb267798f46621468124"


    function currentWeather(searchValue) {
        $.ajax({
            url: weatherUrl + searchValue + weatherApikey + "&units=imperial",
            type: "GET",
        
        }) .then(function (response) {
                console.log(response)
                $(".today").html("<h1>" + response.name + " Weather Details</h1>" + "Temperature " + response.main.temp)
                $(".today").html("<h1>" + response.name + " Weather Details</h1>" + "Humidity " + response.main.humidity)
                $(".today").html("<h1>" + response.name + " Weather Details</h1>" + "WindSpeed " + response.wind.speed)

                // add others here
               var item = $("<li>").html($("<button>").text(searchValue))
               $(".list").append(item)
            })


    }
    function getForecast(searchValue) {
        $.ajax({
            url: "http://pro.openweathermap.org/data/2.5/forecast/hourly?q=",
            type: "GET",
        }).then(function (response) {
            console.log(Url);
            console.log(response);
            // add list to cities --appen
            $("#search-button").on("click", function () {
                var searchValue = $("#search-value").val();
                // search weather function here
                currentWeather(searchValue);
            });
        });
    }
    


    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val()
        // search weather function here
        currentWeather(searchValue);

    })


})