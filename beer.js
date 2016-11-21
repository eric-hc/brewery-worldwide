function searchBrewery() {
    var query = document.getElementById("city_query").value;
    $.ajax({
    type: "GET",
    url: "http://localhost:3000/test?query=" + query,
    success: function(result) {
        console.log(result);
    },
    error: function(result) {
        console.log("Error");
    }
    });
}